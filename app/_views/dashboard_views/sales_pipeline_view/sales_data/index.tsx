import { PipelineStage, SalesStat } from "../sales_types";

/** 1200000 -> "₦1,200,000" */
export const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString("en-NG", { maximumFractionDigits: 0 })}`;

/** 4200000 -> "₦4.2M" */
export const formatNairaCompact = (amount: number) =>
  `₦${(amount / 1_000_000).toFixed(1)}M`;

/** "2026-06-28" -> "28 Jun" */
export const formatDealDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short" });

export const pipelineStages: PipelineStage[] = [
  {
    id: "new",
    title: "New",
    count: 9,
    total: 4_200_000,
    deals: [
      {
        id: "deal_1",
        company: "PayStacker NG",
        title: "Fintech Core Integration",
        contact: "Adebayo Ogunlesi",
        amount: 1_200_000,
        date: "2026-06-28",
        owner: { initials: "AO", tone: "green" },
      },
      {
        id: "deal_2",
        company: "Eko Logistics",
        title: "Fleet Tracking API Setup",
        contact: "Chidinma Okafor",
        amount: 850_000,
        date: "2026-07-04",
        owner: { initials: "TB", tone: "rust" },
      },
    ],
  },
  {
    id: "qualified",
    title: "Qualified",
    count: 8,
    total: 6_800_000,
    deals: [
      {
        id: "deal_3",
        company: "PayStacker NG",
        title: "Multi-tenant CRM Rollout",
        contact: "Adebayo Ogunlesi",
        amount: 3_500_000,
        date: "2026-07-12",
        owner: { initials: "AO", tone: "green" },
      },
      {
        id: "deal_4",
        company: "Abuja Solar Ltd",
        title: "Solar Grid Telemetry Hub",
        contact: "Ibrahim Musa",
        amount: 1_800_000,
        date: "2026-07-08",
        owner: { initials: "ZB", tone: "brown" },
      },
    ],
  },
  {
    id: "proposal",
    title: "Proposal",
    count: 7,
    total: 5_400_000,
    deals: [
      {
        id: "deal_5",
        company: "Port Harcourt Marine",
        title: "Maritime Logistics Expansion",
        contact: "Emeka Nwosu",
        amount: 2_800_000,
        date: "2026-06-30",
        owner: { initials: "TB", tone: "rust" },
      },
      {
        id: "deal_6",
        company: "Eko Logistics",
        title: "E-Commerce Gateway Customization",
        contact: "Chidinma Okafor",
        amount: 2_600_000,
        date: "2026-07-05",
        owner: { initials: "AO", tone: "green" },
      },
    ],
  },
  {
    id: "negotiation",
    title: "Negotiation",
    count: 5,
    // total was cut off in the screenshot
    deals: [
      {
        id: "deal_7",
        company: "PayStacker NG",
        title: "Enterprise CRM Subscription Onboarding", // CHECK: title was cut off
        contact: "Adebayo Ogunlesi",
        amount: 4_500_000,
        owner: { initials: "AO", tone: "green" }, // CHECK: avatar cut off
      },
      {
        id: "deal_8",
        company: "Kolawole Retail",
        title: "National Retail Chain M…", // CHECK: title was cut off
        contact: "Folake Adeyemi",
        amount: 3_900_000,
        owner: { initials: "AO", tone: "green" }, // CHECK: avatar cut off
      },
    ],
  },
  {
    id: "won",
    title: "Won",
    count: 5,
    // total was cut off in the screenshot
    deals: [
      {
        id: "deal_7",
        company: "PayStacker NG",
        title: "Enterprise CRM Subscription Onboarding", // CHECK: title was cut off
        contact: "Adebayo Ogunlesi",
        amount: 4_500_000,
        owner: { initials: "AO", tone: "green" }, // CHECK: avatar cut off
      },
      {
        id: "deal_8",
        company: "Kolawole Retail",
        title: "National Retail Chain M…", // CHECK: title was cut off
        contact: "Folake Adeyemi",
        amount: 3_900_000,
        owner: { initials: "AO", tone: "green" }, // CHECK: avatar cut off
      },
    ],
  },
  {
    id: "lost",
    title: "Lost",
    count: 5,
    // total was cut off in the screenshot
    deals: [
      {
        id: "deal_7",
        company: "PayStacker NG",
        title: "Enterprise CRM Subscription Onboarding", // CHECK: title was cut off
        contact: "Adebayo Ogunlesi",
        amount: 4_500_000,
        owner: { initials: "AO", tone: "green" }, // CHECK: avatar cut off
      },
      {
        id: "deal_8",
        company: "Kolawole Retail",
        title: "National Retail Chain M…", // CHECK: title was cut off
        contact: "Folake Adeyemi",
        amount: 3_900_000,
        owner: { initials: "AO", tone: "green" }, // CHECK: avatar cut off
      },
    ],
  },
];

export const salesStats: SalesStat[] = [
  {
    label: "Total Pipeline Value",
    value: "₦24.8M",
    icon: "briefcase",
    tone: "neutral",
    detail: { highlight: "+14.2%", text: "vs last month", trend: "up" },
  },
  {
    label: "Open Deals",
    value: "32",
    icon: "kanban",
    tone: "neutral",
    detail: { text: "Active across 4 key stages", dot: true },
  },
  {
    label: "Won This Month",
    value: "₦8.4M",
    icon: "check-circle",
    tone: "success",
    detail: { highlight: "14 deals", text: "closed won in Q4" },
  },
  {
    label: "Lost This Month",
    value: "₦2.1M",
    icon: "x-circle",
    tone: "danger",
    detail: { highlight: "3 deals", text: "marked lost this period" },
  },
];
