"use client";

import { useCanvasStore } from "../store/canvas-store";
import { FormValues } from "../generate-image-schema";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const useImageForm = () => {
  const queryClient = useQueryClient();
  const { canvasManager, setFormData, setIsCanvasGenerated, setImgUrl } =
    useCanvasStore();

  const onSubmit = async (data: FormValues) => {
    try {
      const currentColors: string[] =
        queryClient.getQueryData(["USED_COLORS"]) || [];

      const updatedColors = Array.from(new Set([data.color, ...currentColors]));
      queryClient.setQueryData(["USED_COLORS"], updatedColors);

      Cookies.set("color", JSON.stringify(updatedColors));

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
