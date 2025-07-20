import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  UserPlus, 
  Calendar, 
  FileText, 
  Award, 
  Clock,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Search,
  Filter,
  Plus,
  Edit,
  Eye,
  MessageSquare
} from "lucide-react";

const HRManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    {
      id: "1",
      name: "Sarah Johnson",
      position: "Managing Partner",
      department: "Executive",
      email: "sarah.johnson@lawfirm.com",
      phone: "(555) 123-4567",
      startDate: "2019-03-15",
      status: "active",
      location: "New York Office",
      salary: "$250,000",
      performanceScore: 95,
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "2",
      name: "Michael Thompson",
      position: "Senior Associate",
      department: "Corporate Law",
      email: "michael.thompson@lawfirm.com",
      phone: "(555) 234-5678",
      startDate: "2021-06-01",
      status: "active",
      location: "New York Office",
      salary: "$180,000",
      performanceScore: 88,
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "3",
      name: "Emily Davis",
      position: "Associate",
      department: "Family Law",
      email: "emily.davis@lawfirm.com",
      phone: "(555) 345-6789",
      startDate: "2022-09-15",
      status: "active",
      location: "Boston Office",
      salary: "$120,000",
      performanceScore: 92,
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "4",
      name: "Robert Chen",
      position: "Paralegal",
      department: "Litigation",
      email: "robert.chen@lawfirm.com",
      phone: "(555) 456-7890",
      startDate: "2023-01-10",
      status: "active",
      location: "New York Office",
      salary: "$65,000",
      performanceScore: 85,
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "5",
      name: "Lisa Martinez",
      position: "Legal Secretary",
      department: "Administration",
      email: "lisa.martinez@lawfirm.com",
      phone: "(555) 567-8901",
      startDate: "2020-11-20",
      status: "on_leave",
      location: "New York Office",
      salary: "$55,000",
      performanceScore: 78,
      avatar: "/api/placeholder/40/40"
    }
  ];

  const leaveRequests = [
    {
      id: "1",
      employee: "Emily Davis",
      type: "Vacation",
      startDate: "2024-02-15",
      endDate: "2024-02-22",
      days: 8,
      status: "pending",
      reason: "Family vacation"
    },
    {
      id: "2",
      employee: "Robert Chen",
      type: "Sick Leave",
      startDate: "2024-01-20",
      endDate: "2024-01-22",
      days: 3,
      status: "approved",
      reason: "Medical appointment"
    },
    {
      id: "3",
      employee: "Michael Thompson",
      type: "Personal",
      startDate: "2024-02-10",
      endDate: "2024-02-10",
      days: 1,
      status: "approved",
      reason: "Personal matters"
    }
  ];

  const hrStats = {
    totalEmployees: 24,
    activeEmployees: 23,
    onLeave: 1,
    newHires: 3,
    averagePerformance: 87.5,
    pendingReviews: 5
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'on_leave': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'terminated': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLeaveStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">HR Management</h1>
          <p className="text-muted-foreground">Manage employees, performance, and HR operations</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* HR Stats */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-xs text-muted-foreground">Total Staff</p>
                <p className="text-lg font-bold">{hrStats.totalEmployees}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserPlus className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-xs text-muted-foreground">Active</p>
                <p className="text-lg font-bold">{hrStats.activeEmployees}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-xs text-muted-foreground">On Leave</p>
                <p className="text-lg font-bold">{hrStats.onLeave}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-xs text-muted-foreground">New Hires</p>
                <p className="text-lg font-bold">{hrStats.newHires}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-xs text-muted-foreground">Avg Performance</p>
                <p className="text-lg font-bold">{hrStats.averagePerformance}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-xs text-muted-foreground">Pending Reviews</p>
                <p className="text-lg font-bold">{hrStats.pendingReviews}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="employees" className="space-y-6">
        <TabsList>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="leave">Leave Management</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="space-y-6">
          {/* Search */}
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Employee Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEmployees.map((employee) => (
              <Card key={employee.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={employee.avatar} />
                        <AvatarFallback>
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{employee.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{employee.position}</p>
                        <p className="text-xs text-muted-foreground">{employee.department}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(employee.status)} variant="outline">
                      {employee.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{employee.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{employee.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{employee.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Start Date</p>
                      <p className="font-medium">{employee.startDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Salary</p>
                      <p className="font-medium">{employee.salary}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Performance Score</span>
                      <span className={`text-sm font-medium ${getPerformanceColor(employee.performanceScore)}`}>
                        {employee.performanceScore}%
                      </span>
                    </div>
                    <Progress value={employee.performanceScore} className="h-2" />
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leave" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Leave Requests</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {leaveRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium">{request.employee}</h4>
                      <Badge className={getLeaveStatusColor(request.status)} variant="outline">
                        {request.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{request.type}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{request.startDate} - {request.endDate}</span>
                      <span>{request.days} days</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{request.reason}</p>
                  </div>
                  <div className="flex space-x-2">
                    {request.status === 'pending' && (
                      <>
                        <Button size="sm" variant="outline">Approve</Button>
                        <Button size="sm" variant="outline">Reject</Button>
                      </>
                    )}
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">Performance reviews and evaluations</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll">
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <Briefcase className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">Payroll management and processing</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HRManagement;