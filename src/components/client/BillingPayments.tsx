import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download, Eye, AlertCircle, CheckCircle, Clock } from "lucide-react";

const BillingPayments = () => {
  const invoices = [
    {
      id: "INV-001",
      lawyer: "Attorney Sarah Johnson",
      caseId: "C001",
      amount: "$2,500.00",
      status: "Paid",
      dueDate: "2024-01-15",
      paidDate: "2024-01-14",
      description: "Contract Review Services"
    },
    {
      id: "INV-002", 
      lawyer: "Attorney Michael Chen",
      caseId: "C002",
      amount: "$1,800.00",
      status: "Pending",
      dueDate: "2024-01-25",
      paidDate: null,
      description: "Real Estate Legal Services"
    },
    {
      id: "INV-003",
      lawyer: "Attorney Emily Rodriguez",
      caseId: "C003", 
      amount: "$950.00",
      status: "Overdue",
      dueDate: "2024-01-10",
      paidDate: null,
      description: "Employment Contract Review"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid": return <CheckCircle className="h-4 w-4" />;
      case "pending": return <Clock className="h-4 w-4" />;
      case "overdue": return <AlertCircle className="h-4 w-4" />;
      default: return <CreditCard className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Billing & Payments</h1>
        <p className="text-muted-foreground">Manage your invoices and payment history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-primary mr-3" />
              <div>
                <div className="text-2xl font-bold">$5,250</div>
                <div className="text-sm text-muted-foreground">Total Paid</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">$1,800</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">$950</div>
                <div className="text-sm text-muted-foreground">Overdue</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
          <CardDescription>View and manage your billing history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold">{invoice.id}</h3>
                    <Badge className={getStatusColor(invoice.status)}>
                      <span className="mr-1">{getStatusIcon(invoice.status)}</span>
                      {invoice.status}
                    </Badge>
                    <Badge variant="outline">{invoice.caseId}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{invoice.description}</p>
                  <p className="text-sm text-muted-foreground">From: {invoice.lawyer}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <span>Amount: <span className="font-medium">{invoice.amount}</span></span>
                    <span>Due: {invoice.dueDate}</span>
                    {invoice.paidDate && <span>Paid: {invoice.paidDate}</span>}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  {invoice.status !== "Paid" && (
                    <Button size="sm" className="bg-gradient-primary">
                      Pay Now
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingPayments;