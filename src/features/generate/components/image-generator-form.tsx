"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  defaultValues,
  differntSizesOptions,
  rangeOptions,
  sizeOptions,
} from "@/features/generate/api/options";
import { ColorPicker } from "../../../components/ui/color-picker";
import { ImageUploader } from "./image-uploader";
import { SelectableBoxes } from "@/components/ui/selectable-boxes";
import { Button } from "@/components/ui/button";
import { ImageOpacitySlider } from "./opacity-slider";
import { Shapes } from "../../../components/ui/background-dimensions";
import { FormValues, generateImageSchema } from "../api/generate-image-schema";
import { useGenerateImage } from "../api/hooks/use-generate-image";

export const BackgroundCreationForm = () => {
  const { onSubmit, formData: savedValues } = useGenerateImage();

  const form = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(generateImageSchema),
    defaultValues: savedValues ?? defaultValues,
  });

  const { handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} id="background_generation_form">
        <div className="flex flex-col gap-4">
          <ColorPicker />
          <ImageUploader />
          <SelectableBoxes
            options={rangeOptions}
            name={"amount"}
            formLabel="NUMBER OF PICTURES"
          />
          <SelectableBoxes
            options={differntSizesOptions}
            name={"imageDifferentSizes"}
            formLabel="DIFFERENT IMAGE SIZES"
          />
          <SelectableBoxes
            options={sizeOptions}
            name={"imageSize"}
            formLabel="IMAGE SIZE"
          />
          <ImageOpacitySlider />
          <Shapes />
          <div className="w-full h-full flex flex-col gap-8 items-center justify-center overflow-hidden mt-6">
            <div className="flex gap-4 w-full justify-end ">
              <Button variant={"outline"} className="text-sm flex-grow-1">
                cancel
              </Button>
              <Button type="submit" className="text-sm flex-grow-1">
                Generate
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
