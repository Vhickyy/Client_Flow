import Link from "next/link";
import App_Text from "../app_ui/App_Text";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Pipeline CRM", href: "/product/pipeline-crm" },
        { label: "Email Automation", href: "/product/email-automation" },
        { label: "Executive Insights", href: "/product/executive-insights" },
        { label: "Integrations", href: "/product/integrations" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "B2B SaaS", href: "/solutions/b2b-saas" },
        {
          label: "Professional Services",
          href: "/solutions/professional-services",
        },
        { label: "Scaleups & Growth", href: "/solutions/scaleups-growth" },
        {
          label: "Enterprise Operations",
          href: "/solutions/enterprise-operations",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security Center", href: "/security" },
        { label: "Compliance", href: "/compliance" },
      ],
    },
  ];
  return (
    <footer className="bg-sec-bg py-28">
      <div className="containerclass flex justify-center">
        <section className="w-[50%] flex justify-between">
          {footerLinks.map((foot) => (
            <div key={foot.title} className="flex flex-col gap-4">
              <App_Text className="font-bold">{foot.title}</App_Text>
              <div className="grid gap-4">
                {foot.links.map((link) => (
                  <Link href={link.href} key={link.label} className="text-sm ">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
