import { useGenerateImage } from "@/features/generate/api/hooks/use-generate-image";
import { BackgroundCreationForm } from "./image-generator-form";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Canvas } from "@/components/ui/canvas";
import { OptionsMenu } from "./options-menu";

export const ImageGenerator = () => {
  const { isCanvasGenerated, imgUrl } = useGenerateImage();

  return (
    <>
      <div className="col-span-4 flex-grow-1">
        {!isCanvasGenerated ? <BackgroundCreationForm /> : <OptionsMenu />}
      </div>
      {/*TODO: /drag n drop for files */}
      <div className="col-span-9 h-full w-full pl-8 bg-[#272727] ">
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
        <Canvas />
      </div>
    </>
  );
};
