"use client";

import { Button } from "@/components/ui/button";
import { useImages } from "@/hooks/useImages";
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

  return (
    <div className="grid grid-cols-4 gap-8 mt-12">
      {data.map(({ url, id }) => {
        return (
          <div key={id}>
            <div className="relative w-full h-[250px] rounded-md overflow-hidden">
              <Image fill alt="eeee" src={url} />
            </div>
            <div className="flex gap-4 mt-4">
              <Button
                className="bg-red-400"
                onClick={() => deleteImageMutation(id)}
              >
                delete
              </Button>
              <Button onClick={() => handleDownloadFromGallery(url)}>
                Download
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
