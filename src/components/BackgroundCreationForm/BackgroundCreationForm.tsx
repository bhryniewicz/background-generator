"use client";

import Image from "next/image";
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
import { cn } from "@/lib/utils";
import { FC } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

interface BackgroundCreationFormProps {
  onSubmit: SubmitHandler<FormValues>;
  colors: RequestCookie | undefined;
  savedValues?: FormValues | null;
}

export const BackgroundCreationForm: FC<BackgroundCreationFormProps> = ({
  onSubmit,
  colors,
  savedValues,
}) => {
  const form = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: savedValues ?? defaultValues,
  });

  const { handleSubmit, watch } = form;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-32 px-18 py-12 border border-[#2e2e2e] rounded-[40px] bg-[#1F083C]/50 flex-grow-1 my-12 overflow-hidden"
      >
        <div className="flex flex-col gap-6">
          <ImageUploader />
          <ColorPicker colors={colors?.value} />
          <SelectableBoxes
            options={rangeOptions}
            name={"amount"}
            formLabel="Choose how many imag\es on background:"
          />
          <SelectableBoxes
            options={differntSizesOptions}
            name={"imageDifferentSizes"}
            formLabel="Should images be pdifferent sizes?"
          />
          <SelectableBoxes
            options={sizeOptions}
            name={"imageSize"}
            formLabel="Select size of images:"
          />
          <ImageOpacitySlider />
          <Shapes />
        </div>
        <div className="w-full h-full flex flex-col gap-8 items-center justify-center overflow-hidden">
          <div
            className={cn(
              `flex items-center justify-center border border-gray-600 relative w-full h-full`
            )}
            style={{ opacity: watch("imageOpacity") }}
          >
            {watch("image") ? (
              <Image
                src={URL.createObjectURL(watch("image"))}
                alt="picked image"
                fill
              />
            ) : (
              <h3 className="text-white font-joti_one">No file choosen</h3>
            )}
          </div>

          <div className="flex gap-4 w-full justify-end">
            <Button type="submit">Generate background</Button>
            <Button variant={"outline"}>cancel</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
