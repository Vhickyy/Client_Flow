"use client";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";

const App_DND = () => {
  return <div>App_DND</div>;
};

export default App_DND;

// const Draggable_Deal = ({ deal }: { deal: Deal }) => {
//   const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
//     id: deal.id,
//   });

//   return (
//     <div
//       ref={setNodeRef}
//       {...listeners}
//       {...attributes}
//       className={cn(
//         "touch-none cursor-grab active:cursor-grabbing",
//         isDragging && "opacity-40", // the original stays as a faded placeholder
//       )}
//     >
//       <Sales_Card deal={deal} />
//     </div>
//   );
// };

// const Droppable_Column = ({ stage }: { stage: PipelineStage }) => {
//   const { setNodeRef, isOver } = useDroppable({ id: stage.id });

//   return (
//     <div
//       ref={setNodeRef}
//       className={cn(
//         "bg-sec-bg p-4 flex flex-col gap-4 h-fit rounded-xl min-w-[25%] transition-shadow",
//         isOver && "ring-2 ring-primary/30",
//       )}
//     >
//       <div>
//         <div className="flex justify-between items-center">
//           <div className="flex gap-2 items-center text-primary">
//             <App_Text variant="cardTitle">{stage.title}</App_Text>
//             <App_Text
//               variant="cardTitle"
//               className="h-4 w-4 grid place-items-center bg-grayish rounded-full text-[11px] font-semibold"
//             >
//               {stage.count}
//             </App_Text>
//           </div>
//           {stage.total !== undefined && (
//             <App_Text variant="cardTitle">
//               {formatNairaCompact(stage.total)}
//             </App_Text>
//           )}
//         </div>
//       </div>

//       {/* min-h keeps an empty column droppable */}
//       <div className="grid gap-3 min-h-16">
//         {stage.deals.map((deal) => (
//           <Draggable_Deal deal={deal} key={deal.id} />
//         ))}
//       </div>
//     </div>
//   );
// };
