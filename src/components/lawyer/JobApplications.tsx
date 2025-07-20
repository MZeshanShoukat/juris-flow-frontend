import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Briefcase, 
  DollarSign, 
  Clock, 
  MapPin, 
  User, 
  Calendar,
  Eye,
  Send,
  Filter,
  Search,
  Star,
  Building2,
  FileText,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JobApplications = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("available");
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [applicationText, setApplicationText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Available job postings
  const [availableJobs] = useState([
    {
      id: "JOB-001",
      title: "Corporate Legal Consultation",
      client: "Tech Innovations Inc.",
      type: "Contract Review",
      description: "Need assistance with reviewing and negotiating software licensing agreements for our expanding tech company.",
      budget: "$5,000 - $8,000",
      contractType: "Fixed Price",
      deadline: "2024-02-20",
      postedAt: "2024-01-15",
      location: "Remote",
      urgency: "Medium",
      specialization: "Corporate Law",
      estimatedHours: "20-30 hours",
      clientRating: 4.8,
      clientProjects: 12,
      requirements: [
        "5+ years experience in corporate law",
        "Experience with software licensing",
        "Available for video calls during EST business hours"
      ]
    },
    {
      id: "JOB-002",
      title: "Personal Injury Case Consultation",
      client: "Sarah Martinez",
      type: "Personal Injury",
      description: "Seeking legal representation for a workplace injury case. Need experienced lawyer for consultation and potential representation.",
      budget: "$150/hour",
      contractType: "Hourly",
      deadline: "2024-02-10",
      postedAt: "2024-01-16",
      location: "New York, NY",
      urgency: "High",
      specialization: "Personal Injury",
      estimatedHours: "40-60 hours",
      clientRating: 4.9,
      clientProjects: 3,
      requirements: [
        "Specialization in personal injury law",
        "Licensed to practice in New York",
        "Available for in-person meetings"
      ]
    },
    {
      id: "JOB-003",
      title: "Startup Legal Formation",
      client: "InnovateCorp",
      type: "Business Formation",
      description: "New startup looking for legal guidance on business formation, equity structure, and initial contracts.",
      budget: "$3,000 - $5,000",
      contractType: "Fixed Price",
      deadline: "2024-02-25",
      postedAt: "2024-01-14",
      location: "San Francisco, CA",
      urgency: "Low",
      specialization: "Business Law",
      estimatedHours: "15-25 hours",
      clientRating: 5.0,
      clientProjects: 1,
      requirements: [
        "Experience with startup formations",
        "Knowledge of Delaware incorporation",
        "Available for remote consultations"
      ]
    }
  ]);

  // My applications
  const [myApplications] = useState([
    {
      id: "APP-001",
      jobId: "JOB-004",
      jobTitle: "Contract Dispute Resolution",
      client: "Global Enterprises",
      appliedAt: "2024-01-12",
      status: "Under Review",
      proposedBudget: "$200/hour",
      coverLetter: "I have extensive experience in contract disputes...",
      clientResponse: null,
      nextStep: "Waiting for client response"
    },
    {
      id: "APP-002",
      jobId: "JOB-005",
      jobTitle: "Employment Law Consultation",
      client: "HR Solutions Inc.",
      appliedAt: "2024-01-10",
      status: "Accepted",
      proposedBudget: "$6,000",
      coverLetter: "I specialize in employment law with 10+ years...",
      clientResponse: "We'd like to schedule an interview",
      nextStep: "Schedule interview call"
    },
    {
      id: "APP-003",
      jobId: "JOB-006",
      jobTitle: "Real Estate Transaction",
      client: "Property Developers LLC",
      appliedAt: "2024-01-08",
      status: "Declined",
      proposedBudget: "$4,500",
      coverLetter: "I have handled numerous real estate...",
      clientResponse: "We went with another candidate",
      nextStep: "Application closed"
    }
  ]);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'under review':
        return 'bg-yellow-100 text-yellow-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApplyToJob = (job: any) => {
    if (!applicationText.trim()) {
      toast({
        title: "Error",
        description: "Please write a cover letter before applying.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted",
      description: `Your application for "${job.title}" has been submitted successfully.`,
    });

    setSelectedJob(null);
    setApplicationText("");
  };

  const filteredJobs = availableJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || 
                         job.contractType.toLowerCase().includes(filterType.toLowerCase()) ||
                         job.urgency.toLowerCase() === filterType.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Job Applications</h1>
          <p className="text-muted-foreground">
            View client job postings and manage your applications
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">Available Jobs ({availableJobs.length})</TabsTrigger>
          <TabsTrigger value="applications">My Applications ({myApplications.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search jobs by title, client, or specialization..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter jobs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Jobs</SelectItem>
                    <SelectItem value="fixed">Fixed Price</SelectItem>
                    <SelectItem value="hourly">Hourly Rate</SelectItem>
                    <SelectItem value="high">High Urgency</SelectItem>
                    <SelectItem value="medium">Medium Urgency</SelectItem>
                    <SelectItem value="low">Low Urgency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Job Listings */}
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <Badge className={getUrgencyColor(job.urgency)}>
                          {job.urgency} Priority
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {job.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {job.clientRating} ({job.clientProjects} projects)
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg text-green-600">{job.budget}</p>
                      <p className="text-sm text-muted-foreground">{job.contractType}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{job.specialization}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{job.estimatedHours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Due: {job.deadline}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-sm">Requirements:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <p className="text-sm text-muted-foreground">Posted {job.postedAt}</p>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{job.title}</DialogTitle>
                            <DialogDescription>
                              Detailed job information and requirements
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="font-medium">Client</p>
                                <p className="text-muted-foreground">{job.client}</p>
                              </div>
                              <div>
                                <p className="font-medium">Budget</p>
                                <p className="text-muted-foreground">{job.budget}</p>
                              </div>
                              <div>
                                <p className="font-medium">Contract Type</p>
                                <p className="text-muted-foreground">{job.contractType}</p>
                              </div>
                              <div>
                                <p className="font-medium">Deadline</p>
                                <p className="text-muted-foreground">{job.deadline}</p>
                              </div>
                            </div>
                            <div>
                              <p className="font-medium mb-2">Description</p>
                              <p className="text-muted-foreground">{job.description}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button onClick={() => setSelectedJob(job)}>
                            <Send className="h-4 w-4 mr-2" />
                            Apply Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Apply for Job</DialogTitle>
                            <DialogDescription>
                              Submit your application for "{job.title}"
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="budget">Proposed Budget/Rate</Label>
                              <Input id="budget" placeholder="Enter your proposed rate or budget" />
                            </div>
                            <div>
                              <Label htmlFor="coverLetter">Cover Letter</Label>
                              <Textarea
                                id="coverLetter"
                                placeholder="Explain why you're the best fit for this job..."
                                rows={6}
                                value={applicationText}
                                onChange={(e) => setApplicationText(e.target.value)}
                              />
                            </div>
                            <Button onClick={() => handleApplyToJob(job)} className="w-full">
                              Submit Application
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <div className="grid gap-6">
            {myApplications.map((application) => (
              <Card key={application.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <CardTitle>{application.jobTitle}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {application.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Applied {application.appliedAt}
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge className={getStatusColor(application.status)}>
                        {application.status}
                      </Badge>
                      <p className="text-sm font-medium">{application.proposedBudget}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-sm mb-2">Cover Letter:</p>
                    <p className="text-sm text-muted-foreground">{application.coverLetter}</p>
                  </div>

                  {application.clientResponse && (
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium text-sm mb-1">Client Response:</p>
                      <p className="text-sm">{application.clientResponse}</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Next Step: {application.nextStep}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message Client
                      </Button>
                      {application.status === 'Accepted' && (
                        <Button size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Meeting
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobApplications;