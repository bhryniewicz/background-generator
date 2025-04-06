import { FormValues } from "@/components/BackgroundCreationForm/schema";
import { randomRange } from "@/utils/testNumberRandomRange";

export class CanvasService {
  private canvas: HTMLCanvasElement | null;
  private context: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas;
    this.context = canvas ? canvas.getContext("2d") : null;
  }

  private setCanvasSize(width: number, height: number) {
    if (this.canvas) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }

  private fillBackground(color: string) {
    if (this.context && this.canvas) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  private setImageOpacity(imageOpacity: number) {
    if (!this.context) return;

    this.context.globalAlpha = imageOpacity;
  }

  private async loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Failed to load image"));
    });
  }

  private async drawImagesInRandomPositions(
    file: File,
    imageDifferentSizes: boolean,
    imageAmount: number
  ) {
    if (!this.context || !this.canvas) return;

    const image = await this.loadImage(URL.createObjectURL(file));
    const ctx = this.context;

    const positions = Array.from({ length: imageAmount }, () => ({
      x: Math.random() * (this.canvas!.width - 50),
      y: Math.random() * (this.canvas!.height - 50),
      rotation: Math.random() * 360,
    }));

    positions.forEach(({ x, y, rotation }) => {
      let width: number;
      let height: number;

      if (imageDifferentSizes) {
        width = 100;
        height = 100;
      } else {
        width = randomRange(50, 150);
        height = randomRange(50, 150);
      }

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(image, 0, 0, width, height);
      ctx.restore();
    });

    return await this.canvas.toDataURL();
  }

  async generateCanvas(options: FormValues) {
    const {
      color,
      image,
      amount: { min, max },
      imageDifferentSizes,
      imageOpacity,
      shape: { width, height },
    } = options;

    const imageAmount = randomRange(min, max);

    this.setCanvasSize(width, height);
    this.fillBackground(color);
    this.setImageOpacity(imageOpacity);

    return await this.drawImagesInRandomPositions(
      image,
      imageDifferentSizes,
      imageAmount
    );
  }

  downloadCanvas() {
    if (this.canvas) {
      const url = this.canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "filename.png";
      link.href = url;
      link.click();
    }
  }
}
