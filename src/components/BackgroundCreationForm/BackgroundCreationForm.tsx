"use client";

import { ColorPicker } from "../ColorPicker";
import {
  differntSizesOptions,
  rangeOptions,
  defaultValues,
  sizeOptions,
} from "./values";
import { SelectableBoxes } from "../SelectableBoxes";
import { ImageOpacitySlider } from "../ImageOpacitySlider";
import { Button } from "../ui/button";
import { Shapes } from "../Shapes";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormValues, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageUploader } from "../ImageUploader";
import { FC } from "react";

interface BackgroundCreationFormProps {
  onSubmit: SubmitHandler<FormValues>;
  savedValues?: FormValues | null;
}

export const BackgroundCreationForm: FC<BackgroundCreationFormProps> = ({
  onSubmit,
  savedValues,
}) => {
  const form = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: savedValues ?? defaultValues,
  });

  console.log(savedValues, "saved");

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
