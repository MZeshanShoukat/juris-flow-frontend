import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  FileText, 
  Users, 
  Clock, 
  AlertTriangle,
  Search, 
  Filter, 
  MoreHorizontal,
  Calendar,
  Building2,
  User,
  Eye,
  Flag,
  CheckCircle,
  XCircle,
  TrendingUp,
  BarChart3,
  PieChart
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CaseOversight = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("active");
  const [timeFrame, setTimeFrame] = useState("month");

  // Case statistics
  const caseStats = [
    {
      title: "Total Active Cases",
      value: "1,456",
      change: "+89 this month",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Cases Completed",
      value: "324",
      change: "+45 this month",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Overdue Cases",
      value: "23",
      change: "-12 from last month",
      icon: AlertTriangle,
      color: "text-red-600"
    },
    {
      title: "Avg Resolution Time",
      value: "14.2 days",
      change: "-2.1 days improved",
      icon: Clock,
      color: "text-purple-600"
    }
  ];

  // Mock case data
  const cases = [
    {
      id: "CASE-001",
      title: "Corporate Merger Agreement",
      client: "Tech Innovations Ltd",
      organization: "Smith & Associates",
      lawyer: "John Smith",
      type: "Corporate Law",
      status: "active",
      priority: "high",
      startDate: "2024-01-15",
      dueDate: "2024-02-15",
      progress: 65,
      billingAmount: "$25,000",
      lastActivity: "2 hours ago"
    },
    {
      id: "CASE-002",
      title: "Employment Contract Review",
      client: "Sarah Wilson",
      organization: "Legal Partners LLC",
      lawyer: "Maria Garcia",
      type: "Employment Law",
      status: "active",
      priority: "medium",
      startDate: "2024-01-10",
      dueDate: "2024-01-30",
      progress: 80,
      billingAmount: "$3,500",
      lastActivity: "1 day ago"
    },
    {
      id: "CASE-003",
      title: "Intellectual Property Dispute",
      client: "Innovation Corp",
      organization: "Corporate Law Group",
      lawyer: "David Kim",
      type: "IP Law",
      status: "overdue",
      priority: "high",
      startDate: "2023-12-01",
      dueDate: "2024-01-20",
      progress: 90,
      billingAmount: "$45,000",
      lastActivity: "3 days ago"
    },
    {
      id: "CASE-004",
      title: "Real Estate Transaction",
      client: "Property Holdings Inc",
      organization: "Business Legal Solutions",
      lawyer: "Jennifer Martinez",
      type: "Real Estate",
      status: "completed",
      priority: "low",
      startDate: "2023-11-15",
      dueDate: "2024-01-15",
      progress: 100,
      billingAmount: "$12,000",
      lastActivity: "5 days ago"
    },
    {
      id: "CASE-005",
      title: "Contract Negotiation",
      client: "Global Enterprises",
      organization: "Elite Law Firm",
      lawyer: "Robert Wilson",
      type: "Contract Law",
      status: "on_hold",
      priority: "medium",
      startDate: "2024-01-08",
      dueDate: "2024-02-08",
      progress: 35,
      billingAmount: "$18,500",
      lastActivity: "1 week ago"
    }
  ];

  // Case type distribution
  const caseTypes = [
    { type: "Corporate Law", count: 342, percentage: 23.5, avgValue: "$28,500" },
    { type: "Employment Law", count: 298, percentage: 20.5, avgValue: "$8,200" },
    { type: "IP Law", count: 234, percentage: 16.1, avgValue: "$35,000" },
    { type: "Real Estate", count: 189, percentage: 13.0, avgValue: "$15,400" },
    { type: "Contract Law", count: 156, percentage: 10.7, avgValue: "$12,800" },
    { type: "Family Law", count: 134, percentage: 9.2, avgValue: "$6,500" },
    { type: "Other", count: 103, percentage: 7.0, avgValue: "$9,200" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'on_hold':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
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

  const filteredCases = cases.filter(caseItem => {
    if (activeTab === "all") return true;
    return caseItem.status === activeTab;
  }).filter(caseItem =>
    caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseItem.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseItem.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseItem.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Case Oversight</h1>
          <p className="text-muted-foreground mt-1">
            Monitor and oversee all legal cases across the platform
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
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filter
          </Button>
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {caseStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Cases Table */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search cases by title, client, organization, or case ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="overdue">Overdue</TabsTrigger>
              <TabsTrigger value="on_hold">On Hold</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Legal Cases</CardTitle>
                  <CardDescription>
                    {activeTab === "all" ? "All cases across the platform" : 
                     activeTab === "active" ? "Currently active cases" :
                     activeTab === "completed" ? "Completed cases" :
                     activeTab === "overdue" ? "Overdue cases requiring attention" :
                     "Cases currently on hold"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Case</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Organization</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCases.map((caseItem) => (
                        <TableRow key={caseItem.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{caseItem.id}</div>
                              <div className="text-sm text-muted-foreground truncate max-w-[150px]">
                                {caseItem.title}
                              </div>
                              <div className="text-xs text-green-600 font-medium">
                                {caseItem.billingAmount}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{caseItem.client}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="flex items-center gap-2">
                                <Building2 className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{caseItem.organization}</span>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Lawyer: {caseItem.lawyer}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{caseItem.type}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(caseItem.status)}>
                              {caseItem.status.replace('_', ' ')}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className={getPriorityColor(caseItem.priority)}>
                              {caseItem.priority}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="w-full bg-muted rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: `${caseItem.progress}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">{caseItem.progress}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center text-sm">
                              <Calendar className="h-3 w-3 mr-1" />
                              {caseItem.dueDate}
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
                                  <Users className="mr-2 h-4 w-4" />
                                  View Team
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="mr-2 h-4 w-4" />
                                  Case Documents
                                </DropdownMenuItem>
                                {caseItem.status === "overdue" && (
                                  <DropdownMenuItem className="text-red-600">
                                    <Flag className="mr-2 h-4 w-4" />
                                    Escalate Case
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
          {/* Case Type Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Case Types</CardTitle>
              <CardDescription>Distribution of cases by legal practice area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {caseTypes.map((type, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{type.type}</span>
                      <span className="text-sm text-muted-foreground">{type.count}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${type.percentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{type.percentage}%</span>
                      <span>Avg: {type.avgValue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Case Activity</CardTitle>
              <CardDescription>Latest updates across all cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Case completed</p>
                    <p className="text-xs text-muted-foreground">Real Estate Transaction - Property Holdings Inc</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Case overdue</p>
                    <p className="text-xs text-muted-foreground">IP Dispute - Innovation Corp</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-4 w-4 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Progress updated</p>
                    <p className="text-xs text-muted-foreground">Corporate Merger - Tech Innovations Ltd</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
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
                <AlertTriangle className="mr-2 h-4 w-4" />
                Review Overdue Cases
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <PieChart className="mr-2 h-4 w-4" />
                Case Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseOversight;