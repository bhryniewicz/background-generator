"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { FileDownIcon } from "lucide-react";

type Dimensions = {
  width: number;
  height: number;
};

export const ImageUploader = () => {
  const [imageDimensions, setImageDimensions] = useState<Dimensions | null>(
    null
  );
  const { watch, control, setValue, trigger } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const image = watch("image");

  const handleOpenFileDialog = () => {
    inputRef.current?.click();
  };

  const handleFile = useCallback(
    (file: File) => {
      setValue("image", file);
      trigger("image");

      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImageDimensions({
          width: img.width,
          height: img.height,
        });
      };
    },
    [setValue, trigger]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        handleFile(acceptedFiles[0]);
      }
    },
    [handleFile]
  );

  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: { "image/*": [] },
  });

  const uploadText = watch("image") ? "change image" : "choose image";

  return (
    <FormField
      control={control}
      name="image"
      render={() => (
        <FormItem className="h-full">
          <FormControl>
            <div
              {...getRootProps()}
              className={cn(
                "flex flex-col items-center justify-center gap-4 border border-dashed border-white/40 rounded-md p-6 text-center transition-all duration-300",
                isDragActive ? "bg-white/10 border-white" : "bg-transparent",
                watch("image") && "border-white"
              )}
            >
              <Input
                ref={inputRef}
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
              <FileDownIcon
                size={92}
                style={{ color: "white", opacity: 0.2 }}
              />
              <h1 className="text-white text-2xl font-semibold">
                Let’s get creative!
              </h1>
              <div className="text-white/60 text-sm lg:text-base">
                Drop your image here or{" "}
                <span
                  className="text-[#b13cff] cursor-pointer hover:underline transition-all"
                  onClick={handleOpenFileDialog}
                >
                  {uploadText}
                </span>
              </div>

              {image && (
                <div className="text-white text-sm mt-2">
                  {image.name}{" "}
                  {imageDimensions &&
                    `(${imageDimensions.width} × ${imageDimensions.height}px)`}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
