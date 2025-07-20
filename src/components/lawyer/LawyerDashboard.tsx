import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  Calendar, 
  DollarSign, 
  Clock, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  UserPlus,
  PlusCircle,
  Filter,
  Search,
  Bell
} from "lucide-react";

const LawyerDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");

  // Stats data
  const stats = [
    {
      title: "Active Cases",
      value: "24",
      change: "+3 this month",
      icon: Briefcase,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Total Clients",
      value: "48",
      change: "+8 this month",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Monthly Revenue",
      value: "$84,500",
      change: "+12% from last month",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Billable Hours",
      value: "156",
      change: "This month",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  // Recent cases
  const recentCases = [
    {
      id: "C-2024-001",
      client: "Tech Corp Inc.",
      type: "Corporate Law",
      status: "Active",
      priority: "High",
      deadline: "2024-02-15",
      progress: 75
    },
    {
      id: "C-2024-002", 
      client: "Sarah Johnson",
      type: "Personal Injury",
      status: "Review",
      priority: "Medium",
      deadline: "2024-02-20",
      progress: 60
    },
    {
      id: "C-2024-003",
      client: "Global Enterprises",
      type: "Contract Review",
      status: "Completed",
      priority: "Low",
      deadline: "2024-01-30",
      progress: 100
    }
  ];

  // Upcoming appointments
  const upcomingAppointments = [
    {
      time: "09:00 AM",
      client: "John Doe",
      type: "Initial Consultation",
      duration: "1 hour"
    },
    {
      time: "02:00 PM",
      client: "ABC Corporation",
      type: "Contract Review",
      duration: "2 hours"
    },
    {
      time: "04:30 PM",
      client: "Maria Garcia",
      type: "Case Update",
      duration: "30 minutes"
    }
  ];

  // Recent client applications
  const clientApplications = [
    {
      id: "APP-001",
      client: "Robert Wilson",
      service: "Divorce Consultation",
      budget: "$5,000",
      status: "pending",
      submittedAt: "2 hours ago"
    },
    {
      id: "APP-002",
      client: "StartupXYZ",
      service: "Business Formation",
      budget: "$3,500",
      status: "reviewing",
      submittedAt: "1 day ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'review':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      case 'reviewing':
        return 'bg-purple-100 text-purple-800';
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
          <h1 className="text-3xl font-bold text-foreground">Lawyer Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, Sarah. Here's what's happening with your practice today.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Case
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Cases */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Cases</CardTitle>
              <CardDescription>Your active and recent legal cases</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCases.map((case_item) => (
                <div key={case_item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{case_item.client}</p>
                      <Badge variant="outline" className={getPriorityColor(case_item.priority)}>
                        {case_item.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{case_item.type} • {case_item.id}</p>
                    <p className="text-xs text-muted-foreground">Deadline: {case_item.deadline}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <Badge className={getStatusColor(case_item.status)}>
                        {case_item.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{case_item.progress}% complete</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Upcoming appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-sm">{appointment.time}</p>
                    <p className="text-sm">{appointment.client}</p>
                    <p className="text-xs text-muted-foreground">{appointment.type}</p>
                    <p className="text-xs text-muted-foreground">{appointment.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Client Applications */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Client Applications</CardTitle>
            <CardDescription>New job applications from potential clients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientApplications.map((application) => (
                <div key={application.id} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{application.client}</p>
                    <Badge className={getStatusColor(application.status)}>
                      {application.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{application.service}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Budget: {application.budget}</span>
                    <span>{application.submittedAt}</span>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm">Respond</Button>
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
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <UserPlus className="h-5 w-5" />
                <span className="text-xs">New Client</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Briefcase className="h-5 w-5" />
                <span className="text-xs">Create Case</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-xs">Schedule Meeting</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <FileText className="h-5 w-5" />
                <span className="text-xs">Generate Invoice</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs">Send Message</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-xs">View Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LawyerDashboard;