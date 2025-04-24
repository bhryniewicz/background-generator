import { OptionButton } from "@/components/ui/option-button";
import { MonitorDownIcon, SquarePenIcon, PickaxeIcon } from "lucide-react";
import { useGenerateImage } from "../api/hooks/use-generate-image";

export const OptionsMenu = () => {
  const {
    handleCancelCanvasGeneration,
    handleChangeOptions,
    handleDownloadImage,
    handleGenerateAgain,
  } = useGenerateImage();

  return (
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
        {/* <OptionButton
    text="Save in gallery"
    icon={ImagesIcon}
    onClick={handleSaveInGallery}
  /> */}
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
  );
};
