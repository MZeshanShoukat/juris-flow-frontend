import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Building2, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Star,
  Plus,
  X,
  Camera,
  Save,
  Edit
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProfileManagement = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("organization");
  const [specializations, setSpecializations] = useState([
    "Corporate Law",
    "Contract Law",
    "Intellectual Property"
  ]);
  const [newSpecialization, setNewSpecialization] = useState("");

  // Organization data
  const [orgData, setOrgData] = useState({
    name: "Johnson & Associates Legal Firm",
    description: "Full-service law firm specializing in corporate and commercial law with over 20 years of experience.",
    address: "123 Legal Street, Downtown, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "contact@johnsonlaw.com",
    website: "www.johnsonlaw.com",
    founded: "2003",
    employeeCount: "15-50",
    barNumber: "NY-12345678",
    licenseStatus: "Active"
  });

  // Availability data
  const [availability, setAvailability] = useState({
    monday: { enabled: true, start: "09:00", end: "17:00" },
    tuesday: { enabled: true, start: "09:00", end: "17:00" },
    wednesday: { enabled: true, start: "09:00", end: "17:00" },
    thursday: { enabled: true, start: "09:00", end: "17:00" },
    friday: { enabled: true, start: "09:00", end: "17:00" },
    saturday: { enabled: false, start: "10:00", end: "14:00" },
    sunday: { enabled: false, start: "10:00", end: "14:00" }
  });

  // Lawyers data
  const [lawyers, setLawyers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Managing Partner",
      email: "sarah@johnsonlaw.com",
      phone: "+1 (555) 123-4567",
      barNumber: "NY-87654321",
      specializations: ["Corporate Law", "M&A"],
      experience: "20+ years",
      status: "Active",
      isPartner: true
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Senior Associate",
      email: "michael@johnsonlaw.com",
      phone: "+1 (555) 123-4568",
      barNumber: "NY-87654322",
      specializations: ["Contract Law", "IP Law"],
      experience: "8 years",
      status: "Active",
      isPartner: false
    }
  ]);

  const handleAddSpecialization = () => {
    if (newSpecialization.trim() && !specializations.includes(newSpecialization.trim())) {
      setSpecializations([...specializations, newSpecialization.trim()]);
      setNewSpecialization("");
    }
  };

  const handleRemoveSpecialization = (spec: string) => {
    setSpecializations(specializations.filter(s => s !== spec));
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your organization profile has been successfully updated.",
    });
  };

  const handleAvailabilityChange = (day: string, field: string, value: string | boolean) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const dayNames = {
    monday: "Monday",
    tuesday: "Tuesday", 
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday"
  };

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Profile Management</h1>
          <p className="text-muted-foreground">
            Manage your organization and lawyer profiles
          </p>
        </div>
        <Button onClick={handleSaveProfile}>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="organization">Organization Profile</TabsTrigger>
          <TabsTrigger value="lawyers">Lawyer Profiles</TabsTrigger>
          <TabsTrigger value="availability">Availability & Hours</TabsTrigger>
        </TabsList>

        <TabsContent value="organization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Organization Information
              </CardTitle>
              <CardDescription>
                Update your law firm's basic information and credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/api/placeholder/80/80" />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{orgData.name}</h3>
                  <p className="text-muted-foreground">Update organization logo</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input
                    id="orgName"
                    value={orgData.name}
                    onChange={(e) => setOrgData({...orgData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="founded">Founded Year</Label>
                  <Input
                    id="founded"
                    value={orgData.founded}
                    onChange={(e) => setOrgData({...orgData, founded: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={orgData.phone}
                    onChange={(e) => setOrgData({...orgData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={orgData.email}
                    onChange={(e) => setOrgData({...orgData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={orgData.website}
                    onChange={(e) => setOrgData({...orgData, website: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employeeCount">Employee Count</Label>
                  <Select value={orgData.employeeCount} onValueChange={(value) => setOrgData({...orgData, employeeCount: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 employees</SelectItem>
                      <SelectItem value="6-10">6-10 employees</SelectItem>
                      <SelectItem value="11-25">11-25 employees</SelectItem>
                      <SelectItem value="26-50">26-50 employees</SelectItem>
                      <SelectItem value="51-100">51-100 employees</SelectItem>
                      <SelectItem value="100+">100+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Business Address</Label>
                <Input
                  id="address"
                  value={orgData.address}
                  onChange={(e) => setOrgData({...orgData, address: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Organization Description</Label>
                <Textarea
                  id="description"
                  rows={4}
                  value={orgData.description}
                  onChange={(e) => setOrgData({...orgData, description: e.target.value})}
                  placeholder="Describe your law firm's expertise and services..."
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Legal Specializations</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add specialization"
                      value={newSpecialization}
                      onChange={(e) => setNewSpecialization(e.target.value)}
                      className="w-48"
                      onKeyPress={(e) => e.key === 'Enter' && handleAddSpecialization()}
                    />
                    <Button onClick={handleAddSpecialization} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec) => (
                    <Badge key={spec} variant="secondary" className="flex items-center gap-1">
                      {spec}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => handleRemoveSpecialization(spec)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lawyers" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Lawyer Profiles
                </CardTitle>
                <CardDescription>
                  Manage individual lawyer profiles within your organization
                </CardDescription>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Lawyer
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lawyers.map((lawyer) => (
                  <Card key={lawyer.id} className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src="/api/placeholder/48/48" />
                          <AvatarFallback>{lawyer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{lawyer.name}</h4>
                            {lawyer.isPartner && (
                              <Badge variant="outline" className="text-primary">
                                Partner
                              </Badge>
                            )}
                            <Badge className={lawyer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                              {lawyer.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{lawyer.title}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              {lawyer.email}
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              {lawyer.phone}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-muted-foreground" />
                              {lawyer.experience}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {lawyer.specializations.map((spec) => (
                              <Badge key={spec} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="availability" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Business Hours & Availability
              </CardTitle>
              <CardDescription>
                Set your organization's availability hours for client consultations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(availability).map(([day, hours]) => (
                <div key={day} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Switch
                      checked={hours.enabled}
                      onCheckedChange={(checked) => handleAvailabilityChange(day, 'enabled', checked)}
                    />
                    <div className="w-24">
                      <Label className="font-medium">{dayNames[day as keyof typeof dayNames]}</Label>
                    </div>
                  </div>
                  {hours.enabled && (
                    <div className="flex items-center space-x-2">
                      <Input
                        type="time"
                        value={hours.start}
                        onChange={(e) => handleAvailabilityChange(day, 'start', e.target.value)}
                        className="w-32"
                      />
                      <span className="text-muted-foreground">to</span>
                      <Input
                        type="time"
                        value={hours.end}
                        onChange={(e) => handleAvailabilityChange(day, 'end', e.target.value)}
                        className="w-32"
                      />
                    </div>
                  )}
                  {!hours.enabled && (
                    <span className="text-muted-foreground">Closed</span>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileManagement;