import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export interface BoxOption<T> {
  label: string;
  value: T;
}

interface BoxesProps<T> {
  name: string;
  formLabel: string;
  options: BoxOption<T>[];
}

export const SelectableBoxes = <T,>({
  options,
  name,
  formLabel,
}: BoxesProps<T>) => {
  const { setValue, watch, control, trigger } = useFormContext();

  const handleChangeBoxValue = (value: T) => {
    setValue(name, value);
    trigger(name);
  };

  return (
    <div className="flex flex-col w-full">
      <FormLabel className="text-white/80">{formLabel}</FormLabel>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-2">
            <div className="flex gap-4 text-white">
              {options.map(({ label, value }) => (
                <FormControl key={label}>
                  <div
                    {...field}
                    className={cn(
                      "flex-grow-1 text-center text-sm border border-gray-500 text-gray-500 px-2 lg:px-6 py-[4px] rounded-lg hover:border-white hover:text-white transition-colors duration-300",
                      JSON.stringify(watch(name)) === JSON.stringify(value) &&
                        "border-white text-white font-semibold"
                    )}
                    onClick={() => handleChangeBoxValue(value)}
                  >
                    {label}
                  </div>
                </FormControl>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
