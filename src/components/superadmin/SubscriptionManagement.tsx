import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  CreditCard, 
  TrendingUp, 
  TrendingDown,
  Search, 
  Filter, 
  MoreHorizontal,
  Calendar,
  DollarSign,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Edit,
  RefreshCw
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const SubscriptionManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("active");

  // Mock subscription data
  const subscriptions = [
    {
      id: "1",
      organization: "Smith & Associates",
      plan: "Premium",
      status: "active",
      amount: "$299/month",
      nextBilling: "2024-02-15",
      startDate: "2023-11-15",
      users: 25,
      features: ["Advanced Analytics", "Priority Support", "Custom Branding"],
      mrr: 299,
      lastPayment: "2024-01-15"
    },
    {
      id: "2",
      organization: "Legal Partners LLC",
      plan: "Basic",
      status: "active",
      amount: "$99/month",
      nextBilling: "2024-02-08",
      startDate: "2023-12-08",
      users: 8,
      features: ["Basic Analytics", "Email Support"],
      mrr: 99,
      lastPayment: "2024-01-08"
    },
    {
      id: "3",
      organization: "Corporate Law Group",
      plan: "Enterprise",
      status: "past_due",
      amount: "$599/month",
      nextBilling: "2024-01-28",
      startDate: "2023-06-28",
      users: 50,
      features: ["Full Analytics Suite", "24/7 Support", "API Access", "Custom Integration"],
      mrr: 599,
      lastPayment: "2023-12-28"
    },
    {
      id: "4",
      organization: "Solo Practice Law",
      plan: "Basic",
      status: "cancelled",
      amount: "$99/month",
      nextBilling: "N/A",
      startDate: "2023-08-10",
      users: 1,
      features: ["Basic Analytics", "Email Support"],
      mrr: 0,
      lastPayment: "2024-01-10"
    }
  ];

  // Subscription analytics
  const subscriptionStats = [
    {
      title: "Active Subscriptions",
      value: "342",
      change: "+23 this month",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Monthly Recurring Revenue",
      value: "$89,450",
      change: "+18% from last month",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Past Due",
      value: "12",
      change: "-5 from last week",
      trend: "down",
      icon: AlertTriangle,
      color: "text-yellow-600"
    },
    {
      title: "Churn Rate",
      value: "3.2%",
      change: "-0.8% from last month",
      trend: "down",
      icon: TrendingDown,
      color: "text-green-600"
    }
  ];

  // Plan distribution
  const planDistribution = [
    { plan: "Basic", count: 156, percentage: 45.6, revenue: "$15,444" },
    { plan: "Premium", count: 134, percentage: 39.2, revenue: "$40,066" },
    { plan: "Enterprise", count: 52, percentage: 15.2, revenue: "$31,148" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'past_due':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      case 'trialing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan.toLowerCase()) {
      case 'basic':
        return 'bg-blue-100 text-blue-800';
      case 'premium':
        return 'bg-purple-100 text-purple-800';
      case 'enterprise':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredSubscriptions = subscriptions.filter(sub => {
    if (activeTab === "all") return true;
    return sub.status === activeTab;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Subscription Management</h1>
          <p className="text-muted-foreground mt-1">
            Monitor and manage platform subscriptions and billing
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync Billing Data
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {subscriptionStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center mt-1">
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-green-600 mr-1" />
                      )}
                      <p className="text-xs text-green-600">{stat.change}</p>
                    </div>
                  </div>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Subscriptions Table */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search organizations or subscription details..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="past_due">Past Due</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Subscriptions</CardTitle>
                  <CardDescription>
                    {activeTab === "all" ? "All platform subscriptions" : 
                     activeTab === "active" ? "Currently active subscriptions" :
                     activeTab === "past_due" ? "Subscriptions requiring attention" :
                     "Cancelled and expired subscriptions"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Organization</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Next Billing</TableHead>
                        <TableHead>Users</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSubscriptions.map((subscription) => (
                        <TableRow key={subscription.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{subscription.organization}</div>
                              <div className="text-sm text-muted-foreground">
                                Started: {subscription.startDate}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getPlanColor(subscription.plan)}>
                              {subscription.plan}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(subscription.status)}>
                              {subscription.status.replace('_', ' ')}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">{subscription.amount}</TableCell>
                          <TableCell>
                            <div className="flex items-center text-sm">
                              <Calendar className="h-3 w-3 mr-1" />
                              {subscription.nextBilling}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center text-sm">
                              <Users className="h-3 w-3 mr-1" />
                              {subscription.users}
                            </div>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Subscription
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <RefreshCw className="mr-2 h-4 w-4" />
                                  Sync Status
                                </DropdownMenuItem>
                                {subscription.status === 'past_due' && (
                                  <DropdownMenuItem className="text-red-600">
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Cancel Subscription
                                  </DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Plan Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Plan Distribution</CardTitle>
              <CardDescription>Subscription breakdown by plan type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {planDistribution.map((plan, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className={getPlanColor(plan.plan)}>{plan.plan}</Badge>
                        <span className="text-sm font-medium">{plan.count}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{plan.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${plan.percentage}%` }}
                      />
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-green-600">{plan.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <CreditCard className="mr-2 h-4 w-4" />
                Process Failed Payments
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Review Past Due
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                Revenue Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="mr-2 h-4 w-4" />
                Billing Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Billing Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Payment received</p>
                    <p className="text-xs text-muted-foreground">Smith & Associates - $299</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-4 w-4 text-red-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Payment failed</p>
                    <p className="text-xs text-muted-foreground">Corporate Law Group - $599</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-4 w-4 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Plan upgraded</p>
                    <p className="text-xs text-muted-foreground">Tech Legal - Basic to Premium</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManagement;