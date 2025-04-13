import { useFormContext } from "react-hook-form";
import { shapesOptions } from "./values";
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
      <FormLabel>CANVAS</FormLabel>
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
                    watch("shape") && "border-[#b13cff] text-[#b13cff]"
                  )}
                >
                  <SelectValue placeholder="Select what dimensions canvas should be" />
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
