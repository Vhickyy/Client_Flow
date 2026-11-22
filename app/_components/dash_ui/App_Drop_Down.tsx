import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IApp_Drop_Down } from "./types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import App_Text from "../app_ui/App_Text";

const App_Drop_Down = ({
  content,
  trigger,
}: {
  content: IApp_Drop_Down[];
  trigger?: ReactNode;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {trigger ? (
          trigger
        ) : (
          // <button
          //   type="button"
          //   className="p-1.5 rounded  hover:bg-[#f5f2ee] text-muted-foreground transition-colors"
          // >
          <MoreHorizontal size={15} />
          // </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-50 bg-white border-border border ring-0 shadow-lg p-0"
      >
        {content.map((item, index) => (
          <div key={index}>
            {item.separatorBefore && <DropdownMenuSeparator />}
            <DropdownMenuItem
              className={cn(
                "gap-3 cursor-pointer text-xs py-2.5 px-4 rounded-none hover:bg-sec-bg",
                item.className,
              )}
              onClick={item.action}
            >
              <item.icon size={13} />{" "}
              <App_Text variant="label" className="font-normal">
                {item.text}
              </App_Text>
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default App_Drop_Down;
