"use client";

import { useCanvasStore } from "../store/canvas-store";
import { useCanvasRef } from "./use-canvas-ref";
import { useImageForm } from "./use-submit-form";
import { useImageActions } from "./use-image-actions";

export const useGenerateImage = () => {
  const { isCanvasGenerated, imgUrl, formData } = useCanvasStore();
  const { setCanvasRef } = useCanvasRef();
  const { onSubmit } = useImageForm();
  const {
    handleDownloadImage,
    handleChangeOptions,
    handleGenerateAgain,
    handleCancelCanvasGeneration,
  } = useImageActions();

  return {
    // State
    isCanvasGenerated,
    imgUrl,
    formData,

    // Functions
    onSubmit,
    setCanvasRef,
    handleDownloadImage,
    handleChangeOptions,
    handleGenerateAgain,
    handleCancelCanvasGeneration,
  };
};
