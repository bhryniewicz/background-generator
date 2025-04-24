import { useEffect, useRef } from "react";
import { useGenerateImage } from "../../features/generate/api/hooks/use-generate-image";

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setCanvasRef } = useGenerateImage();

  useEffect(() => {
    if (canvasRef.current) {
      setCanvasRef(canvasRef.current);
    }
  }, [setCanvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute opacity-0 pointer-events-none w-0 h-0"
    />
  );
};
