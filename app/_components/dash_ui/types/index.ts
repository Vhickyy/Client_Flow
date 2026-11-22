import { LucideIcon } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { ReactNode } from "react";
// import {
//   FieldErrors,
//   Path,
//   RegisterOptions,
//   UseFormRegister,
// } from "react-hook-form";

export interface IButton {
  text: string;
  icon?: ReactNode;
  btnStyle?: string;
  onPress?: (e?: any) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// export interface IAppInput<T extends Record<string, any>> {
//   name: Path<T>;
//   errors?: FieldErrors<T>;
//   register?: UseFormRegister<T>;
//   rules?: RegisterOptions<T, Path<T>>;
//   className?: string;
//   placeholder?: string;
//   containerStyle?: string;
//   icon1?: ReactNode;
//   icon2?: ReactNode;
//   showLabel?: boolean;
//   basic?: boolean;
//   onChange?: () => {};
// }

export interface IApp_Drop_Down {
  icon: LucideIcon;
  text: string;
  action: () => void;
  className?: string;
  separatorBefore?: boolean;
}

export interface IApp_Modal {
  onClose: () => void;
  children: ReactNode;
  text: string;
}
