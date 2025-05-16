import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useDebouncedCallback } from "use-debounce";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";

export const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const form = useFormContext();

  const { data: usedColors } = useQuery<string[]>({
    queryKey: ["USED_COLORS"],
    queryFn: () => [],
    staleTime: 1000 * 60 * 5,
  });

  const debounceSetFormValue = useDebouncedCallback((val) => {
    form.setValue("color", val);
  }, 400);

  const chosenColor = form.watch("color");


  return (
    <div className="relative">
      <FormLabel className="text-white/80">BACKGROUND</FormLabel>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="grid grid-cols-[30px_1fr] items-center gap-2 w-full cursor-pointer">
            <div
              className="w-7 h-7 rounded-sm border border-gray-300"
              style={{ backgroundColor: chosenColor }}
            />
            <div className="text-white font-medium border  py-1 px-4 rounded-md border-white">
              {chosenColor}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex gap-4">
            <div>
              <DialogTitle className="text-sm pb-4">Choose color:</DialogTitle>
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <HexColorPicker
                        {...field}
                        color={chosenColor}
                        onChange={(val) => debounceSetFormValue(val)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <DialogTitle className="text-sm pb-4">
                Select one used before:
              </DialogTitle>
              <div className="flex flex-wrap gap-2">
                {usedColors &&
                  usedColors.map((color: string) => {
                    return (
                      <div
                        className={cn(`w-[30px] h-[30px]`)}
                        style={{ backgroundColor: color }}
                        key={color}
                        onClick={() => form.setValue("color", color)}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <FormMessage />
    </div>
  );
};
