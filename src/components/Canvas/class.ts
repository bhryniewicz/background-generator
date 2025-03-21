export class CanvasService {
  private canvas: HTMLCanvasElement | null;
  private context: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas;
    this.context = canvas ? canvas.getContext("2d") : null;
  }

  setCanvasSize(width: number, height: number) {
    if (this.canvas) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }

  fillBackground(color: string) {
    if (this.context && this.canvas) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
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

  async drawRandomImages(file: File, width: number, height: number) {
    if (!this.context) return;
    const image = await this.loadImage(URL.createObjectURL(file));
    const positions = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
    }));

    positions.forEach(({ x, y }) => {
      this.context!.drawImage(image, x, y, 100, 100);
    });
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

//   const addImage = async () => {
//     if (file) {
//       setImages((prevImages) => [
//         ...prevImages,
//         { image, x: Math.random() * width, y: Math.random() * height },
//       ]);
//       console.log("Image added to the list.");
//     } else {
//       const image = await loadImage("https://picsum.photos/id/237/200/300");
//       setImages((prevImages) => [
//         ...prevImages,
//         { image, x: Math.random() * width, y: Math.random() * height },
//       ]);
//       console.log("Image added to the list.");
//     }
//   };

//   const [images, setImages] = useState<
//     Array<{ image: HTMLImageElement; x: number; y: number }>
//   >([]);
