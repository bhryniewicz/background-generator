"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCanvasStore } from "../store/canvas-store";

export const useImageActions = () => {
  const { canvasManager, formData, imgUrl, setIsCanvasGenerated } =
    useCanvasStore();
  const router = useRouter();

  const handleDownloadImage = () => {
    if (!canvasManager) {
      toast.error("Canvas not initialized");
      return;
    }

    try {
      canvasManager.downloadCanvas();
      toast.success("Image has been downloaded.");
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download image");
    }
  };

  const handleChangeOptions = () => {
    setIsCanvasGenerated(false);
  };

  //   const handleSaveInGallery = async () => {
  //     if (!imgUrl) {
  //       toast.error("Cannot save image");
  //       return;
  //     }

  //     try {
  //       const result = await saveImageAction(imgUrl);

  //       if (result.success) {
  //         toast.success("Image has been saved in gallery.");
  //       } else {
  //         toast.error(result.message);
  //       }
  //     } catch (error) {
  //       console.error("Save error:", error);
  //       toast.error("Failed to save image");
  //     }
  //   };

  const handleGenerateAgain = async () => {
    if (!canvasManager || !formData) {
      toast.error("Cannot regenerate image");
      return;
    }

    try {
      const imageUrl = await canvasManager.generateCanvas(formData);
      useCanvasStore.getState().setImgUrl(imageUrl);
      toast.success("New image generated");
    } catch (error) {
      console.error("Regenerate error:", error);
      toast.error("Failed to generate new image");
    }
  };

  const handleCancelCanvasGeneration = () => {
    router.push("/");
  };

  return {
    handleDownloadImage,
    handleChangeOptions,
    handleGenerateAgain,
    handleCancelCanvasGeneration,
  };
};
