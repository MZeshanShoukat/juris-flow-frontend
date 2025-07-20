import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale, Users, Settings, MessageSquare } from "lucide-react";

interface NavbarProps {
  userRole?: "lawyer" | "client" | "admin" | null;
}

const Navbar = ({ userRole }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getNavItems = () => {
    if (!userRole) {
      return [
        { href: "#features", label: "Features" },
        { href: "#how-it-works", label: "How It Works" },
        { href: "#pricing", label: "Pricing" },
        { href: "#contact", label: "Contact" }
      ];
    }

    switch (userRole) {
      case "lawyer":
        return [
          { href: "/dashboard", label: "Dashboard" },
          { href: "/cases", label: "Cases" },
          { href: "/clients", label: "Clients" },
          { href: "/appointments", label: "Appointments" },
          { href: "/documents", label: "Documents" }
        ];
      case "client":
        return [
          { href: "/dashboard", label: "Dashboard" },
          { href: "/find-lawyers", label: "Find Lawyers" },
          { href: "/my-cases", label: "My Cases" },
          { href: "/appointments", label: "Appointments" },
          { href: "/billing", label: "Billing" }
        ];
      case "admin":
        return [
          { href: "/admin", label: "Dashboard" },
          { href: "/admin/users", label: "Users" },
          { href: "/admin/subscriptions", label: "Subscriptions" },
          { href: "/admin/disputes", label: "Disputes" },
          { href: "/admin/payments", label: "Payments" }
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">LegalConnect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!userRole ? (
              <>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                  Sign In
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Messages
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="outline" size="sm">
                  Sign Out
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {!userRole ? (
                  <>
                    <Button variant="ghost" className="justify-start">
                      Sign In
                    </Button>
                    <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                      Get Started
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" className="justify-start">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Messages
                    </Button>
                    <Button variant="ghost" size="sm" className="justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                    <Button variant="outline" size="sm">
                      Sign Out
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;