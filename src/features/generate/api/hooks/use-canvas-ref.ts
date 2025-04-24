"use client";

import { useCallback } from "react";
import { CanvasService } from "../service/canvas-service";
import { useCanvasStore } from "../store/canvas-store";

export const useCanvasRef = () => {
  const { canvasManager, formData, setCanvasManager, setImgUrl } =
    useCanvasStore();

  const setCanvasRef = useCallback(
    async (canvasElement: HTMLCanvasElement | null) => {
      if (!canvasElement) return;

      if (!canvasManager) {
        const manager = CanvasService.getInstance(canvasElement);
        setCanvasManager(manager);

        if (formData) {
          try {
            const imageUrl = await manager.generateCanvas(formData);
            setImgUrl(imageUrl);
          } catch (error) {
            console.error("Failed to generate canvas:", error);
          }
        }
      } else {
        // Update the canvas if manager exists
        canvasManager.updateCanvas(canvasElement);
      }
    },
    [canvasManager, formData, setCanvasManager, setImgUrl]
  );

  return { setCanvasRef };
};
