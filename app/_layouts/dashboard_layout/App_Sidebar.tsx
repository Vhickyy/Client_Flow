"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import App_Sidebar_Item, {
  MatchType,
  SidebarChildItem,
} from "./App_Sidebar_Item";

import {
  LayoutDashboard,
  Package,
  Tag,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  BarChart2,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
// import Logout_Modal from "@/app/(auth)/logout/Logout_Modal";

type SidebarItem = {
  id: number;
  label: string;
  href: string;
  icon: LucideIcon;
  match: MatchType;
  children?: SidebarChildItem[];
};

const sidebar_items: SidebarItem[] = [
  {
    id: 1,
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    match: "exact",
  },
  {
    id: 2,
    label: "Leads",
    href: "/dashboard/leads",
    icon: Tag,
    match: "prefix",
  },
  {
    id: 3,
    label: "Contacts",
    href: "/dashboard/contacts",
    icon: Package,
    match: "prefix",
  },
  {
    id: 4,
    label: "Sales Pipeline",
    href: "/dashboard/sales-pipeline",
    icon: ShoppingCart,
    match: "prefix",
  },
  {
    id: 5,
    label: "Activities",
    href: "/dashboard/activities",
    icon: Users,
    match: "prefix",
  },

  // { id: 14, label: "Logout", href: "/logout", icon: LogOut, match: "exact" },
];

const App_Sidebar = () => {
  const { open } = useSidebar();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Sidebar
      collapsible="icon"
      // className="bg-red-400!"
      // className="border-r bg-linear-to-b from-[#1F1033] to-[#2E1246] border-white/10"
    >
      {/* Header */}
      <SidebarHeader className="border-b bg-sec-bg px-4 py-4">
        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 rounded-lg bg-sec-bg border border-white/20 flex items-center justify-center shrink-0">
            <span className="text-white text-sm font-bold">L</span>
          </div> */}
          {open && (
            <div>
              <Image
                src={"/images/clientflow_logo.png"}
                alt="clientflow_logo"
                width={8000}
                height={8000}
                className="w-fit"
              />
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-3 bg-sec-bg">
        {/* Trigger */}
        <div className="flex justify-end mb-2">
          <SidebarTrigger className="text-white/50 hover:text-white hover:bg-white/10 rounded-lg" />
        </div>

        {/* Nav items */}
        <SidebarMenu className="space-y-2.5">
          {sidebar_items.map((item) => (
            <App_Sidebar_Item
              key={item.id}
              name={item.label}
              link={item.href}
              icon={item.icon}
              match={item.match}
              children={item.children}
            />
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-white/10 px-3 py-3 space-y-2 bg-sec-bg">
        {/* User card */}
        <div
          className={`flex items-center gap-3 p-2.5 rounded-lg bg-white/10 border border-white/10 ${!open && "justify-center"}`}
        >
          <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20 flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-semibold">JD</span>
          </div>
          {open && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">
                John Doe
              </p>
              <p className="text-[11px] text-white/50 truncate">
                johndoe@email.com
              </p>
            </div>
          )}
        </div>

        {/* Logout button */}
        <button
          type="button"
          onClick={() => setShowLogout(true)}
          className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors ${!open && "justify-center"}`}
        >
          <LogOut size={16} className="shrink-0" />
          {open && <span className="text-xs font-medium">Log Out</span>}
        </button>
      </SidebarFooter>
      {/* {showLogout && <Logout_Modal onClose={() => setShowLogout(false)} />} */}
    </Sidebar>
  );
};

export default App_Sidebar;
