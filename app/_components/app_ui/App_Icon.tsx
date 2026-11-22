import { cn } from "@/lib/utils";
import { AppIconProps } from "./types";

const App_Icon = ({
  icon: Icon,
  size = 20,
  strokeWidth = 2,
  className,
}: AppIconProps) => {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={cn(className)} />
  );
};

export default App_Icon;
