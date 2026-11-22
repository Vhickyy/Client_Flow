export type DashboardStatIcon =
  | "user-plus"
  | "users"
  | "handshake"
  | "banknote";
export type StatTone = "neutral" | "success" | "danger";

export interface DashboardStat {
  label: string;
  value: string; // display string, e.g. "₦8.4M"
  icon: DashboardStatIcon;
  change: string; // e.g. "+2.4%"
  changeLabel: string; // e.g. "vs last month"
  trend: "up" | "down";
}

export type PerformanceRange = "weekly" | "monthly" | "yearly";

export interface PerformancePoint {
  period: string; // "Jan"
  won: number; // naira
  lost: number; // naira
}

export interface PipelineSummaryRow {
  stage: string;
  deals: number;
  value: string; // display string, e.g. "₦4.2M"
}

export type LeadStatus =
  | "New"
  | "Contacted"
  | "Qualified"
  | "Proposal"
  | "Converted"
  | "Lost";

export interface RecentLead {
  id: string;
  name: string;
  company: string;
  email: string;
  status: LeadStatus;
}

export type ActivityKind = "call" | "meeting" | "task" | "demo";

export interface UpcomingActivity {
  id: string;
  title: string;
  contact: string;
  company: string;
  when: string; // display string, e.g. "Today, 2:00 PM"
  kind: ActivityKind;
}

export type FeedEventType =
  | "Deal Won"
  | "Stage Updated"
  | "Deal Created"
  | "Contact Updated"
  | "New Lead";

export interface ActivityFeedItem {
  id: string;
  type: FeedEventType;
  text: string;
  actor: string;
  time: string;
}
