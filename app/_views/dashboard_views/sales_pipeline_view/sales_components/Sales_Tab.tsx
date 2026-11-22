"use client";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { pipelineStages } from "../sales_data";
import Sales_Pipeline from "./Sales_Pipeline";
import Sales_Card from "./Sales_Card";
import { useState } from "react";
import { PipelineStage, Deal, PipelineStageId } from "../sales_types";

const Sales_Tab = () => {
  const [stages, setStages] = useState<PipelineStage[]>(pipelineStages);
  const [activeDeal, setActiveDeal] = useState<Deal | null>(null);

  // Needs a 6px drag before it starts, so plain clicks on a card still work
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const deal = stages
      .flatMap((s) => s.deals)
      .find((d) => d.id === event.active.id);
    setActiveDeal(deal ?? null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveDeal(null);

    const { active, over } = event;
    if (!over) return; // dropped outside any column

    const toId = over.id as PipelineStageId;
    const from = stages.find((s) => s.deals.some((d) => d.id === active.id));
    if (!from || from.id === toId) return; // same column, nothing to do

    const deal = from.deals.find((d) => d.id === active.id);
    if (!deal) return;

    setStages(
      stages.map((s) => {
        if (s.id === from.id) {
          return {
            ...s,
            count: s.count - 1,
            total: s.total !== undefined ? s.total - deal.amount : undefined,
            deals: s.deals.filter((d) => d.id !== deal.id),
          };
        }
        if (s.id === toId) {
          return {
            ...s,
            count: s.count + 1,
            total: s.total !== undefined ? s.total + deal.amount : undefined,
            deals: [...s.deals, deal],
          };
        }
        return s;
      }),
    );

    // Save to your backend here (optimistic update: UI has already moved):
    // await updateDealStage(deal.id, toId);
  };
  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveDeal(null)}
    >
      <div className="flex gap-4 overflow-x-auto w-full mt-8 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {pipelineStages.map((stage) => (
          <Sales_Pipeline stage={stage} key={stage.id} />
        ))}
      </div>
      <DragOverlay>
        {activeDeal ? (
          <div className="rotate-2 cursor-grabbing shadow-lg rounded-xl">
            <Sales_Card deal={activeDeal} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Sales_Tab;
