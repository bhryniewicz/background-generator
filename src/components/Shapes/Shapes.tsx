import { useFormContext } from "react-hook-form";
import { shapesOptions } from "./values";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useDebouncedCallback } from "use-debounce";

export const Shapes = () => {
  const { setValue, control, watch, trigger } = useFormContext();

  const debounceSetFormValue = useDebouncedCallback((shape) => {
    setValue("shape", shape);
    trigger("shape");
  }, 500);

  return (
    <div>
      <FormLabel>Choose one of the shapes:</FormLabel>
      <FormField
        control={control}
        name={"shape"}
        render={({ field }) => (
          <div className="flex flex-col gap-2">
            <FormItem className="flex gap-4">
              {shapesOptions.map(({ label, aspectRatioClass, shape }) => (
                <FormControl key={label}>
                  <div className="flex flex-col items-center">
                    <div
                      {...field}
                      className={cn(
                        `${aspectRatioClass} bg-gray-500 hover:bg-white transition-all duration-300, w-[50px]`,
                        JSON.stringify(watch("shape")) ===
                          JSON.stringify(shape) && "bg-[#9900FF]"
                      )}
                      onClick={() => debounceSetFormValue(shape)}
                    />
                  </div>
                </FormControl>
              ))}
            </FormItem>
            <FormMessage />
          </div>
        )}
      />
    </div>
  );
};
