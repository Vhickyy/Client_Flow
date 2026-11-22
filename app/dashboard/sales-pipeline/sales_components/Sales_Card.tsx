import App_Text from "@/app/_components/app_ui/App_Text";
import { User } from "lucide-react";
import { formatNaira, formatDealDate } from "../sales_data";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "cn";

const Sales_Card = ({ deal }: { deal: any }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: deal.id,
  });
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={cn(
        "touch-none cursor-grab active:cursor-grabbing bg-white shadow-sm hover:shadow-md p-4 rounded-xl flex flex-col gap-3",
        isDragging && "opacity-40", // the original stays as a faded placeholder
      )}
    >
      <App_Text variant="badge" className="md:text-xs text-text-muted">
        {deal.company}
      </App_Text>
      <div>
        <App_Text variant="cardTitle">{deal.title}</App_Text>
        <div className="flex items-center gap-2 mt-2">
          <User size={13} />
          <App_Text variant="badge">{deal.contact}</App_Text>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <App_Text variant="badge">{formatNaira(deal.amount)}</App_Text>
        <div className="flex items-center gap-2">
          {deal.date && (
            <App_Text variant="badge">{formatDealDate(deal.date)}</App_Text>
          )}
          <div className="h-6 w-6 grid place-items-center rounded-full bg-primary">
            <App_Text
              variant="badge"
              className="text-primary-subtle font-normal text-[10px]"
            >
              {deal.owner.initials}
            </App_Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales_Card;
