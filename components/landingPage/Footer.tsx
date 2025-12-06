import Image from "next/image";

export default function Footer() {
  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const companyLinks = [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Security", href: "#security" },
  ];

  return (
    <footer className="w-full bg-slate-900 px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="FlowState logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold text-white">FlowState</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 md:text-base">
              Achieve more with intelligent goal management and AI-powered
              planning.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Product</h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-12 border-t border-slate-800"></div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2024 FlowState. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
