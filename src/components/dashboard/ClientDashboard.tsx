import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  MessageSquare, 
  Calendar, 
  FileText, 
  CreditCard,
  Search,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
  Star
} from "lucide-react";

const ClientDashboard = () => {
  const stats = [
    {
      title: "Active Cases",
      value: "3",
      change: "2 in progress",
      icon: Scale,
      color: "text-blue-600"
    },
    {
      title: "Upcoming Appointments",
      value: "2",
      change: "Next: Tomorrow 2PM",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Pending Invoices",
      value: "$2,400",
      change: "1 overdue",
      icon: CreditCard,
      color: "text-accent"
    },
    {
      title: "Messages",
      value: "5",
      change: "2 unread",
      icon: MessageSquare,
      color: "text-purple-600"
    }
  ];

  const activeCases = [
    { 
      id: "CL001", 
      lawyer: "Attorney Sarah Johnson", 
      type: "Family Law", 
      status: "In Progress", 
      nextAction: "Document Review",
      priority: "High",
      rating: 5
    },
    { 
      id: "CL002", 
      lawyer: "Attorney Michael Chen", 
      type: "Real Estate", 
      status: "Waiting", 
      nextAction: "Client Response Needed",
      priority: "Medium",
      rating: 4
    },
    { 
      id: "CL003", 
      lawyer: "Attorney Emily Rodriguez", 
      type: "Contract Review", 
      status: "Completed", 
      nextAction: "Final Invoice",
      priority: "Low",
      rating: 5
    }
  ];

  const upcomingAppointments = [
    { 
      date: "Tomorrow", 
      time: "2:00 PM", 
      lawyer: "Attorney Sarah Johnson", 
      type: "Case Update Meeting",
      location: "Video Call"
    },
    { 
      date: "Friday", 
      time: "10:00 AM", 
      lawyer: "Attorney Michael Chen", 
      type: "Document Signing", 
      location: "Office"
    }
  ];

  const recentActivity = [
    { type: "document", message: "New document uploaded by Attorney Johnson", time: "2 hours ago" },
    { type: "payment", message: "Invoice #INV-001 payment processed", time: "1 day ago" },
    { type: "message", message: "New message from Attorney Chen", time: "2 days ago" },
    { type: "appointment", message: "Appointment scheduled for Friday", time: "3 days ago" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "document": return <FileText className="h-4 w-4 text-blue-600" />;
      case "payment": return <CreditCard className="h-4 w-4 text-green-600" />;
      case "message": return <MessageSquare className="h-4 w-4 text-purple-600" />;
      case "appointment": return <Calendar className="h-4 w-4 text-orange-600" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John Doe</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Find Lawyers
          </Button>
          <Button className="bg-gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            New Case Request
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
        {/* Active Cases */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="h-5 w-5 mr-2" />
              Your Cases
            </CardTitle>
            <CardDescription>
              Track the progress of your legal matters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeCases.map((case_, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-medium text-sm">{case_.id}</span>
                      <Badge 
                        variant={case_.priority === "High" ? "destructive" : case_.priority === "Medium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {case_.priority}
                      </Badge>
                      <div className="flex items-center">
                        {[...Array(case_.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <p className="font-semibold">{case_.lawyer}</p>
                    <p className="text-sm text-muted-foreground">{case_.type}</p>
                    <p className="text-xs text-primary mt-1">{case_.nextAction}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={case_.status === "In Progress" ? "default" : case_.status === "Waiting" ? "secondary" : "outline"}>
                      {case_.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Cases
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Appointments
            </CardTitle>
            <CardDescription>
              Your scheduled meetings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="p-3 border border-border rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{appointment.date} at {appointment.time}</div>
                      <div className="font-semibold text-sm">{appointment.lawyer}</div>
                      <div className="text-xs text-muted-foreground">{appointment.type}</div>
                      <div className="text-xs text-muted-foreground mt-1">📍 {appointment.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Schedule New Appointment
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest updates on your legal matters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-full flex-shrink-0">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientDashboard;