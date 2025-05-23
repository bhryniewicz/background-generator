import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const shapesOptions = [
  {
    label: "1920 x 1080",
    shape: {
      width: 1920,
      height: 1080,
    },
  },
  {
    label: "1080 x 720",
    shape: {
      width: 1080,
      height: 720,
    },
  },
  {
    label: "1000 x 1000",
    shape: {
      width: 1000,
      height: 1000,
    },
  },
];

export const Shapes = () => {
  const { setValue, control, trigger, watch } = useFormContext();

  const handleChangeShape = (val: string) => {
    const parsedDimensionsObject = JSON.parse(val);
    setValue("shape", parsedDimensionsObject);
    trigger("shape");
  };

  const selectedShape = watch("shape");

  return (
    <div>
      <FormLabel className="text-white/80">CANVAS</FormLabel>
      <FormField
        control={control}
        name="shape"
        render={() => (
          <FormItem>
            <Select
              onValueChange={(dimensions) => handleChangeShape(dimensions)}
              value={selectedShape ? JSON.stringify(selectedShape) : ""}
            >
              <FormControl>
                <SelectTrigger
                  className={cn(
                    `w-full text-white border-gray-500 transition-all duration-300 hover:border-white`,
                    watch("shape") && "border-white text-white font-semibold"
                  )}
                >
                  <SelectValue placeholder="Select dimensions" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {shapesOptions.map(({ label, shape }) => {
                  return (
                    <SelectItem key={label} value={JSON.stringify(shape)}>
                      {label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
