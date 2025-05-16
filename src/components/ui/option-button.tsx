import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "./button";

interface OptionButtonProps {
  icon: React.ElementType;
  text: string;
  onClick: () => void;
  isCancel?: boolean;
}

export const OptionButton: FC<OptionButtonProps> = ({
  icon: Icon,
  text,
  onClick,
  isCancel = false,
}) => {
  return (
    <Button
      className={cn(
        `flex flex-col h-max p-4 border-2 border-white bg-white/40 transition-all duration-300 hover:border-[#9900FF] hover:bg-[#9900FF]/40`,
        isCancel && "hover:border-red-400 hover:bg-red-400/40"
      )}
      onClick={onClick}
    >
      <Icon className="size-8" style={{ opacity: 0.75 }} strokeWidth={1} />
      <p className="text-xs font-medium text-wrap">{text}</p>
    </Button>
  );
};
