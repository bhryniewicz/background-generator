import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export const BackgroundCreationForm = () => {
  const [color, setColor] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null;
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    // zod / add react-hook-form
    // divide on 2 columns
    <form>
      {/* add custom with this what is in excalidraw */}

      <HexColorPicker color={color} onChange={setColor} />
      {file && (
        <Image
          src={URL.createObjectURL(file)}
          alt="picked image"
          width={60}
          height={60}
        />
      )}
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input
          id="picture"
          type="file"
          onChange={handleFileInput}
          className="text-white"
        />
      </div>

      <Label htmlFor="amount">Amount of images</Label>
      <Input
        id="images"
        type="number"
        onChange={handleFileInput}
        className="text-white"
      />
      {/* more inputs - shape, opacity (slider), different sizes fo images */}
    </form>
  );
};
