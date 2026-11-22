import Footer from "../_components/shared/Footer";

export default function PublicRootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
