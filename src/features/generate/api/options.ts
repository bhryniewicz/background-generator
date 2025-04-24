import { BoxOption } from "@/components/ui/selectable-boxes";
import { FormValues } from "./generate-image-schema";

export type ImagesRange = {
  min: number;
  max: number;
};

export const rangeOptions: BoxOption<ImagesRange>[] = [
  {
    label: "15 / 30",
    value: {
      min: 15,
      max: 30,
    },
  },
  {
    label: "31 / 60",
    value: {
      min: 31,
      max: 60,
    },
  },
  {
    label: "61 / 100",
    value: {
      min: 61,
      max: 100,
    },
  },
];

export const sizeOptions: BoxOption<number>[] = [
  { label: "50 x 50", value: 50 },
  { label: "100 x 100", value: 100 },
  { label: "150 x 150", value: 150 },
];

export const differntSizesOptions: BoxOption<boolean>[] = [
  {
    label: "Yes",
    value: false,
  },
  {
    label: "No",
    value: true,
  },
];

export const defaultValues: Pick<FormValues, "color" | "imageOpacity"> = {
  color: "#161616",
  imageOpacity: 1,
};
