"use client";

import { cn } from "@/lib/utils";
import { variants } from "./utlis/typography";
import { AppTextProps } from "./types";

const App_Text = ({
  variant = "body",
  className,
  children,
  ...props
}: AppTextProps) => {
  const Component = variants[variant].tag;

  return (
    <Component
      className={cn(variants[variant].className, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default App_Text;
