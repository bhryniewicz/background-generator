"use client";

import { useFormContext } from "react-hook-form";
import {
  differntSizesOptions,
  rangeOptions,
  sizeOptions,
} from "@/features/generate/api/options";
import { ColorPicker } from "../../../components/ui/color-picker";
import { SelectableBoxes } from "@/components/ui/selectable-boxes";
import { Button } from "@/components/ui/button";
import { ImageOpacitySlider } from "./opacity-slider";
import { Shapes } from "../../../components/ui/background-dimensions";
import { useGenerateImage } from "../api/hooks/use-generate-image";
import { FormValues } from "../api/generate-image-schema";

export const ImageGenerationForm = () => {
  const { onSubmit } = useGenerateImage();
  const { handleSubmit } = useFormContext<FormValues>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="background_generation_form"
      className="h-full"
    >
      <div className="flex flex-col gap-4 h-full">
        <ColorPicker />
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
        <div className="flex flex-col-reverse @xl/Gen:flex-row gap-4 mt-12 md:mt-auto ">
          <Button variant={"outline"} className="shrink">
            cancel
          </Button>
          <Button type="submit" className="shrink">
            generate
          </Button>
        </div>
      </div>
    </form>
  );
};
