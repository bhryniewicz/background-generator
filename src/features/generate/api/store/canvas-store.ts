"use client";

import { create } from "zustand";
import { FormValues } from "../generate-image-schema";
import { CanvasService } from "../service/canvas-service";

type CanvasState = {
  canvasManager: CanvasService | null;
  imgUrl: string | undefined;
  formData: FormValues | null;
  isCanvasGenerated: boolean;
  setCanvasManager: (manager: CanvasService) => void;
  setImgUrl: (url: string | undefined) => void;
  setFormData: (data: FormValues | null) => void;
  setIsCanvasGenerated: (value: boolean) => void;
  reset: () => void;
};

const initialState = {
  canvasManager: null,
  imgUrl: undefined,
  formData: null,
  isCanvasGenerated: false,
};

export const useCanvasStore = create<CanvasState>((set) => ({
  ...initialState,
  setCanvasManager: (manager) => set({ canvasManager: manager }),
  setImgUrl: (url) => set({ imgUrl: url }),
  setFormData: (data) => set({ formData: data }),
  setIsCanvasGenerated: (value) => set({ isCanvasGenerated: value }),
  reset: () => set(initialState),
}));
