import Dashboard_Layout from "../_layouts/dashboard_layout/Dashboard_Layout";

export default function DasboardLayout({ children }: LayoutProps<"/">) {
  return <Dashboard_Layout>{children}</Dashboard_Layout>;
}
