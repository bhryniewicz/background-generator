"use client";

import { Ref } from "react";

export const Canvas = ({ ref }: { ref: Ref<HTMLCanvasElement> }) => {
  return <canvas id="canvas" ref={ref} />;
};
