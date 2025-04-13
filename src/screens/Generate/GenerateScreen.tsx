"use client";

import { BackgroundCreationForm } from "@/components/BackgroundCreationForm";
import { Canvas } from "@/components/Canvas/Canvas";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGenerateImage } from "@/hooks/useGenerateImage";
import { FC } from "react";
import {
  MonitorDownIcon,
  ImagesIcon,
  SquarePenIcon,
  PickaxeIcon,
} from "lucide-react";

export const GenerateScreen = () => {
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
    handleSaveInGallery,
  } = useGenerateImage();

  return (
    <div className="col-span-12 grid grid-cols-13 border-2 border-[#2e2e2e] bg-[#161616] mt-12 mb-6 overflow-hidden rounded-2xl shadow-[1px_4px_30px_0px_rgba(255,_255,_255,_0.1)]">
      <div className="col-span-4 flex-grow-1 p-10 bg-[#272727]">
        {!isCanvasGenerated ? (
          <>
            <BackgroundCreationForm
              onSubmit={onSubmit}
              savedValues={formData}
            />
          </>
        ) : (
          <div className="flex flex-col gap-4">
            <h1 className="text-sm text-center font-bold mb-4 text-white">
              Actions which you can do with image:
            </h1>
            <div className="grid grid-cols-2 gap-6">
              <OptionButton
                text="Download image"
                icon={MonitorDownIcon}
                onClick={handleDownloadImage}
              />
              <OptionButton
                text="Save in gallery"
                icon={ImagesIcon}
                onClick={handleSaveInGallery}
              />
              <OptionButton
                text="Generate again"
                icon={PickaxeIcon}
                onClick={handleGenerateAgain}
              />
              <OptionButton
                text="Change options"
                icon={SquarePenIcon}
                onClick={handleChangeOptions}
              />
              <OptionButton
                text="Cancel"
                icon={SquarePenIcon}
                onClick={handleCancelCanvasGeneration}
                isCancel
              />
            </div>
          </div>
        )}
      </div>

      <div className="col-span-9 h-full w-full p-8 pl-0 bg-[#272727] ">
        <div className={cn("relative transition-opacity h-full")}>
          {isCanvasGenerated && imgUrl ? (
            <Image
              fill
              alt="Generated image"
              src={imgUrl}
              priority={true}
              className="rounded-lg"
            />
          ) : (
            <div className="border border-white/40 h-full" />
          )}
        </div>
        <Canvas ref={setCanvasRef} />
      </div>
    </div>
  );
};

interface OptionButtonProps {
  icon: React.ElementType;
  text: string;
  onClick: () => void;
  isCancel?: boolean;
}

const OptionButton: FC<OptionButtonProps> = ({
  icon: Icon,
  text,
  onClick,
  isCancel = false,
}) => {
  return (
    <Button
      className={cn(
        `flex flex-col min-h-max p-4 border-2 border-white bg-white/40 transition-all duration-300 hover:border-[#9900FF] hover:bg-[#9900FF]/40`,
        isCancel && "hover:border-red-400 hover:bg-red-400/40"
      )}
      onClick={onClick}
    >
      <Icon className="size-8" style={{ opacity: 0.75 }} strokeWidth={1} />
      <p className="text-xs font-medium text-wrap">{text}</p>
    </Button>
  );
};
