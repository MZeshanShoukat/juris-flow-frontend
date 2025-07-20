import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  DollarSign, 
  Clock, 
  MapPin, 
  Plus,
  Edit3,
  Trash2,
  Eye,
  Users
} from "lucide-react";

const JobPosting = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    areaOfLaw: "",
    contractType: "",
    budget: "",
    timeline: "",
    location: "",
    urgency: ""
  });

  const areaOfLawOptions = [
    "Corporate Law", "Family Law", "Criminal Law", "Real Estate Law", "Intellectual Property",
    "Employment Law", "Immigration Law", "Personal Injury", "Tax Law", "Environmental Law",
    "Healthcare Law", "Contract Law", "Civil Rights", "Bankruptcy Law", "Estate Planning"
  ];

  const contractTypes = [
    "Hourly Rate", "Fixed Price", "Retainer", "Contingency Fee"
  ];

  const urgencyLevels = [
    "Low - 1+ months", "Medium - 2-4 weeks", "High - 1-2 weeks", "Urgent - Within 1 week"
  ];

  const existingJobs = [
    {
      id: "JOB001",
      title: "Corporate Contract Review",
      areaOfLaw: "Corporate Law",
      budget: "$2,500",
      contractType: "Fixed Price",
      status: "Active",
      applications: 12,
      posted: "2024-01-15",
      urgency: "Medium"
    },
    {
      id: "JOB002", 
      title: "Employment Agreement Consultation",
      areaOfLaw: "Employment Law",
      budget: "$150/hour",
      contractType: "Hourly Rate",
      status: "In Review",
      applications: 8,
      posted: "2024-01-12",
      urgency: "High"
    },
    {
      id: "JOB003",
      title: "Intellectual Property Strategy",
      areaOfLaw: "Intellectual Property",
      budget: "$5,000",
      contractType: "Fixed Price", 
      status: "Completed",
      applications: 15,
      posted: "2024-01-08",
      urgency: "Low"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Handle job posting submission
    console.log("Job posted:", formData);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800";
      case "in review": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-gray-100 text-gray-800";
      case "paused": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    if (urgency.includes("Urgent")) return "text-red-600";
    if (urgency.includes("High")) return "text-orange-600";
    if (urgency.includes("Medium")) return "text-blue-600";
    return "text-green-600";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Posting</h1>
          <p className="text-muted-foreground">Post legal job requests and manage applications</p>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant={activeTab === "create" ? "default" : "outline"}
            onClick={() => setActiveTab("create")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Job
          </Button>
          <Button 
            variant={activeTab === "manage" ? "default" : "outline"}
            onClick={() => setActiveTab("manage")}
          >
            <Briefcase className="h-4 w-4 mr-2" />
            Manage Jobs
          </Button>
        </div>
      </div>

      {activeTab === "create" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Create New Job Posting
            </CardTitle>
            <CardDescription>
              Provide details about your legal needs to attract qualified attorneys
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Title */}
              <div className="md:col-span-2">
                <Label htmlFor="title">Job Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Corporate Contract Review, Family Law Consultation"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="mt-1"
                />
              </div>

              {/* Area of Law */}
              <div>
                <Label htmlFor="areaOfLaw">Area of Law *</Label>
                <Select value={formData.areaOfLaw} onValueChange={(value) => handleInputChange("areaOfLaw", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select area of law" />
                  </SelectTrigger>
                  <SelectContent>
                    {areaOfLawOptions.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Contract Type */}
              <div>
                <Label htmlFor="contractType">Contract Type *</Label>
                <Select value={formData.contractType} onValueChange={(value) => handleInputChange("contractType", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select contract type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contractTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div>
                <Label htmlFor="budget">Budget *</Label>
                <div className="relative mt-1">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="budget"
                    placeholder="e.g., 2500 or 150/hour"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Urgency */}
              <div>
                <Label htmlFor="urgency">Urgency Level *</Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Timeline */}
              <div>
                <Label htmlFor="timeline">Expected Timeline</Label>
                <div className="relative mt-1">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="timeline"
                    placeholder="e.g., 2-3 weeks, 1 month"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location">Location Preference</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="e.g., Remote, New York, NY"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <Label htmlFor="description">Job Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your legal needs, specific requirements, deliverables, and any relevant background information..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="mt-1"
                  rows={6}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-6 border-t">
              <Button variant="outline">Save as Draft</Button>
              <Button onClick={handleSubmit} className="bg-gradient-primary">
                Post Job
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "manage" && (
        <div className="space-y-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Briefcase className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-muted-foreground">Total Jobs</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">35</div>
                    <div className="text-sm text-muted-foreground">Applications</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">248</div>
                    <div className="text-sm text-muted-foreground">Views</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-accent mr-3" />
                  <div>
                    <div className="text-2xl font-bold">$10K</div>
                    <div className="text-sm text-muted-foreground">Total Budget</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Existing Jobs */}
          <Card>
            <CardHeader>
              <CardTitle>Your Job Postings</CardTitle>
              <CardDescription>
                Manage your active and past job postings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {existingJobs.map((job) => (
                  <div key={job.id} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <Badge className={getStatusColor(job.status)}>
                            {job.status}
                          </Badge>
                          <Badge variant="outline" className={getUrgencyColor(job.urgency)}>
                            {job.urgency.split(" - ")[0]}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mb-3">
                          <div>
                            <span className="font-medium">Area:</span> {job.areaOfLaw}
                          </div>
                          <div>
                            <span className="font-medium">Budget:</span> {job.budget}
                          </div>
                          <div>
                            <span className="font-medium">Type:</span> {job.contractType}
                          </div>
                          <div>
                            <span className="font-medium">Posted:</span> {job.posted}
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center text-primary">
                            <Users className="h-4 w-4 mr-1" />
                            {job.applications} applications
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Eye className="h-4 w-4 mr-1" />
                            ID: {job.id}
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default JobPosting;
