import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  CreditCard,
  AlertCircle,
  Search, 
  Filter, 
  MoreHorizontal,
  Calendar,
  Download,
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PaymentsRevenue = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [timeFrame, setTimeFrame] = useState("month");

  // Revenue stats
  const revenueStats = [
    {
      title: "Total Revenue",
      value: "$284,500",
      change: "+18% from last month",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Subscription Revenue",
      value: "$184,500",
      change: "+22% from last month",
      trend: "up",
      icon: CreditCard,
      color: "text-blue-600"
    },
    {
      title: "Transaction Fees",
      value: "$97,300",
      change: "+12% from last month",
      trend: "up",
      icon: BarChart3,
      color: "text-purple-600"
    },
    {
      title: "Failed Payments",
      value: "$2,800",
      change: "-5% from last month",
      trend: "down",
      icon: XCircle,
      color: "text-red-600"
    }
  ];

  // Recent transactions
  const transactions = [
    {
      id: "TXN-001",
      organization: "Smith & Associates",
      type: "Subscription",
      plan: "Premium",
      amount: "$299.00",
      status: "completed",
      date: "2024-01-20",
      paymentMethod: "Visa ****4242",
      transactionId: "pi_1234567890"
    },
    {
      id: "TXN-002",
      organization: "Legal Partners LLC",
      type: "Transaction Fee",
      plan: "Per Transaction",
      amount: "$45.50",
      status: "completed",
      date: "2024-01-20",
      paymentMethod: "Mastercard ****8888",
      transactionId: "pi_0987654321"
    },
    {
      id: "TXN-003",
      organization: "Corporate Law Group",
      type: "Subscription",
      plan: "Enterprise",
      amount: "$599.00",
      status: "failed",
      date: "2024-01-19",
      paymentMethod: "Visa ****1234",
      transactionId: "pi_1122334455"
    },
    {
      id: "TXN-004",
      organization: "Solo Practice Law",
      type: "One-time Payment",
      plan: "Document Review",
      amount: "$150.00",
      status: "completed",
      date: "2024-01-19",
      paymentMethod: "PayPal",
      transactionId: "pi_5566778899"
    },
    {
      id: "TXN-005",
      organization: "Business Legal Solutions",
      type: "Subscription",
      plan: "Basic",
      amount: "$99.00",
      status: "pending",
      date: "2024-01-18",
      paymentMethod: "Visa ****5678",
      transactionId: "pi_9988776655"
    }
  ];

  // Revenue by plan
  const revenueByPlan = [
    { plan: "Enterprise", revenue: "$31,148", percentage: 35, transactions: 52, avgValue: "$599" },
    { plan: "Premium", revenue: "$40,066", percentage: 45, transactions: 134, avgValue: "$299" },
    { plan: "Basic", revenue: "$15,444", percentage: 17, transactions: 156, avgValue: "$99" },
    { plan: "One-time", revenue: "$2,842", percentage: 3, transactions: 28, avgValue: "$101" }
  ];

  // Payment methods
  const paymentMethods = [
    { method: "Credit Card", percentage: 78, amount: "$221,910", icon: CreditCard },
    { method: "PayPal", percentage: 15, amount: "$42,675", icon: DollarSign },
    { method: "Bank Transfer", percentage: 5, amount: "$14,225", icon: BarChart3 },
    { method: "Other", percentage: 2, amount: "$5,690", icon: DollarSign }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      case 'refunded':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'subscription':
        return 'bg-blue-100 text-blue-800';
      case 'transaction fee':
        return 'bg-purple-100 text-purple-800';
      case 'one-time payment':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Payments & Revenue</h1>
          <p className="text-muted-foreground mt-1">
            Monitor revenue, payments, and financial analytics
          </p>
        </div>
        <div className="flex gap-3">
          <Select value={timeFrame} onValueChange={setTimeFrame}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {revenueStats.map((stat, index) => {
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
                        <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
                      )}
                      <p className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {stat.change}
                      </p>
                    </div>
                  </div>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-lg grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="failed">Failed</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue by Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Plan</CardTitle>
                <CardDescription>Breakdown of revenue by subscription plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueByPlan.map((plan, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{plan.plan}</Badge>
                          <span className="text-sm font-medium">{plan.transactions} transactions</span>
                        </div>
                        <span className="text-sm font-medium text-green-600">{plan.revenue}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${plan.percentage}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{plan.percentage}% of total revenue</span>
                        <span>Avg: {plan.avgValue}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Distribution of payment methods used</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">{method.method}</p>
                            <p className="text-sm text-muted-foreground">{method.percentage}% of payments</p>
                          </div>
                        </div>
                        <p className="font-medium text-green-600">{method.amount}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search transactions by organization or transaction ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>All payment transactions and revenue activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.id}</div>
                          <div className="text-xs text-muted-foreground">{transaction.transactionId}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{transaction.organization}</div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Badge className={getTypeColor(transaction.type)}>
                            {transaction.type}
                          </Badge>
                          <div className="text-xs text-muted-foreground mt-1">{transaction.plan}</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{transaction.amount}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{transaction.paymentMethod}</TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {transaction.date}
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
                              <Download className="mr-2 h-4 w-4" />
                              Download Receipt
                            </DropdownMenuItem>
                            {transaction.status === "failed" && (
                              <DropdownMenuItem>
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Retry Payment
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

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Monthly revenue growth over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Revenue chart would be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Success Rate</CardTitle>
                <CardDescription>Payment completion rates by month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Success Rate</span>
                    <span className="text-2xl font-bold text-green-600">97.2%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "97.2%" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Successful</p>
                      <p className="font-medium text-green-600">1,847 payments</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Failed</p>
                      <p className="font-medium text-red-600">53 payments</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="failed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Failed Payments</CardTitle>
              <CardDescription>Payments that require attention or retry</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Failure Reason</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Attempts</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.filter(t => t.status === "failed").map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.id}</div>
                          <div className="text-xs text-muted-foreground">{transaction.transactionId}</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{transaction.organization}</TableCell>
                      <TableCell className="font-medium text-red-600">{transaction.amount}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600" />
                          <span className="text-sm">Insufficient funds</span>
                        </div>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline">3 attempts</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <RefreshCw className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
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
  );
};

export default PaymentsRevenue;