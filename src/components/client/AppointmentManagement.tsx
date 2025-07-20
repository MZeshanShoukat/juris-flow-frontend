import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  Phone,
  Plus,
  Edit3,
  X,
  Check,
  AlertCircle,
  Bell
} from "lucide-react";

const AppointmentManagement = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showBooking, setShowBooking] = useState(false);

  const upcomingAppointments = [
    {
      id: "APT001",
      lawyer: "Attorney Sarah Johnson",
      avatar: "/placeholder.svg",
      title: "Contract Review Discussion",
      date: "2024-01-20",
      time: "2:00 PM - 3:00 PM",
      type: "Video Call",
      status: "Confirmed",
      location: "Zoom Meeting",
      caseId: "C001",
      canReschedule: true,
      reminder: "30 min before"
    },
    {
      id: "APT002", 
      lawyer: "Attorney Michael Chen",
      avatar: "/placeholder.svg",
      title: "Real Estate Closing Prep",
      date: "2024-01-22",
      time: "10:00 AM - 11:30 AM",
      type: "In-Person",
      status: "Confirmed",
      location: "Law Office - 123 Main St",
      caseId: "C002",
      canReschedule: true,
      reminder: "1 hour before"
    },
    {
      id: "APT003",
      lawyer: "Attorney Emily Rodriguez",
      avatar: "/placeholder.svg", 
      title: "Initial Consultation",
      date: "2024-01-25",
      time: "4:00 PM - 5:00 PM",
      type: "Phone Call",
      status: "Pending Confirmation",
      location: "Phone",
      caseId: "C003",
      canReschedule: false,
      reminder: "15 min before"
    }
  ];

  const pastAppointments = [
    {
      id: "APT004",
      lawyer: "Attorney Sarah Johnson",
      avatar: "/placeholder.svg",
      title: "Case Strategy Meeting",
      date: "2024-01-15",
      time: "3:00 PM - 4:00 PM",
      type: "Video Call",
      status: "Completed",
      location: "Zoom Meeting",
      caseId: "C001",
      rating: 5,
      notes: "Very productive meeting. Clear next steps outlined."
    },
    {
      id: "APT005",
      lawyer: "Attorney David Wilson",
      avatar: "/placeholder.svg",
      title: "Legal Document Review",
      date: "2024-01-10",
      time: "1:00 PM - 2:00 PM", 
      type: "In-Person",
      status: "Completed",
      location: "Law Office",
      caseId: "C004",
      rating: 4,
      notes: "Documents reviewed thoroughly. Minor revisions needed."
    }
  ];

  const availableSlots = [
    { date: "2024-01-26", time: "9:00 AM", duration: "1 hour" },
    { date: "2024-01-26", time: "2:00 PM", duration: "1 hour" },
    { date: "2024-01-27", time: "10:00 AM", duration: "1.5 hours" },
    { date: "2024-01-27", time: "3:00 PM", duration: "1 hour" },
    { date: "2024-01-28", time: "11:00 AM", duration: "2 hours" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending confirmation": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "video call": return <Video className="h-4 w-4" />;
      case "phone call": return <Phone className="h-4 w-4" />;
      case "in-person": return <MapPin className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground">Manage your meetings with legal professionals</p>
        </div>
        <Button onClick={() => setShowBooking(true)} className="bg-gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          Book Appointment
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-secondary rounded-lg p-1">
        <Button
          variant={activeTab === "upcoming" ? "default" : "ghost"}
          onClick={() => setActiveTab("upcoming")}
          className="flex-1"
        >
          Upcoming ({upcomingAppointments.length})
        </Button>
        <Button
          variant={activeTab === "past" ? "default" : "ghost"}
          onClick={() => setActiveTab("past")}
          className="flex-1"
        >
          Past ({pastAppointments.length})
        </Button>
        <Button
          variant={activeTab === "calendar" ? "default" : "ghost"}
          onClick={() => setActiveTab("calendar")}
          className="flex-1"
        >
          Calendar View
        </Button>
      </div>

      {/* Upcoming Appointments */}
      {activeTab === "upcoming" && (
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-card transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={appointment.avatar} />
                      <AvatarFallback>{appointment.lawyer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold">{appointment.title}</h3>
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {appointment.caseId}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{appointment.lawyer}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{appointment.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(appointment.type)}
                          <span>{appointment.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mt-3">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Reminder: {appointment.reminder}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    {appointment.type === "Video Call" && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Video className="h-4 w-4 mr-2" />
                        Join Call
                      </Button>
                    )}
                    {appointment.canReschedule && (
                      <Button size="sm" variant="outline">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Reschedule
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Past Appointments */}
      {activeTab === "past" && (
        <div className="space-y-4">
          {pastAppointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-card transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={appointment.avatar} />
                    <AvatarFallback>{appointment.lawyer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold">{appointment.title}</h3>
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {appointment.caseId}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{appointment.lawyer}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{appointment.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(appointment.type)}
                        <span>{appointment.location}</span>
                      </div>
                    </div>

                    {appointment.notes && (
                      <div className="bg-secondary/30 p-3 rounded-lg mb-3">
                        <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                      </div>
                    )}

                    {appointment.rating && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Your rating:</span>
                        <div className="flex items-center">
                          {[...Array(appointment.rating)].map((_, i) => (
                            <span key={i} className="text-accent">★</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Calendar View */}
      {activeTab === "calendar" && (
        <Card>
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
            <CardDescription>
              See all your appointments in a calendar format
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Calendar integration coming soon</p>
              <p className="text-sm text-muted-foreground mt-2">
                We're working on Google Calendar and Outlook integration
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Booking Modal (simplified representation) */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="max-w-2xl w-full m-4">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Book New Appointment
                <Button variant="ghost" size="sm" onClick={() => setShowBooking(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                Schedule a meeting with your legal team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Select Lawyer</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose a lawyer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah">Attorney Sarah Johnson</SelectItem>
                      <SelectItem value="michael">Attorney Michael Chen</SelectItem>
                      <SelectItem value="emily">Attorney Emily Rodriguez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Meeting Type</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video Call</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="in-person">In-Person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Available Time Slots</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  {availableSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start h-auto p-3"
                    >
                      <div>
                        <div className="font-medium">{slot.date}</div>
                        <div className="text-sm text-muted-foreground">
                          {slot.time} ({slot.duration})
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Meeting Purpose</Label>
                <Textarea
                  placeholder="Describe what you'd like to discuss..."
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setShowBooking(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-primary">
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AppointmentManagement;