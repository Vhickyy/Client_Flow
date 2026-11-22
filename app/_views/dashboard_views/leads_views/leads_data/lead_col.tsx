"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import type { Lead, LeadStatus } from "../leads_types";
import type { AppFeatures } from "@/app/_components/dash_ui/App_Table";
import { statusStyles } from ".";
import Lead_Action_Cell from "../leads_components/Lead_Action_Cell";

const columnHelper = createColumnHelper<AppFeatures, Lead>();

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

export const lead_columns = columnHelper.columns([
  // SELECT: display column, because it has no data of its own
  columnHelper.display({
    id: "select",
    header: () => <div className="h-4 w-4 bg-primary" />,
    cell: () => <div className="h-4 w-4 bg-primary" />,
  }),

  // LEAD NAME (avatar + full name)
  columnHelper.accessor("name", {
    header: "Lead Name",
    cell: (info) => (
      <div className="flex items-center gap-2">
        <span className="flex size-7 items-center justify-center rounded-full bg-primary-subtle text-[11px] font-semibold text-primary">
          {getInitials(info.getValue())}
        </span>
        <span className="font-medium">{info.getValue()}</span>
      </div>
    ),
  }),

  columnHelper.accessor("company", { header: "Company" }),
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("phone", { header: "Phone" }),
  columnHelper.accessor("source", { header: "Lead Source" }),

  // STATUS (badge)
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue() as LeadStatus;
      return (
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[11px] font-semibold",
            statusStyles[status],
          )}
        >
          {status}
        </span>
      );
    },
  }),

  // ASSIGNED TO
  columnHelper.accessor("assignedTo", { header: "Assigned To" }),

  // DATE
  columnHelper.accessor("date", { header: "Date" }),

  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <Lead_Action_Cell row={row} />,
  }),
]);
