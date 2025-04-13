import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

type Dimensions = {
  width: number;
  height: number;
};

export const ImageUploader = () => {
  const [imageDimensions, setImageDimensions] = useState<Dimensions | null>(
    null
  );
  const { watch, control, setValue, trigger } = useFormContext();

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : undefined;
    if (uploadedFile) {
      setValue("image", uploadedFile);
      trigger("image");
      const dimensions = new Image();
      dimensions.src = URL.createObjectURL(uploadedFile);

      dimensions.onload = () => {
        setImageDimensions({
          width: dimensions.width,
          height: dimensions.height,
        });
      };
    }
  };

  return (
    <div>
      <FormLabel>IMAGE</FormLabel>
      <FormField
        control={control}
        name={"image"}
        render={() => (
          <FormItem className="flex flex-col gap-2 ">
            <FormControl>
              <Input
                id="picture"
                type="file"
                className={cn(
                  `text-gray-500 w-full border-gray-500 hover:border-white cursor-pointer transition-all duration-300`,
                  watch("image") &&
                    "border-[#b13cff] text-[#b13cff] file:text-gray-500"
                )}
                onChange={handleFileInput}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* {imageDimensions && (
       <FormLabel>Choose image:</FormLabel>
       <FormField
         control={control}
         name={"imageDimensions"}
         render={() => (
           <FormItem className="flex flex-col gap-2">
             <FormControl>
               <Input
                 id="picture"
                 type="file"
                 className={cn(
                   `text-gray-500 border-gray-500 hover:border-white w-min cursor-pointer transition-all duration-300`,
                   watch("image") &&
                     "border-[#b13cff] text-[#b13cff] file:text-gray-500"
                 )}
                 onChange={handleFileInput}
               />
             </FormControl>
             <FormMessage />
           </FormItem>
         )}
       />
        <div className="text-white">
          {imageDimensions.width} | {imageDimensions.height}
        </div>
      )} */}
    </div>
  );
};
