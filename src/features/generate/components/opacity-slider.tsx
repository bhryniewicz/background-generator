import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useDebouncedCallback } from "use-debounce";

export const ImageOpacitySlider = () => {
  const { setValue, control } = useFormContext();

  const debounceSetFormValue = useDebouncedCallback((val) => {
    setValue("imageOpacity", val);
  }, 0);

  return (
    <div className="mr-2">
      <FormLabel className="text-white/70">IMAGE OPACITY</FormLabel>
      <FormField
        control={control}
        name={"imageOpacity"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-2">
            <FormControl>
              <Slider
                {...field}
                min={0}
                max={1}
                step={0.05}
                defaultValue={1}
                onChange={(val) => debounceSetFormValue(val)}
                styles={{
                  track: {
                    backgroundColor: "#9900FF",
                  },
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
