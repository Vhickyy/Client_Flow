export type PipelineStageId =
  | "new"
  | "qualified"
  | "proposal"
  | "negotiation"
  | "won"
  | "lost";

export type AvatarTone = "green" | "rust" | "brown";

export interface DealOwner {
  initials: string;
  tone: AvatarTone;
}

export interface Deal {
  id: string;
  company: string;
  title: string;
  contact: string;
  amount: number;
  date?: string;
  owner: DealOwner;
}

export interface PipelineStage {
  id: PipelineStageId;
  title: string;
  count: number;
  total?: number;
  deals: Deal[];
}

export type SalesStatIcon =
  | "briefcase"
  | "kanban"
  | "check-circle"
  | "x-circle";

export type StatTone = "neutral" | "success" | "danger";

export interface SalesStat {
  label: string;
  value: string;
  icon: SalesStatIcon;
  tone: StatTone;
  detail: {
    highlight?: string;
    text: string;
    trend?: "up" | "down";
    dot?: boolean;
  };
}
