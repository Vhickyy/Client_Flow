"use client";

import App_Text from "@/app/_components/app_ui/App_Text";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "cn";
import { formatNairaCompact } from "../sales_data";
import Sales_Card from "./Sales_Card";

const Sales_Pipeline = ({ stage }: { stage: any }) => {
  const { setNodeRef, isOver } = useDroppable({ id: stage.id });
  return (
    <div
      ref={setNodeRef}
      className={cn(
        "bg-sec-bg p-4 flex flex-col gap-4 h-fit rounded-xl min-w-[25%] transition-shadow",
        isOver && "ring-2 ring-primary/30",
      )}
      key={stage.id}
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-primary">
            <App_Text variant="cardTitle">{stage.title}</App_Text>
            <App_Text
              variant="cardTitle"
              className="h-4 w-4 grid place-items-center bg-grayish rounded-full text-[11px] font-semibold"
            >
              {stage.count}
            </App_Text>
          </div>
          {stage.total && (
            <App_Text variant="cardTitle">
              {formatNairaCompact(stage.total)}
            </App_Text>
          )}
        </div>
      </div>

      <div className="grid gap-3">
        {stage.deals.map((deal: any) => (
          <Sales_Card deal={deal} key={deal.id} />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Sales_Pipeline;
