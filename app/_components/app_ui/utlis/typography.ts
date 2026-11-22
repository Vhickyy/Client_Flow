export const variants = {
  // ─────────────────────────────────────────────
  // MARKETING
  // ─────────────────────────────────────────────

  hero: {
    tag: "h1",
    className:
      "font-heading font-bold text-[40px] leading-[1.08] tracking-[-0.035em] sm:text-[48px] md:text-[56px] lg:text-[62px]",
  },

  heading: {
    tag: "h2",
    className:
      "font-heading font-bold text-[30px] leading-[1.15] tracking-[-0.025em] md:text-[38px] lg:text-[44px]",
  },

  subheading: {
    tag: "h3",
    className: "font-heading font-semibold text-base leading-[1.3] md:text-lg",
  },

  body: {
    tag: "p",
    className: "font-body text-base leading-[1.7] text-text-secondary ",
  },

  // ─────────────────────────────────────────────
  // APPLICATION
  // ─────────────────────────────────────────────

  pageTitle: {
    tag: "h1",
    className:
      "font-heading font-bold text-2xl leading-[1.25] tracking-[-0.025em] text-foreground md:text-[28px]",
  },

  pageSub: {
    tag: "p",
    className: "font-body text-sm leading-[1.6] text-text-muted md:text-[15px]",
  },

  sectionTitle: {
    tag: "h2",
    className:
      "font-heading font-semibold text-lg leading-[1.35] text-foreground md:text-xl",
  },

  cardTitle: {
    tag: "h3",
    className: "font-body text-sm font-semibold leading-[1.4] text-foreground",
  },

  // ─────────────────────────────────────────────
  // DATA & TABLES
  // ─────────────────────────────────────────────

  stat: {
    tag: "span",
    className:
      "font-heading text-[26px] font-bold leading-none tracking-[-0.03em] text-foreground tabular-nums md:text-[30px]",
  },

  label: {
    tag: "label",
    className:
      "font-body text-[13px] font-medium leading-[1.4] text-foreground",
  },

  tableHeader: {
    tag: "span",
    className: "font-body text-xs font-semibold leading-[1.4] text-text-muted",
  },

  tableCell: {
    tag: "span",
    className: "font-body text-[13px] leading-[1.5] text-foreground",
  },

  // ─────────────────────────────────────────────
  // SUPPORTING TEXT
  // ─────────────────────────────────────────────

  muted: {
    tag: "span",
    className: "font-body text-xs leading-[1.5] text-text-muted",
  },

  badge: {
    tag: "span",
    className: "font-body text-[11px] font-semibold leading-none",
  },
} as const;
