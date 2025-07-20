import { Scale, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "For Lawyers", href: "/lawyers" },
        { label: "For Clients", href: "/clients" },
        { label: "Pricing", href: "/pricing" },
        { label: "Features", href: "/features" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Legal Templates", href: "/templates" },
        { label: "Blog", href: "/blog" },
        { label: "Webinars", href: "/webinars" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Compliance", href: "/compliance" }
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">LegalConnect</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              The premier platform connecting legal professionals with clients. 
              Streamline your practice and grow your business.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@legalconnect.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-LEGAL-01</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-accent">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2 text-accent">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Get the latest legal tech insights and platform updates.
            </p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent-hover">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © {currentYear} LegalConnect. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-accent p-2">
              <Facebook className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;