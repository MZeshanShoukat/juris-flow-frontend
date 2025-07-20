import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  UserPlus, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Mail, 
  Phone,
  Plus,
  Search,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";

const ClientOnboarding = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onboardingClients = [
    {
      id: "1",
      name: "Jennifer Wilson",
      email: "jennifer.wilson@email.com",
      phone: "(555) 123-4567",
      caseType: "Personal Injury",
      status: "documents_pending",
      progress: 40,
      dateStarted: "2024-01-10",
      assignedLawyer: "Sarah Johnson",
      completedSteps: 2,
      totalSteps: 5,
      priority: "high",
      nextAction: "Review signed retainer agreement"
    },
    {
      id: "2",
      name: "Robert Chen",
      email: "robert.chen@email.com", 
      phone: "(555) 987-6543",
      caseType: "Corporate Law",
      status: "in_progress",
      progress: 75,
      dateStarted: "2024-01-08",
      assignedLawyer: "Michael Thompson",
      completedSteps: 3,
      totalSteps: 4,
      priority: "medium",
      nextAction: "Schedule initial consultation"
    },
    {
      id: "3",
      name: "Lisa Martinez",
      email: "lisa.martinez@email.com",
      phone: "(555) 456-7890",
      caseType: "Family Law",
      status: "completed",
      progress: 100,
      dateStarted: "2024-01-05",
      assignedLawyer: "Sarah Johnson",
      completedSteps: 5,
      totalSteps: 5,
      priority: "low",
      nextAction: "Move to active cases"
    },
    {
      id: "4",
      name: "David Kim",
      email: "david.kim@email.com",
      phone: "(555) 321-0987",
      caseType: "Real Estate",
      status: "waiting_response",
      progress: 20,
      dateStarted: "2024-01-12",
      assignedLawyer: "Emily Davis",
      completedSteps: 1,
      totalSteps: 5,
      priority: "medium",
      nextAction: "Follow up on document requests"
    }
  ];

  const onboardingSteps = [
    {
      id: 1,
      title: "Initial Contact & Consultation",
      description: "First meeting with client to understand their needs",
      estimatedTime: "1 hour"
    },
    {
      id: 2,
      title: "Document Collection",
      description: "Gather all necessary documents and information",
      estimatedTime: "2-3 days"
    },
    {
      id: 3,
      title: "Retainer Agreement",
      description: "Review and sign retainer agreement and fee structure",
      estimatedTime: "1 day"
    },
    {
      id: 4,
      title: "Case Setup",
      description: "Create case file and assign team members",
      estimatedTime: "1 day"
    },
    {
      id: 5,
      title: "Welcome Package",
      description: "Send welcome materials and schedule follow-up",
      estimatedTime: "1 day"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in_progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'documents_pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'waiting_response': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'on_hold': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'in_progress': return <Clock className="h-4 w-4" />;
      case 'documents_pending': return <FileText className="h-4 w-4" />;
      case 'waiting_response': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredClients = onboardingClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.caseType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Onboarding</h1>
          <p className="text-muted-foreground">Manage new client intake and onboarding process</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Client
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Onboarding</TabsTrigger>
          <TabsTrigger value="process">Onboarding Process</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {/* Search and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="md:col-span-2">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search clients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Active</p>
                    <p className="text-2xl font-bold">
                      {onboardingClients.filter(c => c.status !== 'completed').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">Completed</p>
                    <p className="text-2xl font-bold">
                      {onboardingClients.filter(c => c.status === 'completed').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredClients.map((client) => (
              <Card key={client.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{client.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{client.caseType}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(client.status)} variant="outline">
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(client.status)}
                        <span className="capitalize">{client.status.replace('_', ' ')}</span>
                      </div>
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{client.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{client.phone}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Started</p>
                      <p className="font-medium">{client.dateStarted}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Assigned Lawyer</p>
                      <p className="font-medium">{client.assignedLawyer}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Progress ({client.completedSteps}/{client.totalSteps} steps)
                      </span>
                      <span className="text-sm font-medium">{client.progress}%</span>
                    </div>
                    <Progress value={client.progress} className="h-2" />
                  </div>

                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-1">Next Action:</p>
                    <p className="text-sm text-muted-foreground">{client.nextAction}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <AlertTriangle className={`h-4 w-4 ${getPriorityColor(client.priority)}`} />
                      <span className={`text-sm capitalize ${getPriorityColor(client.priority)}`}>
                        {client.priority} Priority
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm">Update</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="process" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Standard Onboarding Process</CardTitle>
              <p className="text-muted-foreground">
                Our structured 5-step process ensures thorough client onboarding
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {onboardingSteps.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        {step.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      <Badge variant="secondary" className="mt-2">
                        <Clock className="h-3 w-3 mr-1" />
                        {step.estimatedTime}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <p className="text-lg font-medium mb-2">1 client completed onboarding</p>
                <p className="text-muted-foreground">View completed onboarding records</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientOnboarding;