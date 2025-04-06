"use client";

import { Ref } from "react";

export const Canvas = ({ ref }: { ref: Ref<HTMLCanvasElement> }) => {
  return (
    <canvas
      id="canvas"
      ref={ref}
      className="absolute opacity-0 pointer-events-none w-0 h-0"
    />
  );
};
