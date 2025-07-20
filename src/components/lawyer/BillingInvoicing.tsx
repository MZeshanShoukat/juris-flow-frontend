import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  Clock, 
  FileText, 
  Send, 
  Download, 
  Eye,
  Plus,
  Search,
  Filter,
  Calendar,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Timer
} from "lucide-react";

const BillingInvoicing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const invoices = [
    {
      id: "INV-2024-001",
      client: "John Smith",
      amount: 4500.00,
      status: "paid",
      dateIssued: "2024-01-10",
      dateDue: "2024-01-25",
      datePaid: "2024-01-22",
      hoursLogged: 15.5,
      hourlyRate: 290,
      description: "Contract review and legal consultation"
    },
    {
      id: "INV-2024-002",
      client: "Emily Johnson",
      amount: 2800.00,
      status: "pending",
      dateIssued: "2024-01-12",
      dateDue: "2024-01-27",
      datePaid: null,
      hoursLogged: 12.0,
      hourlyRate: 225,
      description: "Family law consultation and documentation"
    },
    {
      id: "INV-2024-003",
      client: "TechCorp Inc.",
      amount: 8750.00,
      status: "overdue",
      dateIssued: "2024-01-05",
      dateDue: "2024-01-20",
      datePaid: null,
      hoursLogged: 25.0,
      hourlyRate: 350,
      description: "Corporate restructuring legal services"
    },
    {
      id: "INV-2024-004",
      client: "Michael Davis",
      amount: 1950.00,
      status: "draft",
      dateIssued: "2024-01-15",
      dateDue: "2024-01-30",
      datePaid: null,
      hoursLogged: 8.5,
      hourlyRate: 225,
      description: "Personal injury case consultation"
    }
  ];

  const timeEntries = [
    {
      id: "1",
      date: "2024-01-15",
      client: "John Smith",
      task: "Contract review - merger terms analysis",
      hours: 3.5,
      rate: 290,
      amount: 1015.00,
      billable: true,
      status: "approved"
    },
    {
      id: "2",
      date: "2024-01-15", 
      client: "Emily Johnson",
      task: "Client consultation - custody arrangements",
      hours: 2.0,
      rate: 225,
      amount: 450.00,
      billable: true,
      status: "pending"
    },
    {
      id: "3",
      date: "2024-01-14",
      client: "TechCorp Inc.",
      task: "Legal research - corporate compliance",
      hours: 4.25,
      rate: 350,
      amount: 1487.50,
      billable: true,
      status: "approved"
    },
    {
      id: "4",
      date: "2024-01-14",
      client: "Internal",
      task: "Administrative tasks",
      hours: 1.5,
      rate: 0,
      amount: 0,
      billable: false,
      status: "logged"
    }
  ];

  const paymentStats = {
    totalRevenue: 45750.00,
    pendingPayments: 12500.00,
    overdueAmount: 8750.00,
    thisMonthBilled: 18500.00,
    averageInvoiceValue: 4562.50,
    collectionRate: 94.2
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-200';
      case 'draft': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTimeStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'logged': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'overdue': return <AlertCircle className="h-4 w-4" />;
      case 'draft': return <FileText className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const filteredInvoices = invoices.filter(invoice =>
    invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Billing & Invoicing</h1>
          <p className="text-muted-foreground">Manage billing, time tracking, and payments</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Timer className="h-4 w-4 mr-2" />
            Log Time
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </Button>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-xs text-muted-foreground">Total Revenue</p>
                <p className="text-lg font-bold">${paymentStats.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-xs text-muted-foreground">Pending</p>
                <p className="text-lg font-bold">${paymentStats.pendingPayments.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-xs text-muted-foreground">Overdue</p>
                <p className="text-lg font-bold">${paymentStats.overdueAmount.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-xs text-muted-foreground">This Month</p>
                <p className="text-lg font-bold">${paymentStats.thisMonthBilled.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-xs text-muted-foreground">Avg Invoice</p>
                <p className="text-lg font-bold">${paymentStats.averageInvoiceValue.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-xs text-muted-foreground">Collection Rate</p>
                <p className="text-lg font-bold">{paymentStats.collectionRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-6">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="time-tracking">Time Tracking</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search invoices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Invoices List */}
          <div className="space-y-4">
            {filteredInvoices.map((invoice) => (
              <Card key={invoice.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>
                          {invoice.client.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">{invoice.id}</h3>
                        <p className="text-sm text-muted-foreground">{invoice.client}</p>
                        <p className="text-xs text-muted-foreground mt-1">{invoice.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">
                        ${invoice.amount.toLocaleString()}
                      </p>
                      <Badge className={getStatusColor(invoice.status)} variant="outline">
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(invoice.status)}
                          <span className="capitalize">{invoice.status}</span>
                        </div>
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Hours</p>
                      <p className="font-medium">{invoice.hoursLogged}h</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Rate</p>
                      <p className="font-medium">${invoice.hourlyRate}/hr</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Issued</p>
                      <p className="font-medium">{invoice.dateIssued}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Due Date</p>
                      <p className="font-medium">{invoice.dateDue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-4">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    {invoice.status === 'draft' && (
                      <Button size="sm">
                        <Send className="h-4 w-4 mr-1" />
                        Send
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="time-tracking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Timer className="h-5 w-5" />
                <span>Recent Time Entries</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {timeEntries.map((entry) => (
                <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium">{entry.task}</h4>
                      <Badge className={getTimeStatusColor(entry.status)} variant="outline">
                        {entry.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{entry.client} • {entry.date}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <span>{entry.hours}h</span>
                      {entry.billable && (
                        <>
                          <span>${entry.rate}/hr</span>
                          <span className="font-medium">${entry.amount.toLocaleString()}</span>
                        </>
                      )}
                      {!entry.billable && (
                        <span className="text-muted-foreground">Non-billable</span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Edit</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <CreditCard className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">Payment history and records</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillingInvoicing;