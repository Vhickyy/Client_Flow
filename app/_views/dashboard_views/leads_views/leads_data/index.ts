import { Lead, LeadStatus } from "../leads_types";

export const leadStats = [
  { label: "Total Leads", value: "248", change: "+12.7% since last month" }, // CHECK
  { label: "New Leads", value: "42", change: "+14% in this pipeline" }, // CHECK
  { label: "Qualified Leads", value: "86", change: "+0.7% qualification rate" }, // CHECK
  { label: "Converted Leads", value: "35", change: "+8% conversion rate" }, // CHECK
];

export const leads: Lead[] = [
  {
    id: "lead_1",
    name: "Adebayo Ogunleke",
    company: "PayStacker NG",
    email: "adebayo@paystacker.ng",
    phone: "+234 803 452 2290",
    source: "Website",
    status: "Qualified",
    assignedTo: "Amara Okafor",
    date: "2026-06-12",
  },
  {
    id: "lead_2",
    name: "Chidinma Obiafor",
    company: "BlueLagosNet", // CHECK
    email: "c.obiafor@bluelagosnet.ng", // CHECK
    phone: "+234 809 000 0000", // CHECK
    source: "Referral",
    status: "New",
    assignedTo: "Sandra", // CHECK: name was cut off in the design
    date: "2026-06-14", // CHECK
  },
  {
    id: "lead_3",
    name: "Ibrahim Musa",
    company: "Abuja Solar Ltd",
    email: "ibrahim@abujasolar.ng", // CHECK
    phone: "+234 701 889 8970", // CHECK
    source: "Cold Outreach",
    status: "Contacted",
    assignedTo: "Amara Okafor", // CHECK
    date: "2026-06-15", // CHECK
  },
  {
    id: "lead_4",
    name: "Folake Adeyemi",
    company: "Kutewale Retail", // CHECK
    email: "folake@kutewale.ng", // CHECK
    phone: "+234 812 000 0000", // CHECK
    source: "Social Media",
    status: "Proposal",
    assignedTo: "Sandra", // CHECK
    date: "2026-06-16", // CHECK
  },
  {
    id: "lead_5",
    name: "Emeka Nwosu",
    company: "Port Harcourt Marine",
    email: "e.nwosu@phmarine.ng", // CHECK
    phone: "+234 805 000 0000", // CHECK
    source: "Advertisement", // CHECK
    status: "Converted",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-17", // CHECK
  },
  {
    id: "lead_6",
    name: "Sadiq Abubakar",
    company: "Kano Agro Ventures",
    email: "sadiq@kanoagro.ng",
    phone: "+234 703 000 0000", // CHECK
    source: "Event", // CHECK
    status: "Lost",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-18", // CHECK
  },
  {
    id: "lead_6",
    name: "Sadiq Abubakar",
    company: "Kano Agro Ventures",
    email: "sadiq@kanoagro.ng",
    phone: "+234 703 000 0000", // CHECK
    source: "Event", // CHECK
    status: "Lost",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-18", // CHECK
  },
  {
    id: "lead_6",
    name: "Sadiq Abubakar",
    company: "Kano Agro Ventures",
    email: "sadiq@kanoagro.ng",
    phone: "+234 703 000 0000", // CHECK
    source: "Event", // CHECK
    status: "Lost",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-18", // CHECK
  },
  {
    id: "lead_6",
    name: "Sadiq Abubakar",
    company: "Kano Agro Ventures",
    email: "sadiq@kanoagro.ng",
    phone: "+234 703 000 0000", // CHECK
    source: "Event", // CHECK
    status: "Lost",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-18", // CHECK
  },
  {
    id: "lead_6",
    name: "Sadiq Abubakar",
    company: "Kano Agro Ventures",
    email: "sadiq@kanoagro.ng",
    phone: "+234 703 000 0000", // CHECK
    source: "Event", // CHECK
    status: "Lost",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-18", // CHECK
  },
  {
    id: "lead_6",
    name: "Sadiq Abubakar",
    company: "Kano Agro Ventures",
    email: "sadiq@kanoagro.ng",
    phone: "+234 703 000 0000", // CHECK
    source: "Event", // CHECK
    status: "Lost",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-18", // CHECK
  },
  {
    id: "lead_6",
    name: "Sadiq Abubakar",
    company: "Kano Agro Ventures",
    email: "sadiq@kanoagro.ng",
    phone: "+234 703 000 0000", // CHECK
    source: "Event", // CHECK
    status: "Lost",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-18", // CHECK
  },
  {
    id: "lead_6",
    name: "Sadiq Abubakar",
    company: "Kano Agro Ventures",
    email: "sadiq@kanoagro.ng",
    phone: "+234 703 000 0000", // CHECK
    source: "Event", // CHECK
    status: "Lost",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-18", // CHECK
  },
  {
    id: "lead_6",
    name: "Sadiq Abubakar",
    company: "Kano Agro Ventures",
    email: "sadiq@kanoagro.ng",
    phone: "+234 703 000 0000", // CHECK
    source: "Event", // CHECK
    status: "Lost",
    assignedTo: "Zainab", // CHECK
    date: "2026-06-18", // CHECK
  },
];

export const statusStyles: Record<LeadStatus, string> = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-amber-100 text-amber-700",
  Qualified: "bg-green-100 text-green-700",
  Proposal: "bg-purple-100 text-purple-700",
  Converted: "bg-emerald-100 text-emerald-700",
  Lost: "bg-red-100 text-red-700",
};
