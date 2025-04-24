"use client";

import { iconProps } from "@/styles/lucide-icons-styling";
import { EraserIcon, MonitorDownIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useImages } from "../api/get-images";
import { useDeleteImage } from "../api/delete-image";

export const GalleryList = () => {
  const { data, isLoading } = useImages();
  const { mutate } = useDeleteImage();

  const handleDownloadFromGallery = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "filename.png";
    link.click();
    toast("Image from gallery has been downloaded.");
  };

  if (isLoading) return <h1 className="text-white">Loading image...</h1>;

  if (!data) return null;

  return (
    <div className="col-span-10 grid grid-cols-2 gap-8 pl-8">
      {data.map(({ url, id }) => {
        return (
          <div key={id} className="group max-h-min overflow-hidden">
            <div className="relative w-full h-[200px] border-2 border-white overflow-hidden">
              <Image
                fill
                alt="eeee"
                src={url}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex justify-between items-center bg-white gap-4 px-8 py-4">
              <h2 className="text-black font-semibold">IMAGE</h2>
              <div className="flex gap-4">
                <EraserIcon onClick={() => mutate(id)} {...iconProps} />
                <MonitorDownIcon
                  onClick={() => handleDownloadFromGallery(url)}
                  {...iconProps}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
