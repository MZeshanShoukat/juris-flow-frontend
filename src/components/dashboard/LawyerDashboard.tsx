import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  Calendar, 
  DollarSign, 
  MessageSquare, 
  FileText,
  Clock,
  TrendingUp,
  Plus,
  AlertCircle
} from "lucide-react";

const LawyerDashboard = () => {
  const stats = [
    {
      title: "Active Cases",
      value: "24",
      change: "+3 this week",
      icon: Briefcase,
      color: "text-blue-600"
    },
    {
      title: "Total Clients",
      value: "156",
      change: "+12 this month",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Revenue",
      value: "$48,500",
      change: "+15% vs last month",
      icon: DollarSign,
      color: "text-accent"
    },
    {
      title: "Pending Tasks",
      value: "8",
      change: "2 urgent",
      icon: AlertCircle,
      color: "text-red-600"
    }
  ];

  const recentCases = [
    { id: "C001", client: "Johnson & Associates", type: "Corporate Law", status: "Active", priority: "High" },
    { id: "C002", client: "Sarah Williams", type: "Family Law", status: "Review", priority: "Medium" },
    { id: "C003", client: "Tech Startup Inc", type: "IP Law", status: "Active", priority: "High" },
    { id: "C004", client: "Robert Chen", type: "Real Estate", status: "Closed", priority: "Low" }
  ];

  const upcomingAppointments = [
    { time: "09:00 AM", client: "Johnson & Associates", type: "Contract Review" },
    { time: "11:30 AM", client: "Sarah Williams", type: "Consultation" },
    { time: "02:00 PM", client: "Tech Startup Inc", type: "IP Strategy" },
    { time: "04:00 PM", client: "Michael Rodriguez", type: "Case Update" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Attorney Smith</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            Messages (5)
          </Button>
          <Button className="bg-gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            New Case
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
        {/* Recent Cases */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="h-5 w-5 mr-2" />
              Recent Cases
            </CardTitle>
            <CardDescription>
              Your most recent case activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCases.map((case_, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-sm">{case_.id}</span>
                      <Badge 
                        variant={case_.priority === "High" ? "destructive" : case_.priority === "Medium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {case_.priority}
                      </Badge>
                    </div>
                    <p className="font-semibold">{case_.client}</p>
                    <p className="text-sm text-muted-foreground">{case_.type}</p>
                  </div>
                  <Badge variant={case_.status === "Active" ? "default" : case_.status === "Review" ? "secondary" : "outline"}>
                    {case_.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Today's Schedule
            </CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{appointment.time}</div>
                    <div className="font-semibold text-sm">{appointment.client}</div>
                    <div className="text-xs text-muted-foreground">{appointment.type}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Full Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Frequently used actions for your practice
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Create Invoice</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Add Client</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Schedule Meeting</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LawyerDashboard;