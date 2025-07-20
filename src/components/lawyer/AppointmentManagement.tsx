import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Video,
  Plus,
  Filter,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const AppointmentManagement = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('list');

  const appointments = [
    {
      id: "1",
      client: "John Smith",
      type: "Contract Review Meeting",
      date: "2024-01-15",
      time: "09:00 AM",
      duration: "60 min",
      location: "Conference Room A",
      status: "confirmed",
      meetingType: "in-person",
      notes: "Review merger agreement terms"
    },
    {
      id: "2",
      client: "Emily Johnson", 
      type: "Consultation",
      date: "2024-01-15",
      time: "11:30 AM",
      duration: "45 min",
      location: "Virtual",
      status: "pending",
      meetingType: "video",
      notes: "Initial consultation for family law matter"
    },
    {
      id: "3",
      client: "Michael Davis",
      type: "Court Preparation",
      date: "2024-01-15", 
      time: "02:00 PM",
      duration: "90 min",
      location: "Conference Room B",
      status: "confirmed",
      meetingType: "in-person",
      notes: "Prepare for upcoming trial"
    },
    {
      id: "4",
      client: "Sarah Wilson",
      type: "Document Signing",
      date: "2024-01-16",
      time: "10:00 AM", 
      duration: "30 min",
      location: "Office",
      status: "confirmed",
      meetingType: "in-person",
      notes: "Execute settlement agreement"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getMeetingIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'phone': return <Phone className="h-4 w-4" />;
      default: return <MapPin className="h-4 w-4" />;
    }
  };

  const todayAppointments = appointments.filter(apt => apt.date === "2024-01-15");
  const upcomingAppointments = appointments.filter(apt => apt.date > "2024-01-15");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground">Manage your client meetings and consultations</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Calendar</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search appointments..."
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Today's Appointments</span>
                <Badge variant="secondary">{todayAppointments.length}</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">This Week</span>
                <Badge variant="secondary">{appointments.length}</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Pending Confirmations</span>
                <Badge variant="outline">
                  {appointments.filter(apt => apt.status === 'pending').length}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointments List */}
        <div className="lg:col-span-3 space-y-6">
          {/* Today's Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Today's Appointments</span>
                <Badge variant="secondary">{todayAppointments.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0">
                    <Avatar>
                      <AvatarFallback>
                        {appointment.client.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-foreground truncate">
                        {appointment.client}
                      </h3>
                      <Badge className={getStatusColor(appointment.status)} variant="outline">
                        {appointment.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{appointment.time} ({appointment.duration})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {getMeetingIcon(appointment.meetingType)}
                        <span>{appointment.location}</span>
                      </div>
                    </div>
                    {appointment.notes && (
                      <p className="text-xs text-muted-foreground mt-1 italic">
                        {appointment.notes}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    {appointment.meetingType === 'video' && (
                      <Button size="sm" variant="outline">
                        <Video className="h-4 w-4" />
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}

              {todayAppointments.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No appointments scheduled for today</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Upcoming Appointments</span>
                <Badge variant="secondary">{upcomingAppointments.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0">
                    <Avatar>
                      <AvatarFallback>
                        {appointment.client.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-foreground truncate">
                        {appointment.client}
                      </h3>
                      <Badge className={getStatusColor(appointment.status)} variant="outline">
                        {appointment.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <span>{appointment.date}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{appointment.time} ({appointment.duration})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {getMeetingIcon(appointment.meetingType)}
                        <span>{appointment.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}

              {upcomingAppointments.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No upcoming appointments</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagement;