"use client";

import { BackgroundCreationForm } from "@/components/BackgroundCreationForm";
import { Canvas } from "@/components/Canvas/Canvas";
import { cn } from "@/lib/utils";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGenerateImage } from "@/hooks/useGenerateImage";
import { FC } from "react";

interface GenerateScreenProps {
  colors: RequestCookie | undefined;
}

export const GenerateScreen: FC<GenerateScreenProps> = ({ colors }) => {
  const {
    isCanvasGenerated,
    onSubmit,
    imgUrl,
    formData,
    handleCancelCanvasGeneration,
    handleChangeOptions,
    handleDownloadImage,
    handleGenerateAgain,
    setCanvasRef,
  } = useGenerateImage();

  return (
    <>
      {!isCanvasGenerated ? (
        <BackgroundCreationForm
          onSubmit={onSubmit}
          colors={colors}
          savedValues={formData}
        />
      ) : (
        <div className="grid grid-cols-4 h-full gap-16 my-16">
          <div
            className={cn(
              "relative transition-opacity col-start-1 col-end-4 h-full",
              isCanvasGenerated && "opacity-100"
            )}
          >
            {imgUrl && (
              <Image
                fill
                alt="Generated image"
                src={imgUrl}
                priority={true}
                className="rounded-lg"
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm text-center font-bold mb-4 text-white">
              Actions which you can do with image:
            </h1>
            <Button onClick={handleDownloadImage}>Download image</Button>
            <Button onClick={handleDownloadImage}>Save in gallery</Button>
            <Button onClick={handleChangeOptions}>Change options</Button>
            <Button onClick={handleGenerateAgain}>Generate again</Button>
            <Button
              variant={"secondary"}
              onClick={handleCancelCanvasGeneration}
            >
              Cancel
            </Button>
          </div>

          <Canvas ref={setCanvasRef} />
        </div>
      )}
    </>
  );
};
