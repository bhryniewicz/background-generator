import { FormValues } from "@/components/BackgroundCreationForm/schema";
import { CanvasService } from "@/services/CanvasService";
import { addColorToCookies } from "@/screens/Generate/utils";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useImages } from "./useImages";

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
    console.log(data);
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
