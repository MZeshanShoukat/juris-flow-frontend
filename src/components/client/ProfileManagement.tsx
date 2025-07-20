import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit3, 
  Save, 
  X,
  Camera,
  MessageSquare,
  Scale,
  Star,
  Clock
} from "lucide-react";

const ProfileManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    company: "Tech Innovations Inc.",
    bio: "Experienced business owner seeking legal counsel for corporate matters and contract negotiations."
  });

  const interactionHistory = [
    {
      id: 1,
      type: "case",
      title: "Contract Review - Tech Partnership",
      lawyer: "Attorney Sarah Johnson",
      date: "2024-01-15",
      status: "Completed",
      rating: 5
    },
    {
      id: 2,
      type: "consultation",
      title: "IP Strategy Consultation",
      lawyer: "Attorney Michael Chen",
      date: "2024-01-10",
      status: "Completed",
      rating: 4
    },
    {
      id: 3,
      type: "case",
      title: "Employment Contract Review",
      lawyer: "Attorney Emily Rodriguez",
      date: "2024-01-05",
      status: "In Progress",
      rating: null
    },
    {
      id: 4,
      type: "consultation",
      title: "Real Estate Legal Advice",
      lawyer: "Attorney David Wilson",
      date: "2023-12-20",
      status: "Completed",
      rating: 5
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data if needed
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed": return "bg-green-100 text-green-800";
      case "in progress": return "bg-blue-100 text-blue-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "case": return <Scale className="h-4 w-4" />;
      case "consultation": return <MessageSquare className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profile Management</h1>
          <p className="text-muted-foreground">Manage your personal information and view interaction history</p>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} className="bg-gradient-primary">
            <Edit3 className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Personal Information
              {isEditing && (
                <div className="flex space-x-2">
                  <Button size="sm" onClick={handleSave} className="bg-gradient-primary">
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleCancel}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </CardTitle>
            <CardDescription>
              Your profile information is used to connect you with the right legal professionals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-xl">JD</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full" variant="outline">
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{formData.firstName} {formData.lastName}</h3>
                <p className="text-muted-foreground">Premium Client</p>
                <Badge variant="secondary" className="mt-1">Verified Account</Badge>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                {isEditing ? (
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="mt-1"
                  />
                ) : (
                  <div className="flex items-center mt-1 p-2 border border-border rounded-md bg-secondary/30">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formData.firstName}</span>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="lastName">Last Name</Label>
                {isEditing ? (
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="mt-1"
                  />
                ) : (
                  <div className="flex items-center mt-1 p-2 border border-border rounded-md bg-secondary/30">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formData.lastName}</span>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1"
                  />
                ) : (
                  <div className="flex items-center mt-1 p-2 border border-border rounded-md bg-secondary/30">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formData.email}</span>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                {isEditing ? (
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                  />
                ) : (
                  <div className="flex items-center mt-1 p-2 border border-border rounded-md bg-secondary/30">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formData.phone}</span>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="address">Address</Label>
                {isEditing ? (
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="mt-1"
                  />
                ) : (
                  <div className="flex items-center mt-1 p-2 border border-border rounded-md bg-secondary/30">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formData.address}</span>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="company">Company (Optional)</Label>
                {isEditing ? (
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="mt-1"
                  />
                ) : (
                  <div className="flex items-center mt-1 p-2 border border-border rounded-md bg-secondary/30">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formData.company}</span>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                {isEditing ? (
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                ) : (
                  <div className="mt-1 p-2 border border-border rounded-md bg-secondary/30">
                    <span>{formData.bio}</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Account Summary</CardTitle>
            <CardDescription>Your activity overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Total Cases</div>
              </div>
              <div className="text-center p-3 bg-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-accent">4.8</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-success/5 rounded-lg">
                <div className="text-2xl font-bold text-success">$12,500</div>
                <div className="text-sm text-muted-foreground">Total Spent</div>
              </div>
              <div className="text-center p-3 bg-blue-500/5 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-sm text-muted-foreground">Active Cases</div>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground mb-2">Member Since</div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                January 2023
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interaction History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Interaction History
          </CardTitle>
          <CardDescription>
            Your complete history of legal consultations and cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {interactionHistory.map((interaction) => (
              <div key={interaction.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    {getTypeIcon(interaction.type)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{interaction.title}</h4>
                    <p className="text-sm text-muted-foreground">{interaction.lawyer}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-muted-foreground">{interaction.date}</span>
                      {interaction.rating && (
                        <div className="flex items-center">
                          {[...Array(interaction.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(interaction.status)}>
                  {interaction.status}
                </Badge>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All History
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileManagement;