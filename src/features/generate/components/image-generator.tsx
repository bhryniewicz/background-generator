import { useGenerateImage } from "@/features/generate/api/hooks/use-generate-image";
import { ImageGenerationForm } from "./image-generator-form";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Canvas } from "@/components/ui/canvas";
import { OptionsMenu } from "./options-menu";
import { FormValues, generateImageSchema } from "../api/generate-image-schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "../api/options";
import { ImageUploader } from "./image-uploader";

export const ImageGenerator = () => {
  const {
    isCanvasGenerated,
    imgUrl,
    formData: savedValues,
  } = useGenerateImage();

  const form = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(generateImageSchema),
    defaultValues: savedValues ?? defaultValues,
  });

  return (
    <FormProvider {...form}>
      <div className="order-2 lg:order-1 col-span-1 lg:col-span-6 2xl:col-span-4">
        {!isCanvasGenerated ? <ImageGenerationForm /> : <OptionsMenu />}
      </div>

      <div className="order-1 lg:order-2 col-span-1 lg:col-span-7 2xl:col-span-9 pl-0 xl:pl-8 bg-[#272727]">
        <div className="relative transition-opacity h-full">
          {isCanvasGenerated && imgUrl ? (
            <Image
              fill
              alt="Generated image"
              src={imgUrl}
              priority={true}
              className="rounded-lg"
            />
          ) : (
            <ImageUploader />
          )}
        </div>
        <Canvas />
      </div>
    </FormProvider>
  );
};
