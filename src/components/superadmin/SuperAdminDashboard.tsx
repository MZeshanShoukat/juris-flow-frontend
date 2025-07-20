import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Building2, 
  DollarSign, 
  CreditCard, 
  AlertTriangle, 
  CheckCircle,
  TrendingUp,
  Activity,
  Shield,
  Settings,
  FileText,
  MessageSquare,
  Clock,
  UserCheck,
  Ban,
  Eye,
  Download,
  Filter,
  RefreshCw
} from "lucide-react";

const SuperAdminDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");

  // Platform stats
  const platformStats = [
    {
      title: "Total Clients",
      value: "2,847",
      change: "+127 this month",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Total Organizations",
      value: "342",
      change: "+23 this month",
      icon: Building2,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Monthly Revenue",
      value: "$284,500",
      change: "+18% from last month",
      icon: DollarSign,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      title: "Active Subscriptions",
      value: "1,923",
      change: "94% retention rate",
      icon: CreditCard,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Ongoing Cases",
      value: "1,456",
      change: "Across all firms",
      icon: FileText,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Pending Issues",
      value: "12",
      change: "Require attention",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  // Recent user registrations
  const recentUsers = [
    {
      id: "1",
      name: "David Chen",
      email: "david.chen@email.com",
      type: "Client",
      registeredAt: "2 hours ago",
      status: "active",
      verified: true
    },
    {
      id: "2",
      name: "Wilson & Associates",
      email: "contact@wilsonlaw.com",
      type: "Organization",
      registeredAt: "5 hours ago",
      status: "pending_verification",
      verified: false
    },
    {
      id: "3",
      name: "Sarah Martinez",
      email: "sarah.m@email.com",
      type: "Client",
      registeredAt: "1 day ago",
      status: "active",
      verified: true
    },
    {
      id: "4",
      name: "Tech Legal Group",
      email: "admin@techlegal.com",
      type: "Organization",
      registeredAt: "2 days ago",
      status: "active",
      verified: true
    }
  ];

  // System health metrics
  const systemHealth = [
    {
      metric: "Server Response Time",
      value: "142ms",
      status: "healthy",
      icon: Activity
    },
    {
      metric: "Database Performance",
      value: "98.7%",
      status: "healthy",
      icon: CheckCircle
    },
    {
      metric: "Payment Gateway",
      value: "99.9%",
      status: "healthy",
      icon: CreditCard
    },
    {
      metric: "Security Alerts",
      value: "0",
      status: "healthy",
      icon: Shield
    }
  ];

  // Recent disputes/issues
  const recentDisputes = [
    {
      id: "DSP-001",
      type: "Payment Dispute",
      client: "John Doe",
      organization: "Smith Legal",
      priority: "High",
      status: "investigating",
      createdAt: "1 hour ago"
    },
    {
      id: "DSP-002",
      type: "Service Complaint",
      client: "ABC Corp",
      organization: "Legal Partners",
      priority: "Medium",
      status: "resolved",
      createdAt: "3 hours ago"
    },
    {
      id: "DSP-003",
      type: "Account Issue",
      client: "Maria Garcia",
      organization: "Law Office Inc",
      priority: "Low",
      status: "pending",
      createdAt: "1 day ago"
    }
  ];

  // Financial overview
  const financialData = [
    {
      period: "This Month",
      subscriptions: "$184,500",
      transactions: "$97,300",
      refunds: "$2,800",
      net: "$278,000"
    },
    {
      period: "Last Month",
      subscriptions: "$156,200",
      transactions: "$89,100",
      refunds: "$4,200",
      net: "$241,100"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending_verification':
        return 'bg-yellow-100 text-yellow-800';
      case 'investigating':
        return 'bg-orange-100 text-orange-800';
      case 'resolved':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      case 'healthy':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Super Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Platform overview and administrative controls
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {platformStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                  </div>
                  <div className={`p-2 rounded-full ${stat.bgColor}`}>
                    <IconComponent className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent User Registrations */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent User Registrations</CardTitle>
              <CardDescription>New clients and organizations joining the platform</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      user.type === 'Organization' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {user.type === 'Organization' ? (
                        <Building2 className="h-4 w-4 text-blue-600" />
                      ) : (
                        <Users className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{user.name}</p>
                        {user.verified && (
                          <UserCheck className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-xs text-muted-foreground">{user.type} • {user.registeredAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(user.status)}>
                      {user.status.replace('_', ' ')}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Platform performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{metric.metric}</p>
                        <p className="text-xs text-muted-foreground">{metric.value}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(metric.status)}>
                      {metric.status}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Disputes */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Disputes & Issues</CardTitle>
            <CardDescription>Platform disputes requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDisputes.map((dispute) => (
                <div key={dispute.id} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{dispute.type}</p>
                      <Badge variant="outline" className={getPriorityColor(dispute.priority)}>
                        {dispute.priority}
                      </Badge>
                    </div>
                    <Badge className={getStatusColor(dispute.status)}>
                      {dispute.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {dispute.client} vs {dispute.organization}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>#{dispute.id}</span>
                    <span>{dispute.createdAt}</span>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm">Take Action</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Revenue and transaction summary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {financialData.map((period, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <h4 className="font-medium">{period.period}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Subscriptions</p>
                      <p className="font-medium text-green-600">{period.subscriptions}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Transactions</p>
                      <p className="font-medium text-blue-600">{period.transactions}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Refunds</p>
                      <p className="font-medium text-red-600">-{period.refunds}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Net Revenue</p>
                      <p className="font-bold text-foreground">{period.net}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Administrative Actions</CardTitle>
          <CardDescription>Common administrative tasks and controls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Users className="h-5 w-5" />
              <span className="text-xs">User Management</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Building2 className="h-5 w-5" />
              <span className="text-xs">Organizations</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <CreditCard className="h-5 w-5" />
              <span className="text-xs">Subscriptions</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-xs">Disputes</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <DollarSign className="h-5 w-5" />
              <span className="text-xs">Payments</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-5 w-5" />
              <span className="text-xs">Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdminDashboard;