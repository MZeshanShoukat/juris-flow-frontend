import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  UserCog, 
  Users2, 
  Calendar, 
  Clock,
  Search, 
  Filter, 
  Plus,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Building2,
  Edit,
  Eye,
  UserX
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const HRManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("staff");

  // Mock data for platform staff
  const staff = [
    {
      id: "1",
      name: "Alex Rodriguez",
      email: "alex.rodriguez@platform.com",
      phone: "+1 555 001 0001",
      position: "Senior Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      hireDate: "2023-03-15",
      status: "active",
      salary: "$125,000",
      lastLogin: "2 hours ago"
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.johnson@platform.com",
      phone: "+1 555 001 0002",
      position: "Product Manager",
      department: "Product",
      location: "New York, NY",
      hireDate: "2023-01-20",
      status: "active",
      salary: "$135,000",
      lastLogin: "1 hour ago"
    },
    {
      id: "3",
      name: "David Kim",
      email: "david.kim@platform.com",
      phone: "+1 555 001 0003",
      position: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX",
      hireDate: "2023-06-10",
      status: "on_leave",
      salary: "$95,000",
      lastLogin: "5 days ago"
    },
    {
      id: "4",
      name: "Emily Chen",
      email: "emily.chen@platform.com",
      phone: "+1 555 001 0004",
      position: "Legal Counsel",
      department: "Legal",
      location: "Remote",
      hireDate: "2023-08-01",
      status: "active",
      salary: "$145,000",
      lastLogin: "30 minutes ago"
    }
  ];

  // Mock data for departments
  const departments = [
    {
      id: "1",
      name: "Engineering",
      head: "Michael Torres",
      staffCount: 12,
      budget: "$1,890,000",
      openPositions: 3,
      avgSalary: "$128,000"
    },
    {
      id: "2",
      name: "Product",
      head: "Sarah Johnson",
      staffCount: 6,
      budget: "$945,000",
      openPositions: 2,
      avgSalary: "$125,000"
    },
    {
      id: "3",
      name: "Customer Success",
      head: "Jennifer Martinez",
      staffCount: 8,
      budget: "$720,000",
      openPositions: 1,
      avgSalary: "$95,000"
    },
    {
      id: "4",
      name: "Legal",
      head: "Emily Chen",
      staffCount: 3,
      budget: "$435,000",
      openPositions: 0,
      avgSalary: "$145,000"
    },
    {
      id: "5",
      name: "Marketing",
      head: "Robert Wilson",
      staffCount: 5,
      budget: "$525,000",
      openPositions: 2,
      avgSalary: "$105,000"
    }
  ];

  // Mock data for recent activities
  const recentActivities = [
    {
      id: "1",
      type: "hire",
      description: "New hire: Emily Chen joined as Legal Counsel",
      timestamp: "2 hours ago",
      department: "Legal"
    },
    {
      id: "2",
      type: "promotion",
      description: "Alex Rodriguez promoted to Senior Developer",
      timestamp: "1 day ago",
      department: "Engineering"
    },
    {
      id: "3",
      type: "leave",
      description: "David Kim started medical leave",
      timestamp: "5 days ago",
      department: "Customer Success"
    },
    {
      id: "4",
      type: "performance",
      description: "Q4 performance reviews completed",
      timestamp: "1 week ago",
      department: "All Departments"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'on_leave':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'hire':
        return <UserCog className="h-4 w-4 text-green-600" />;
      case 'promotion':
        return <Users2 className="h-4 w-4 text-blue-600" />;
      case 'leave':
        return <Calendar className="h-4 w-4 text-yellow-600" />;
      case 'performance':
        return <Clock className="h-4 w-4 text-purple-600" />;
      default:
        return <UserCog className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">HR & Team Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage platform staff, departments, and human resources
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Staff Member
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Staff</p>
                <p className="text-2xl font-bold">34</p>
                <p className="text-xs text-green-600">+2 this month</p>
              </div>
              <Users2 className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Departments</p>
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs text-muted-foreground">Active teams</p>
              </div>
              <Building2 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Positions</p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-yellow-600">Actively hiring</p>
              </div>
              <UserCog className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Salary</p>
                <p className="text-2xl font-bold">$119K</p>
                <p className="text-xs text-green-600">+5% this year</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search staff members, departments, or positions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="staff">Staff Members</TabsTrigger>
              <TabsTrigger value="departments">Departments</TabsTrigger>
            </TabsList>

            <TabsContent value="staff" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Staff</CardTitle>
                  <CardDescription>All platform employees and team members</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Hire Date</TableHead>
                        <TableHead>Salary</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {staff.map((member) => (
                        <TableRow key={member.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{member.name}</div>
                              <div className="space-y-1 mt-1">
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Mail className="h-3 w-3 mr-1" />
                                  {member.email}
                                </div>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {member.location}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{member.position}</div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{member.department}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(member.status)}>
                              {member.status.replace('_', ' ')}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm">{member.hireDate}</TableCell>
                          <TableCell className="font-medium">{member.salary}</TableCell>
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
                                  View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" />
                                  Send Message
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <UserX className="mr-2 h-4 w-4" />
                                  Deactivate
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

            <TabsContent value="departments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Department Overview</CardTitle>
                  <CardDescription>Organizational structure and team information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {departments.map((dept) => (
                      <div key={dept.id} className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{dept.name}</h3>
                            <p className="text-sm text-muted-foreground">Head: {dept.head}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Staff Count</p>
                            <p className="text-xl font-bold">{dept.staffCount}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Annual Budget</p>
                            <p className="text-xl font-bold text-green-600">{dept.budget}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Open Positions</p>
                            <p className="text-xl font-bold text-orange-600">{dept.openPositions}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Avg Salary</p>
                            <p className="text-xl font-bold">{dept.avgSalary}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Recent Activities Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent HR Activities</CardTitle>
              <CardDescription>Latest updates and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.description}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-muted-foreground">{activity.department}</p>
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                Add New Employee
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Interview
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Building2 className="mr-2 h-4 w-4" />
                Create Department
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HRManagement;