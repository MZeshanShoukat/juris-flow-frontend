import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, Upload, Folder, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const DocumentAccess = () => {
  const documents = [
    {
      id: "DOC001",
      name: "Service Agreement.pdf",
      caseId: "C001",
      lawyer: "Attorney Sarah Johnson",
      type: "Contract",
      size: "245 KB",
      uploadDate: "2024-01-15",
      status: "Final"
    },
    {
      id: "DOC002",
      name: "Property_Title_Search.pdf", 
      caseId: "C002",
      lawyer: "Attorney Michael Chen",
      type: "Legal Document",
      size: "1.2 MB",
      uploadDate: "2024-01-12",
      status: "Under Review"
    },
    {
      id: "DOC003",
      name: "Employment_Contract_Draft.docx",
      caseId: "C003",
      lawyer: "Attorney Emily Rodriguez",
      type: "Draft",
      size: "98 KB", 
      uploadDate: "2024-01-10",
      status: "Final"
    }
  ];

  const getFileIcon = (name: string) => {
    const extension = name.split('.').pop()?.toLowerCase();
    return <FileText className="h-5 w-5 text-blue-600" />;
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "final": return "bg-green-100 text-green-800";
      case "under review": return "bg-yellow-100 text-yellow-800";
      case "draft": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Documents</h1>
          <p className="text-muted-foreground">Access and manage your legal documents</p>
        </div>
        <Button className="bg-gradient-primary">
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documents..." className="pl-10" />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Folder className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">{documents.length}</div>
                <div className="text-sm text-muted-foreground">Total Documents</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm text-muted-foreground">Final Documents</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-muted-foreground">Under Review</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Download className="h-8 w-8 text-primary mr-3" />
              <div>
                <div className="text-2xl font-bold">1.5MB</div>
                <div className="text-sm text-muted-foreground">Total Size</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Documents</CardTitle>
          <CardDescription>Access all documents shared by your legal team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    {getFileIcon(doc.name)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{doc.name}</h3>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <span>Case {doc.caseId}</span>
                      <span>•</span>
                      <span>{doc.lawyer}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{doc.uploadDate}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">{doc.type}</Badge>
                      <Badge className={`text-xs ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentAccess;