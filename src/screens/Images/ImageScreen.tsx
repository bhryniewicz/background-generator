"use client";

import { useImages } from "@/hooks/useImages";
import { EraserIcon, MonitorDownIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export const ImagesScreen = () => {
  const { isLoading, data, deleteImageMutation } = useImages();

  if (isLoading) return <h1 className="text-white">Loading image...</h1>;
  if (!data) return <h1 className="text-white">No images yet</h1>;

  const handleDownloadFromGallery = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "filename.png";
    link.click();
    toast("Image from gallery has been downloaded.");
  };

  const iconProps = {
    size: 20,
    className: "hover:text-[#9900FF] cursor-pointer ",
  };

  return (
    <div className="col-span-12 grid grid-cols-3 gap-10 mt-12 ">
      <div className="col-span-3">
        <h1 className="text-[#9900FF] text-xl mb-2">GALLERY</h1>
        <p className="text-white text-sm font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ad
          culpa dicta nulla asperiores ipsam voluptatum veritatis sequi
          recusandae excepturi.
        </p>
      </div>
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
