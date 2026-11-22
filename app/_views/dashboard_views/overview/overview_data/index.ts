import {
  DashboardStat,
  PerformanceRange,
  PerformancePoint,
  PipelineSummaryRow,
  RecentLead,
  UpcomingActivity,
  ActivityFeedItem,
} from "../overview_types";

export const dashboardTopBar = {
  periodLabel: "This Month",
  addButton: "+ Add New",
};

// ─────────────────────────────────────────────
// STAT CARDS
// ─────────────────────────────────────────────
export const dashboardStats: DashboardStat[] = [
  {
    label: "Total Leads",
    value: "248",
    icon: "user-plus",
    change: "+2.4%",
    changeLabel: "vs last month",
    trend: "up",
  }, // CHECK
  {
    label: "Total Contacts",
    value: "186",
    icon: "users",
    change: "+8.7%",
    changeLabel: "vs last month",
    trend: "up",
  }, // CHECK
  {
    label: "Active Deals",
    value: "32",
    icon: "handshake",
    change: "+3.3%",
    changeLabel: "vs last month",
    trend: "up",
  }, // CHECK
  {
    label: "Won Revenue",
    value: "₦8.4M",
    icon: "banknote",
    change: "+9.8%",
    changeLabel: "vs last month",
    trend: "up",
  }, // CHECK
];

// ─────────────────────────────────────────────
// SALES PERFORMANCE (bar chart)
// ─────────────────────────────────────────────
export const salesPerformance = {
  title: "Sales Performance",
  subtitle: "Revenue (₦) and deals won vs lost across Lagos Ventures Ltd", // CHECK
  ranges: ["weekly", "monthly", "yearly"] as PerformanceRange[],
  defaultRange: "monthly" as PerformanceRange,
  rangeLabel: "Jan - Jun 2026",
  peakLabel: "Peak: ₦1.1M in May", // CHECK
  legend: [
    { key: "won", label: "Deals Won (₦)" },
    { key: "lost", label: "Deals Lost (₦)" },
  ],
  // Bar heights are ESTIMATED from the chart; the real values weren't readable.
  data: [
    { period: "Jan", won: 600_000, lost: 200_000 },
    { period: "Feb", won: 700_000, lost: 250_000 },
    { period: "Mar", won: 550_000, lost: 150_000 },
    { period: "Apr", won: 800_000, lost: 300_000 },
    { period: "May", won: 1_100_000, lost: 280_000 }, // tooltip showed May 2026 with ₦280K lost
    { period: "Jun", won: 750_000, lost: 200_000 },
  ] as PerformancePoint[],
};

// ─────────────────────────────────────────────
// SALES PIPELINE SUMMARY
// ─────────────────────────────────────────────
export const pipelineSummary = [
  { stage: "New", deals: 9, value: "₦4.2M" },
  { stage: "Qualified", deals: 8, value: "₦6.8M" },
  { stage: "Proposal", deals: 7, value: "₦5.4M" },
  { stage: "Negotiation", deals: 5, value: "₦8.4M" },
  { stage: "Won", deals: 3, value: "₦8.4M" },
] as PipelineSummaryRow[];

// ─────────────────────────────────────────────
// RECENT LEADS
// ─────────────────────────────────────────────
export const recentLeads = {
  title: "Recent Leads",
  subtitle: "Latest prospects captured by your sales team",
  link: { label: "View All Leads", href: "/dashboard/leads" },
  headers: ["Lead Name", "Company", "Email", "Status"],
  rows: [
    {
      id: "lead_1",
      name: "Adebayo Ogunlesi",
      company: "PayStacker NG",
      email: "adebayo@paystacker.ng",
      status: "Qualified",
    },
    {
      id: "lead_2",
      name: "Chidinma Obiafor",
      company: "BlueLagosNet",
      email: "c.obiafor@bluelagosnet.ng",
      status: "New",
    }, // CHECK
    {
      id: "lead_3",
      name: "Ibrahim Musa",
      company: "Abuja Solar Ltd",
      email: "ibrahim@abujasolar.ng",
      status: "Contacted",
    }, // CHECK
    {
      id: "lead_4",
      name: "Folake Adeyemi",
      company: "Kutewale Retail",
      email: "folake@kutewale.ng",
      status: "Qualified",
    }, // CHECK
  ] as RecentLead[],
};

// ─────────────────────────────────────────────
// UPCOMING ACTIVITIES
// ─────────────────────────────────────────────
export const upcomingActivities = [
  {
    id: "act_1",
    title: "Discovery Call",
    contact: "Adebayo Ogunlesi",
    company: "PayStacker NG",
    when: "Today, 2:00 PM",
    kind: "call",
  }, // CHECK times
  {
    id: "act_2",
    title: "Proposal Review Meeting",
    contact: "Folake Adeyemi",
    company: "Kutewale Retail",
    when: "Tomorrow, 10:00 AM",
    kind: "meeting",
  },
  {
    id: "act_3",
    title: "Send Contract Follow-up",
    contact: "Ibrahim Musa",
    company: "Abuja Solar Ltd",
    when: "Thu, 11:30 AM",
    kind: "task",
  },
  {
    id: "act_4",
    title: "Introductory Demo",
    contact: "Chidinma Okafor",
    company: "Eko Logistics",
    when: "Fri, 3:00 PM",
    kind: "demo",
  },
] as UpcomingActivity[];

// ─────────────────────────────────────────────
// ACTIVITY FEED (horizontal cards)
// ─────────────────────────────────────────────
export const activityFeed = {
  title: "Recent Activity Feed",
  subtitle: "Chronological workspace updates for Lagos Ventures Ltd",
  // Descriptions, names and times were too small to read: all CHECK
  items: [
    {
      id: "feed_1",
      type: "Deal Won",
      text: "Closed Victoria Island Fleet POS deal",
      actor: "Aliyu Bello",
      time: "Today",
    },
    {
      id: "feed_2",
      type: "Stage Updated",
      text: "Moved Kolawole Retail POS to Negotiation",
      actor: "Tochi Eze",
      time: "Today",
    },
    {
      id: "feed_3",
      type: "Deal Created",
      text: "Created Abuja Solar Grid Hub deal",
      actor: "Zainab Bello",
      time: "Yesterday",
    },
    {
      id: "feed_4",
      type: "Contact Updated",
      text: "Updated profile details for Adebayo Ogunlesi",
      actor: "Amara Okafor",
      time: "Yesterday",
    },
    {
      id: "feed_5",
      type: "New Lead",
      text: "Added Chidinma Okafor from Eko Logistics",
      actor: "Amara Okafor",
      time: "2 days ago",
    },
  ] as ActivityFeedItem[],
};
