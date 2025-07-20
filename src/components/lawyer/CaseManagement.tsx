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
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Briefcase, 
  Plus,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle2,
  User,
  Users,
  FileText,
  MessageSquare,
  DollarSign,
  Filter,
  Search,
  MoreHorizontal,
  Eye,
  Edit,
  Archive
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CaseManagement = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("active");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [selectedCase, setSelectedCase] = useState<any>(null);

  // Cases data
  const [cases] = useState([
    {
      id: "C-2024-001",
      title: "Corporate Merger Review",
      client: "Tech Innovations Inc.",
      clientContact: "John Smith",
      type: "Corporate Law",
      status: "Active",
      priority: "High",
      progress: 75,
      startDate: "2024-01-15",
      deadline: "2024-03-15",
      estimatedHours: 120,
      billedHours: 89,
      budget: 75000,
      description: "Legal review and documentation for corporate merger between Tech Innovations and StartupAI.",
      assignedStaff: [
        { id: 1, name: "Sarah Johnson", role: "Lead Attorney", avatar: "" },
        { id: 2, name: "Michael Chen", role: "Associate", avatar: "" },
        { id: 3, name: "Emma Davis", role: "Paralegal", avatar: "" }
      ],
      tasks: [
        { id: 1, title: "Due Diligence Review", status: "Completed", assignee: "Michael Chen", dueDate: "2024-02-01" },
        { id: 2, title: "Contract Drafting", status: "In Progress", assignee: "Sarah Johnson", dueDate: "2024-02-10" },
        { id: 3, title: "Regulatory Filing", status: "Pending", assignee: "Emma Davis", dueDate: "2024-02-15" }
      ],
      documents: 24,
      lastActivity: "2 hours ago",
      nextDeadline: "Contract submission - Feb 10"
    },
    {
      id: "C-2024-002",
      title: "Employment Dispute Resolution",
      client: "Global Enterprises",
      clientContact: "Maria Garcia",
      type: "Employment Law",
      status: "Active",
      priority: "Medium",
      progress: 45,
      startDate: "2024-01-20",
      deadline: "2024-02-28",
      estimatedHours: 60,
      billedHours: 27,
      budget: 25000,
      description: "Representing client in employment discrimination case and settlement negotiations.",
      assignedStaff: [
        { id: 1, name: "Sarah Johnson", role: "Lead Attorney", avatar: "" },
        { id: 4, name: "David Kim", role: "Associate", avatar: "" }
      ],
      tasks: [
        { id: 4, title: "Evidence Collection", status: "In Progress", assignee: "David Kim", dueDate: "2024-02-05" },
        { id: 5, title: "Witness Interviews", status: "Pending", assignee: "Sarah Johnson", dueDate: "2024-02-12" }
      ],
      documents: 18,
      lastActivity: "1 day ago",
      nextDeadline: "Evidence submission - Feb 5"
    },
    {
      id: "C-2024-003",
      title: "Contract Review - Software License",
      client: "StartupXYZ",
      clientContact: "Robert Wilson",
      type: "Contract Law",
      status: "Completed",
      priority: "Low",
      progress: 100,
      startDate: "2024-01-05",
      deadline: "2024-01-30",
      estimatedHours: 20,
      billedHours: 18,
      budget: 8000,
      description: "Review and negotiation of software licensing agreements for startup company.",
      assignedStaff: [
        { id: 2, name: "Michael Chen", role: "Associate", avatar: "" }
      ],
      tasks: [
        { id: 6, title: "Contract Analysis", status: "Completed", assignee: "Michael Chen", dueDate: "2024-01-15" },
        { id: 7, title: "Client Consultation", status: "Completed", assignee: "Michael Chen", dueDate: "2024-01-25" }
      ],
      documents: 8,
      lastActivity: "1 week ago",
      nextDeadline: "Case closed"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'on hold':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
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

  const getTaskStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'in progress':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const filteredCases = cases.filter(case_item => {
    const matchesSearch = case_item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_item.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPriority = filterPriority === 'all' || case_item.priority.toLowerCase() === filterPriority.toLowerCase();
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'active' && case_item.status === 'Active') ||
                      (activeTab === 'completed' && case_item.status === 'Completed');
    
    return matchesSearch && matchesPriority && matchesTab;
  });

  const handleCreateCase = () => {
    toast({
      title: "Case Created",
      description: "New case has been created successfully.",
    });
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Case Management</h1>
          <p className="text-muted-foreground">
            Create and organize legal cases, track progress and manage deadlines
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Case
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Case</DialogTitle>
              <DialogDescription>
                Enter the details for the new legal case
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="caseTitle">Case Title</Label>
                  <Input id="caseTitle" placeholder="Enter case title" />
                </div>
                <div>
                  <Label htmlFor="client">Client</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select client" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech-innovations">Tech Innovations Inc.</SelectItem>
                      <SelectItem value="global-enterprises">Global Enterprises</SelectItem>
                      <SelectItem value="startupxyz">StartupXYZ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="caseType">Case Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="employment">Employment Law</SelectItem>
                      <SelectItem value="contract">Contract Law</SelectItem>
                      <SelectItem value="litigation">Litigation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
                <div>
                  <Label htmlFor="budget">Budget</Label>
                  <Input id="budget" placeholder="Enter budget" />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Case Description</Label>
                <Textarea id="description" placeholder="Enter case description" rows={3} />
              </div>
              <Button onClick={handleCreateCase} className="w-full">
                Create Case
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="active">Active Cases</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Cases</TabsTrigger>
          </TabsList>

          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Select value={filterPriority} onValueChange={setFilterPriority}>
              <SelectTrigger className="w-32">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value={activeTab} className="space-y-6">
          <div className="grid gap-6">
            {filteredCases.map((case_item) => (
              <Card key={case_item.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-xl">{case_item.title}</CardTitle>
                        <Badge className={getPriorityColor(case_item.priority)}>
                          {case_item.priority}
                        </Badge>
                        <Badge className={getStatusColor(case_item.status)}>
                          {case_item.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {case_item.id}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {case_item.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Due: {case_item.deadline}
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Progress:</span>
                        <span className="font-medium">{case_item.progress}%</span>
                      </div>
                      <Progress value={case_item.progress} className="w-24" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{case_item.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">${case_item.budget.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Budget</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{case_item.billedHours}/{case_item.estimatedHours}h</p>
                        <p className="text-xs text-muted-foreground">Hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{case_item.documents}</p>
                        <p className="text-xs text-muted-foreground">Documents</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{case_item.assignedStaff.length}</p>
                        <p className="text-xs text-muted-foreground">Staff</p>
                      </div>
                    </div>
                  </div>

                  {/* Assigned Staff */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Assigned Staff:</p>
                    <div className="flex items-center gap-2">
                      {case_item.assignedStaff.map((staff) => (
                        <div key={staff.id} className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                          <Avatar className="w-6 h-6">
                            <AvatarFallback className="text-xs">
                              {staff.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-xs font-medium">{staff.name}</p>
                            <p className="text-xs text-muted-foreground">{staff.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Tasks */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Recent Tasks:</p>
                    <div className="space-y-2">
                      {case_item.tasks.slice(0, 2).map((task) => (
                        <div key={task.id} className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center gap-2">
                            {getTaskStatusIcon(task.status)}
                            <span className="text-sm">{task.title}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {task.assignee} • Due {task.dueDate}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      Last activity: {case_item.lastActivity} • Next: {case_item.nextDeadline}
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedCase(case_item)}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              {selectedCase?.title}
                              <Badge className={getPriorityColor(selectedCase?.priority || '')}>
                                {selectedCase?.priority}
                              </Badge>
                            </DialogTitle>
                            <DialogDescription>
                              Case ID: {selectedCase?.id} • Client: {selectedCase?.client}
                            </DialogDescription>
                          </DialogHeader>
                          {selectedCase && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="font-medium">Case Type</p>
                                  <p className="text-muted-foreground">{selectedCase.type}</p>
                                </div>
                                <div>
                                  <p className="font-medium">Status</p>
                                  <Badge className={getStatusColor(selectedCase.status)}>
                                    {selectedCase.status}
                                  </Badge>
                                </div>
                                <div>
                                  <p className="font-medium">Start Date</p>
                                  <p className="text-muted-foreground">{selectedCase.startDate}</p>
                                </div>
                                <div>
                                  <p className="font-medium">Deadline</p>
                                  <p className="text-muted-foreground">{selectedCase.deadline}</p>
                                </div>
                              </div>

                              <div>
                                <p className="font-medium mb-2">Description</p>
                                <p className="text-muted-foreground">{selectedCase.description}</p>
                              </div>

                              <div>
                                <p className="font-medium mb-2">All Tasks</p>
                                <div className="space-y-2">
                                  {selectedCase.tasks.map((task: any) => (
                                    <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
                                      <div className="flex items-center gap-3">
                                        {getTaskStatusIcon(task.status)}
                                        <div>
                                          <p className="font-medium">{task.title}</p>
                                          <p className="text-sm text-muted-foreground">
                                            Assigned to {task.assignee}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="text-right">
                                        <p className="text-sm font-medium">{task.status}</p>
                                        <p className="text-xs text-muted-foreground">Due: {task.dueDate}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Chat
                      </Button>
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

export default CaseManagement;