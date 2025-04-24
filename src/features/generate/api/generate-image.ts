import { CanvasService } from "@/features/generate/lib/canvas-service";
import { addColorToCookies } from "@/utils/addColorToCookies";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useImages } from "../../gallery/api/useImages";
import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/config/constants";

const imageSchema = z
  .instanceof(File, {
    message: "Select image to generate background.",
  })
  .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "Only .jpg, .jpeg, .png and .webp formats are supported."
  );

export const generateImageSchema = z.object({
  color: z.string(),
  image: imageSchema,
  amount: z.object(
    {
      min: z.number(),
      max: z.number(),
    },
    { message: "Select one of the options." }
  ),
  imageSize: z.number(),
  imageDifferentSizes: z.boolean({ message: "Select one of the options." }),
  imageOpacity: z.number(),
  shape: z.object(
    {
      width: z.number(),
      height: z.number(),
    },
    { message: "Select one of the options." }
  ),
});

export type FormValues = z.infer<typeof generateImageSchema>;

export const useGenerateImage = () => {
  const [isCanvasGenerated, setIsCanvasGenerated] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormValues | null>(null);
  const [canvasManager, setCanvasManager] = useState<CanvasService | null>(
    null
  );
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
  const { addImageMutation } = useImages();

  const setCanvasRef = useCallback(
    (canvasElement: HTMLCanvasElement | null) => {
      const generateCanvasAsync = async (canvasElement: HTMLCanvasElement) => {
        if (!canvasManager) {
          const manager = new CanvasService(canvasElement);
          setCanvasManager(manager);

          if (formData) {
            const imge = await manager.generateCanvas(formData);
            setImgUrl(imge);
          }
        }
      };

      if (canvasElement) {
        generateCanvasAsync(canvasElement);
      }
    },
    [canvasManager, formData]
  );

  const onSubmit = async (data: FormValues) => {
    addColorToCookies(data.color);
    setFormData(data);
    setIsCanvasGenerated(true);

    if (canvasManager) {
      const imageUrl = await canvasManager.generateCanvas(data);
      setImgUrl(imageUrl);
    }
  };

  const handleDownloadImage = () => {
    canvasManager?.downloadCanvas();
    toast("Image has been downloaded.");
  };

  const handleChangeOptions = () => {
    setIsCanvasGenerated(false);
  };

  const handleSaveInGallery = () => {
    if (!imgUrl) return toast("Cannot save image");

    addImageMutation(imgUrl);
    toast("Image has been saved in gallery.");
  };

  const handleGenerateAgain = async () => {
    if (canvasManager && formData) {
      const imageUrl = await canvasManager.generateCanvas(formData);
      setImgUrl(imageUrl);
    }
  };

  const handleCancelCanvasGeneration = () => {
    redirect("/");
  };

  return {
    isCanvasGenerated,
    imgUrl,
    onSubmit,
    formData,
    setCanvasRef,
    handleCancelCanvasGeneration,
    handleGenerateAgain,
    handleChangeOptions,
    handleDownloadImage,
    handleSaveInGallery,
  };
};
