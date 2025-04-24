"use client";

import { addColorToCookies } from "@/utils/addColorToCookies";
import { useCanvasStore } from "../store/canvas-store";
import { FormValues } from "../generate-image-schema";
import { toast } from "sonner";

export const useImageForm = () => {
  const { canvasManager, setFormData, setIsCanvasGenerated, setImgUrl } =
    useCanvasStore();

  const onSubmit = async (data: FormValues) => {
    try {
      addColorToCookies(data.color);
      setFormData(data);
      setIsCanvasGenerated(true);

      if (canvasManager) {
        const imageUrl = await canvasManager.generateCanvas(data);
        setImgUrl(imageUrl);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Error generating image");
    }
  };

  return { onSubmit };
};
