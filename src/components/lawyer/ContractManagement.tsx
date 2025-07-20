import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  Edit, 
  Eye, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Search,
  Filter
} from "lucide-react";

const ContractManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contracts = [
    {
      id: "1",
      title: "Software License Agreement",
      client: "TechCorp Inc.",
      type: "License Agreement",
      status: "draft",
      progress: 75,
      dateCreated: "2024-01-10",
      dueDate: "2024-01-20",
      value: "$50,000",
      priority: "high",
      lastModified: "2 hours ago"
    },
    {
      id: "2",
      title: "Employment Contract - John Doe",
      client: "ABC Corporation",
      type: "Employment Contract",
      status: "review",
      progress: 90,
      dateCreated: "2024-01-08",
      dueDate: "2024-01-18",
      value: "$85,000/year",
      priority: "medium",
      lastModified: "1 day ago"
    },
    {
      id: "3",
      title: "Partnership Agreement",
      client: "Smith & Associates",
      type: "Partnership Agreement",
      status: "signed",
      progress: 100,
      dateCreated: "2024-01-05",
      dueDate: "2024-01-15",
      value: "$200,000",
      priority: "high",
      lastModified: "3 days ago"
    },
    {
      id: "4",
      title: "Non-Disclosure Agreement",
      client: "StartupXYZ",
      type: "NDA",
      status: "pending_signature",
      progress: 95,
      dateCreated: "2024-01-12",
      dueDate: "2024-01-22",
      value: "N/A",
      priority: "low",
      lastModified: "5 hours ago"
    }
  ];

  const templates = [
    {
      id: "1",
      name: "Standard NDA",
      category: "Confidentiality",
      usageCount: 45,
      lastUsed: "2 days ago"
    },
    {
      id: "2", 
      name: "Employment Contract Template",
      category: "Employment",
      usageCount: 32,
      lastUsed: "1 week ago"
    },
    {
      id: "3",
      name: "Service Agreement Template",
      category: "Service",
      usageCount: 28,
      lastUsed: "3 days ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'review': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'pending_signature': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'signed': return 'bg-green-100 text-green-800 border-green-200';
      case 'expired': return 'bg-red-100 text-red-800 border-red-200';
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
      case 'draft': return <Edit className="h-4 w-4" />;
      case 'review': return <Eye className="h-4 w-4" />;
      case 'pending_signature': return <Send className="h-4 w-4" />;
      case 'signed': return <CheckCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const filteredContracts = contracts.filter(contract =>
    contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contract Management</h1>
          <p className="text-muted-foreground">Create, review, and manage legal contracts</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Contract
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Contracts</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {/* Search and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="md:col-span-2">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search contracts..."
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
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Total Contracts</p>
                    <p className="text-2xl font-bold">{contracts.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-sm font-medium">Pending Review</p>
                    <p className="text-2xl font-bold">
                      {contracts.filter(c => c.status === 'review' || c.status === 'draft').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contracts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredContracts.map((contract) => (
              <Card key={contract.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{contract.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{contract.client}</p>
                    </div>
                    <Badge className={getStatusColor(contract.status)} variant="outline">
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(contract.status)}
                        <span className="capitalize">{contract.status.replace('_', ' ')}</span>
                      </div>
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Type</p>
                      <p className="font-medium">{contract.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Value</p>
                      <p className="font-medium">{contract.value}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Created</p>
                      <p className="font-medium">{contract.dateCreated}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Due Date</p>
                      <p className="font-medium">{contract.dueDate}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{contract.progress}%</span>
                    </div>
                    <Progress value={contract.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <AlertCircle className={`h-4 w-4 ${getPriorityColor(contract.priority)}`} />
                      <span className={`text-sm capitalize ${getPriorityColor(contract.priority)}`}>
                        {contract.priority} Priority
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Modified {contract.lastModified}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>{template.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium">{template.category}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Used</p>
                        <p className="font-medium">{template.usageCount}x</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Last Used</p>
                        <p className="font-medium">{template.lastUsed}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1">Use Template</Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="archived">
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">No archived contracts found</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContractManagement;