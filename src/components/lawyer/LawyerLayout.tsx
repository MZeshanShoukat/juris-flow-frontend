import { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Briefcase, 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  CreditCard, 
  Settings, 
  UserPlus,
  BarChart3,
  FolderOpen,
  Handshake,
  Bell,
  Search,
  Menu,
  X,
  Home,
  Building2,
  Clock
} from "lucide-react";

const LawyerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/lawyer', icon: Home, exact: true },
    { name: 'Profile Management', href: '/lawyer/profile', icon: Building2 },
    { name: 'Job Applications', href: '/lawyer/applications', icon: Briefcase },
    { name: 'Client Communication', href: '/lawyer/chat', icon: MessageSquare },
    { name: 'Appointments', href: '/lawyer/appointments', icon: Calendar },
    { name: 'Contracts', href: '/lawyer/contracts', icon: Handshake },
    { name: 'Client Onboarding', href: '/lawyer/onboarding', icon: UserPlus },
    { name: 'Case Management', href: '/lawyer/cases', icon: FolderOpen },
    { name: 'Document Management', href: '/lawyer/documents', icon: FileText },
    { name: 'Billing & Invoicing', href: '/lawyer/billing', icon: CreditCard },
    { name: 'HR / Employee Management', href: '/lawyer/hr', icon: Users },
    { name: 'Reports & Analytics', href: '/lawyer/reports', icon: BarChart3 },
    { name: 'Settings', href: '/lawyer/settings', icon: Settings }
  ];

  const isActive = (path: string, exact: boolean = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">LawyerHub</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 px-4 py-6 overflow-y-auto">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              const active = isActive(item.href, item.exact);
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* User profile section */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/api/placeholder/32/32" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                Sarah Johnson
              </p>
              <p className="text-xs text-muted-foreground truncate">
                Managing Partner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top header */}
        <header className="bg-background border-b sticky top-0 z-30">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              <div className="hidden md:flex items-center space-x-2 bg-muted rounded-lg px-3 py-2 max-w-md">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search cases, clients, documents..."
                  className="bg-transparent text-sm placeholder:text-muted-foreground border-0 focus:outline-none flex-1"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Clock className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LawyerLayout;