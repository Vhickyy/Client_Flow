import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { variants } from "../utlis/typography";

export type AppTextProps = HTMLAttributes<HTMLElement> & {
  variant?: Variant;
};

export type Variant = keyof typeof variants;

export type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: AppIconProps;
};

export interface AppIconProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
}
