"use client";

import { BackgroundCreationForm } from "@/components/BackgroundCreationForm";
import { Canvas } from "@/components/Canvas/Canvas";
import { CanvasService } from "@/components/Canvas/class";
import { Button } from "@/components/ui/button";

import { useState, useCallback } from "react";

export default function GeneratePage() {
  const [isCanvasGenerated, setIsCanvasGenerated] = useState<boolean>(false);
  const [canvasManager, setCanvasManager] = useState<CanvasService | null>(
    null
  );

  const setCanvasRef = useCallback(
    (canvasElement: HTMLCanvasElement | null) => {
      if (canvasElement) {
        setCanvasManager(new CanvasService(canvasElement));
      }
    },
    []
  );

  const handleDownloadImage = () => {
    if (canvasManager) {
      canvasManager.downloadCanvas();
    }
  };

  const handleSize = async () => {
    setIsCanvasGenerated(true);

    if (canvasManager) {
      canvasManager.setCanvasSize(500, 500);
      canvasManager.fillBackground("black");
    }
  };

  //   const handleDrawImageOnCanvas = () => {
  //     if (canvasManager && file) {
  //       canvasManager.drawRandomImages(file, 50, 50);
  //     }
  //   };

  return (
    <div className="flex gap-4">
      {!isCanvasGenerated ? (
        <div>
          <BackgroundCreationForm />
          <Button onClick={handleDownloadImage}>Download Image</Button>

          <button onClick={handleSize} className="text-white">
            Generate Canvas
          </button>
          {/* <button onClick={handleDrawImageOnCanvas} className="text-white">
            Draw Image
          </button> */}
        </div>
      ) : (
        <div>
          <Canvas ref={setCanvasRef} />
        </div>
      )}
    </div>
  );
}
