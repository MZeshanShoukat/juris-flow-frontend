import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  AlertTriangle, 
  MessageSquare, 
  User, 
  Building2,
  Search, 
  Filter, 
  MoreHorizontal,
  Calendar,
  Clock,
  Eye,
  Edit,
  CheckCircle,
  XCircle,
  FileText,
  Send,
  Flag,
  Users
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DisputeResolution = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("open");
  const [selectedDispute, setSelectedDispute] = useState(null);

  // Mock dispute data
  const disputes = [
    {
      id: "DSP-001",
      type: "Payment Dispute",
      client: "John Doe",
      clientEmail: "john.doe@email.com",
      organization: "Smith & Associates",
      organizationEmail: "contact@smithlaw.com",
      description: "Client claims they were charged for services not received. Requesting full refund of $1,200.",
      amount: "$1,200",
      priority: "High",
      status: "investigating",
      createdAt: "2024-01-20",
      lastUpdate: "2 hours ago",
      assignedTo: "Sarah Johnson",
      attachments: 3,
      messages: 8
    },
    {
      id: "DSP-002",
      type: "Service Complaint",
      client: "ABC Corporation",
      clientEmail: "legal@abccorp.com",
      organization: "Legal Partners LLC",
      organizationEmail: "admin@legalpartners.com",
      description: "Poor communication and delayed responses to urgent legal matters. Seeking compensation.",
      amount: "$0",
      priority: "Medium",
      status: "mediation",
      createdAt: "2024-01-18",
      lastUpdate: "1 day ago",
      assignedTo: "Michael Torres",
      attachments: 5,
      messages: 12
    },
    {
      id: "DSP-003",
      type: "Account Issue",
      client: "Maria Garcia",
      clientEmail: "maria.garcia@email.com",
      organization: "Corporate Law Group",
      organizationEmail: "support@corporatelaw.com",
      description: "Unauthorized changes made to account settings and billing information.",
      amount: "$0",
      priority: "Low",
      status: "resolved",
      createdAt: "2024-01-15",
      lastUpdate: "3 days ago",
      assignedTo: "Emily Chen",
      attachments: 2,
      messages: 6
    },
    {
      id: "DSP-004",
      type: "Data Privacy",
      client: "Tech Innovations Ltd",
      clientEmail: "privacy@techinnovations.com",
      organization: "Business Legal Solutions",
      organizationEmail: "info@bizlegal.com",
      description: "Concerns about data handling and privacy compliance during contract review process.",
      amount: "$0",
      priority: "High",
      status: "escalated",
      createdAt: "2024-01-22",
      lastUpdate: "4 hours ago",
      assignedTo: "Sarah Johnson",
      attachments: 7,
      messages: 15
    }
  ];

  // Mock staff for assignment
  const staff = [
    { id: "1", name: "Sarah Johnson", role: "Senior Mediator" },
    { id: "2", name: "Michael Torres", role: "Dispute Specialist" },
    { id: "3", name: "Emily Chen", role: "Legal Advisor" },
    { id: "4", name: "David Kim", role: "Customer Success Manager" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'investigating':
        return 'bg-blue-100 text-blue-800';
      case 'mediation':
        return 'bg-yellow-100 text-yellow-800';
      case 'escalated':
        return 'bg-red-100 text-red-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'payment dispute':
        return <AlertTriangle className="h-4 w-4" />;
      case 'service complaint':
        return <MessageSquare className="h-4 w-4" />;
      case 'account issue':
        return <User className="h-4 w-4" />;
      case 'data privacy':
        return <FileText className="h-4 w-4" />;
      default:
        return <Flag className="h-4 w-4" />;
    }
  };

  const filteredDisputes = disputes.filter(dispute => {
    if (activeTab === "all") return true;
    if (activeTab === "open") return ["investigating", "mediation", "escalated"].includes(dispute.status);
    return dispute.status === activeTab;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dispute Resolution</h1>
          <p className="text-muted-foreground mt-1">
            Manage and resolve disputes between clients and legal organizations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filter
          </Button>
          <Button size="sm">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Escalate Case
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Disputes</p>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-red-600">3 high priority</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Mediation</p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-yellow-600">Avg 5.2 days</p>
              </div>
              <Users className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Resolved This Month</p>
                <p className="text-2xl font-bold">47</p>
                <p className="text-xs text-green-600">+12 from last month</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Resolution Time</p>
                <p className="text-2xl font-bold">6.4 days</p>
                <p className="text-xs text-green-600">-1.2 days improved</p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search disputes by ID, client, organization, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="mediation">Mediation</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dispute Cases</CardTitle>
              <CardDescription>
                {activeTab === "all" ? "All dispute cases" : 
                 activeTab === "open" ? "Currently open dispute cases" :
                 activeTab === "mediation" ? "Cases in mediation process" :
                 "Resolved dispute cases"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dispute</TableHead>
                    <TableHead>Parties</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDisputes.map((dispute) => (
                    <TableRow key={dispute.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{dispute.id}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                            {dispute.description}
                          </div>
                          {dispute.amount !== "$0" && (
                            <div className="text-sm font-medium text-red-600">{dispute.amount}</div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <User className="h-3 w-3 mr-1" />
                            {dispute.client}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Building2 className="h-3 w-3 mr-1" />
                            {dispute.organization}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(dispute.type)}
                          <span className="text-sm">{dispute.type}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getPriorityColor(dispute.priority)}>
                          {dispute.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(dispute.status)}>
                          {dispute.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{dispute.assignedTo}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {dispute.lastUpdate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <Dialog>
                              <DialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>Dispute Details - {dispute.id}</DialogTitle>
                                  <DialogDescription>
                                    Complete information and communication history for this dispute
                                  </DialogDescription>
                                </DialogHeader>
                                
                                <div className="space-y-6">
                                  {/* Dispute Overview */}
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                      <Label className="text-sm font-medium">Type</Label>
                                      <p className="text-sm">{dispute.type}</p>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">Priority</Label>
                                      <Badge variant="outline" className={getPriorityColor(dispute.priority)}>
                                        {dispute.priority}
                                      </Badge>
                                    </div>
                                    <div>
                                      <Label className="text-sm font-medium">Status</Label>
                                      <Badge className={getStatusColor(dispute.status)}>
                                        {dispute.status}
                                      </Badge>
                                    </div>
                                  </div>

                                  {/* Parties Information */}
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card>
                                      <CardHeader className="pb-3">
                                        <CardTitle className="text-sm">Client</CardTitle>
                                      </CardHeader>
                                      <CardContent className="space-y-2">
                                        <p className="font-medium">{dispute.client}</p>
                                        <p className="text-sm text-muted-foreground">{dispute.clientEmail}</p>
                                      </CardContent>
                                    </Card>
                                    <Card>
                                      <CardHeader className="pb-3">
                                        <CardTitle className="text-sm">Organization</CardTitle>
                                      </CardHeader>
                                      <CardContent className="space-y-2">
                                        <p className="font-medium">{dispute.organization}</p>
                                        <p className="text-sm text-muted-foreground">{dispute.organizationEmail}</p>
                                      </CardContent>
                                    </Card>
                                  </div>

                                  {/* Description */}
                                  <div>
                                    <Label className="text-sm font-medium">Description</Label>
                                    <p className="text-sm mt-1 p-3 bg-muted rounded-md">{dispute.description}</p>
                                  </div>

                                  {/* Assignment and Actions */}
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <Label htmlFor="assignedTo">Assigned To</Label>
                                      <Select defaultValue={dispute.assignedTo}>
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          {staff.map(member => (
                                            <SelectItem key={member.id} value={member.name}>
                                              {member.name} - {member.role}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div>
                                      <Label htmlFor="status">Update Status</Label>
                                      <Select defaultValue={dispute.status}>
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="investigating">Investigating</SelectItem>
                                          <SelectItem value="mediation">Mediation</SelectItem>
                                          <SelectItem value="escalated">Escalated</SelectItem>
                                          <SelectItem value="resolved">Resolved</SelectItem>
                                          <SelectItem value="closed">Closed</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>

                                  {/* Add Note */}
                                  <div>
                                    <Label htmlFor="note">Add Note</Label>
                                    <Textarea 
                                      id="note"
                                      placeholder="Add internal note or resolution details..."
                                      rows={3}
                                    />
                                  </div>

                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline">
                                      <FileText className="h-4 w-4 mr-2" />
                                      View Attachments ({dispute.attachments})
                                    </Button>
                                    <Button>
                                      <Send className="h-4 w-4 mr-2" />
                                      Update Dispute
                                    </Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Assign Agent
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              View Messages ({dispute.messages})
                            </DropdownMenuItem>
                            {dispute.status === "investigating" && (
                              <DropdownMenuItem className="text-green-600">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Mark Resolved
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DisputeResolution;