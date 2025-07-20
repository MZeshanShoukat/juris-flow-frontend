import { Outlet, useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Users,
  UserCog,
  CreditCard,
  Settings,
  AlertTriangle,
  DollarSign,
  FileText,
  Globe,
  LogOut,
  Menu
} from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SuperAdminLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/superadmin",
      icon: LayoutDashboard,
      current: location.pathname === "/superadmin"
    },
    {
      name: "User Management",
      href: "/superadmin/users",
      icon: Users,
      current: location.pathname === "/superadmin/users"
    },
    {
      name: "HR & Team",
      href: "/superadmin/hr",
      icon: UserCog,
      current: location.pathname === "/superadmin/hr"
    },
    {
      name: "Subscriptions",
      href: "/superadmin/subscriptions",
      icon: CreditCard,
      current: location.pathname === "/superadmin/subscriptions"
    },
    {
      name: "System Config",
      href: "/superadmin/config",
      icon: Settings,
      current: location.pathname === "/superadmin/config"
    },
    {
      name: "Disputes",
      href: "/superadmin/disputes",
      icon: AlertTriangle,
      current: location.pathname === "/superadmin/disputes"
    },
    {
      name: "Payments & Revenue",
      href: "/superadmin/payments",
      icon: DollarSign,
      current: location.pathname === "/superadmin/payments"
    },
    {
      name: "Case Oversight",
      href: "/superadmin/cases",
      icon: FileText,
      current: location.pathname === "/superadmin/cases"
    },
    {
      name: "Content & CMS",
      href: "/superadmin/content",
      icon: Globe,
      current: location.pathname === "/superadmin/content"
    }
  ];

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">Super Admin</h2>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
                  item.current
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="mr-3 h-4 w-4 flex-shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <Separator />

      {/* Footer */}
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="mr-3 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-background border-r">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="lg:hidden fixed top-4 left-4 z-40">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col flex-1 min-h-0">
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;