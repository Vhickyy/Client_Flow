import App_Text from "./App_Text";
import { AppButtonProps } from "./types";
import App_Icon from "./App_Icon";
import { cn } from "@/lib/utils";

const App_Button = ({ icon, children, className }: AppButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-4 bg-primary-deep w-fit rounded-xl px-6 py-3 text-white text-base font-semibold",
        className,
      )}
    >
      {children}
      {icon && <App_Icon {...icon} className="text-white" size={20} />}
    </button>
  );
};

export default App_Button;
