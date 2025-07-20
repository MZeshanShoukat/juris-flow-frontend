import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Users, 
  Building2, 
  Search, 
  Filter, 
  MoreHorizontal,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Calendar,
  Eye,
  Edit,
  Ban,
  CheckCircle
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("clients");

  // Mock data for clients
  const clients = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 234 567 8900",
      joinDate: "2024-01-15",
      status: "active",
      totalCases: 5,
      totalSpent: "$2,450",
      lastActive: "2 hours ago"
    },
    {
      id: "2",
      name: "Sarah Wilson",
      email: "sarah.wilson@company.com",
      phone: "+1 234 567 8901",
      joinDate: "2024-02-08",
      status: "inactive",
      totalCases: 2,
      totalSpent: "$980",
      lastActive: "3 days ago"
    },
    {
      id: "3",
      name: "Michael Chen",
      email: "m.chen@business.com",
      phone: "+1 234 567 8902",
      joinDate: "2024-01-22",
      status: "active",
      totalCases: 8,
      totalSpent: "$5,200",
      lastActive: "1 hour ago"
    }
  ];

  // Mock data for lawyers/organizations
  const lawyers = [
    {
      id: "1",
      name: "Smith & Associates",
      type: "Law Firm",
      email: "contact@smithlaw.com",
      phone: "+1 555 123 4567",
      joinDate: "2023-11-12",
      status: "active",
      subscription: "Premium",
      totalClients: 45,
      totalRevenue: "$125,000",
      lastActive: "30 minutes ago"
    },
    {
      id: "2",
      name: "Legal Partners LLC",
      type: "Law Firm",
      email: "admin@legalpartners.com",
      phone: "+1 555 123 4568",
      joinDate: "2023-12-05",
      status: "pending",
      subscription: "Basic",
      totalClients: 12,
      totalRevenue: "$18,500",
      lastActive: "2 days ago"
    },
    {
      id: "3",
      name: "Jennifer Martinez",
      type: "Solo Practice",
      email: "j.martinez@lawoffice.com",
      phone: "+1 555 123 4569",
      joinDate: "2024-01-18",
      status: "active",
      subscription: "Premium",
      totalClients: 28,
      totalRevenue: "$67,800",
      lastActive: "1 hour ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription.toLowerCase()) {
      case 'premium':
        return 'bg-purple-100 text-purple-800';
      case 'basic':
        return 'bg-blue-100 text-blue-800';
      case 'enterprise':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage clients and legal organizations on the platform
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filter
          </Button>
          <Button size="sm">
            <Users className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Clients</p>
                <p className="text-2xl font-bold">2,847</p>
                <p className="text-xs text-green-600">+127 this month</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Legal Organizations</p>
                <p className="text-2xl font-bold">342</p>
                <p className="text-xs text-green-600">+23 this month</p>
              </div>
              <Building2 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold">2,654</p>
                <p className="text-xs text-muted-foreground">93% of total</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Verification</p>
                <p className="text-2xl font-bold">48</p>
                <p className="text-xs text-yellow-600">Requires attention</p>
              </div>
              <UserX className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search users by name, email, or organization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="lawyers">Legal Organizations</TabsTrigger>
        </TabsList>

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Client Users</CardTitle>
              <CardDescription>Individual clients using the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Cases</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell>
                        <div className="font-medium">{client.name}</div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="h-3 w-3 mr-1" />
                            {client.email}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Phone className="h-3 w-3 mr-1" />
                            {client.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {client.joinDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(client.status)}>
                          {client.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{client.totalCases}</TableCell>
                      <TableCell className="font-medium text-green-600">{client.totalSpent}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{client.lastActive}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Ban className="mr-2 h-4 w-4" />
                              Suspend User
                            </DropdownMenuItem>
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

        <TabsContent value="lawyers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Legal Organizations</CardTitle>
              <CardDescription>Law firms and solo practitioners on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Organization</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Subscription</TableHead>
                    <TableHead>Clients</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lawyers.map((lawyer) => (
                    <TableRow key={lawyer.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{lawyer.name}</div>
                          <div className="text-sm text-muted-foreground">{lawyer.type}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="h-3 w-3 mr-1" />
                            {lawyer.email}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Phone className="h-3 w-3 mr-1" />
                            {lawyer.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {lawyer.joinDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(lawyer.status)}>
                          {lawyer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getSubscriptionColor(lawyer.subscription)}>
                          {lawyer.subscription}
                        </Badge>
                      </TableCell>
                      <TableCell>{lawyer.totalClients}</TableCell>
                      <TableCell className="font-medium text-green-600">{lawyer.totalRevenue}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{lawyer.lastActive}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Verify Organization
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Ban className="mr-2 h-4 w-4" />
                              Suspend Account
                            </DropdownMenuItem>
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

export default UserManagement;