export interface Lead {
  id: string;
  // initials: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  status: string;
  assignedTo: string;
  date: string;
}

export const LEAD_STATUSES = [
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Converted",
  "Lost",
] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const LEAD_SOURCES = [
  "Website",
  "Referral",
  "Cold Outreach",
  "Social Media",
  "Advertisement",
  "Event",
] as const;
export type LeadSource = (typeof LEAD_SOURCES)[number];

export interface TeamMember {
  id: string;
  name: string;
  role: string; // e.g. "Workspace Admin"
  avatarUrl?: string;
}
