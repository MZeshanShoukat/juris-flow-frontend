import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CreditCard, 
  AlertTriangle, 
  TrendingUp, 
  Settings,
  FileText,
  Shield,
  BarChart3,
  DollarSign,
  UserCheck,
  Clock,
  Activity
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12% vs last month",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Monthly Revenue",
      value: "$148,500",
      change: "+8.2% vs last month",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Subscriptions",
      value: "1,234",
      change: "94% retention rate",
      icon: CreditCard,
      color: "text-purple-600"
    },
    {
      title: "Open Disputes",
      value: "23",
      change: "5 urgent",
      icon: AlertTriangle,
      color: "text-red-600"
    }
  ];

  const recentUsers = [
    { name: "Sarah Johnson", role: "Lawyer", status: "Active", joinDate: "2024-01-15", verified: true },
    { name: "Michael Chen", role: "Client", status: "Active", joinDate: "2024-01-14", verified: true },
    { name: "Emily Rodriguez", role: "Lawyer", status: "Pending", joinDate: "2024-01-13", verified: false },
    { name: "Robert Davis", role: "Client", status: "Active", joinDate: "2024-01-12", verified: true },
    { name: "Lisa Thompson", role: "Lawyer", status: "Suspended", joinDate: "2024-01-10", verified: true }
  ];

  const systemHealth = [
    { metric: "API Response Time", value: "234ms", status: "good", icon: Activity },
    { metric: "Server Uptime", value: "99.9%", status: "excellent", icon: Shield },
    { metric: "Database Performance", value: "Fast", status: "good", icon: BarChart3 },
    { metric: "Payment Processing", value: "Operational", status: "excellent", icon: CreditCard }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "suspended": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getHealthStatus = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-600";
      case "good": return "text-blue-600";
      case "warning": return "text-yellow-600";
      case "critical": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform overview and management</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button className="bg-gradient-primary">
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-card transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <IconComponent className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Recent User Registrations
            </CardTitle>
            <CardDescription>
              Latest users who joined the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <UserCheck className={`h-5 w-5 ${user.verified ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{user.role}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{user.joinDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {user.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified
                      </Badge>
                    )}
                    <Badge className={`text-xs ${getStatusColor(user.status)}`}>
                      {user.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Users
            </Button>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              System Health
            </CardTitle>
            <CardDescription>
              Real-time platform status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((health, index) => {
                const IconComponent = health.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`h-4 w-4 ${getHealthStatus(health.status)}`} />
                      <span className="text-sm font-medium">{health.metric}</span>
                    </div>
                    <span className={`text-sm font-semibold ${getHealthStatus(health.status)}`}>
                      {health.value}
                    </span>
                  </div>
                );
              })}
            </div>
            <Button variant="outline" className="w-full mt-4">
              System Diagnostics
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Actions</CardTitle>
          <CardDescription>
            Common administrative tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">User Management</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <CreditCard className="h-6 w-6" />
              <span className="text-sm">Subscriptions</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <AlertTriangle className="h-6 w-6" />
              <span className="text-sm">Disputes</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Settings className="h-6 w-6" />
              <span className="text-sm">Settings</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;