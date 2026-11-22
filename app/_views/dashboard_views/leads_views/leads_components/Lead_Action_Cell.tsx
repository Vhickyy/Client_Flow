"use client";
import App_Drop_Down from "@/app/_components/dash_ui/App_Drop_Down";
import { Edit2, Eye, Trash, User } from "lucide-react";
import { useRouter } from "next/navigation";

const Lead_Action_Cell = ({ row }: { row: any }) => {
  const router = useRouter();
  const actions = [
    {
      id: "view",
      icon: Eye,
      text: "View Lead",
      action: () => router.push(`/dashboard/leads/${row.original.id}`),
    },
    {
      id: "edit",
      icon: Edit2,
      text: "Edit Lead",
      action: () => router.push(`/dashboard/leads/${row.original.id}`),
    },
    {
      id: "view",
      icon: User,
      text: "Convert to Customers",
      action: () => router.push(`/dashboard/leads/${row.original.id}`),
    },
    {
      id: "view",
      icon: Trash,
      text: "Delete Lead",
      action: () => router.push(`/dashboard/leads/${row.original.id}`),
    },
  ];
  return <App_Drop_Down content={actions} />;
};

export default Lead_Action_Cell;
