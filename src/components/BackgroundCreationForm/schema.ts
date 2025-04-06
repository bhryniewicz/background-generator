import { z } from "zod";

const MAX_FILE_SIZE = 50000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const fileSchema = z
  .instanceof(File, {
    message: "Select image to generate background.",
  })
  .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "Only .jpg, .jpeg, .png and .webp formats are supported."
  );

export const schema = z.object({
  color: z.string(),
  image: fileSchema,
  amount: z.object(
    {
      min: z.number(),
      max: z.number(),
    },
    { message: "Select one of the options." }
  ),
  imageSize: z.number(),
  imageDifferentSizes: z.boolean({ message: "Select one of the options." }),
  imageOpacity: z.number(),
  shape: z.object(
    {
      width: z.number(),
      height: z.number(),
    },
    { message: "Select one of the options." }
  ),
});

export type FormValues = z.infer<typeof schema>;
