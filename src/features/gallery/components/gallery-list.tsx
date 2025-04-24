"use client";

import { useImages } from "@/features/gallery/api/useImages";
import { iconProps } from "@/styles/lucide-icons-styling";
import { EraserIcon, MonitorDownIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export const GalleryList = () => {
  const { isLoading, data, deleteImageMutation } = useImages();

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
    <div className="col-span-9 grid grid-cols-2 gap-8">
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
                <EraserIcon
                  onClick={() => deleteImageMutation(id)}
                  {...iconProps}
                />
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
