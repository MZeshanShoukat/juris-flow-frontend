import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  Upload, 
  Eye, 
  Share, 
  Lock, 
  Unlock,
  Search,
  Filter,
  Plus,
  Folder,
  File,
  Image,
  Archive
} from "lucide-react";

const DocumentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const folders = [
    {
      id: "1",
      name: "Client Contracts",
      documentCount: 24,
      lastModified: "2 hours ago",
      size: "12.5 MB"
    },
    {
      id: "2",
      name: "Court Filings",
      documentCount: 18,
      lastModified: "1 day ago",
      size: "8.2 MB"
    },
    {
      id: "3",
      name: "Legal Research",
      documentCount: 45,
      lastModified: "3 days ago",
      size: "156.8 MB"
    },
    {
      id: "4",
      name: "Client Communications",
      documentCount: 32,
      lastModified: "5 hours ago",
      size: "4.1 MB"
    }
  ];

  const documents = [
    {
      id: "1",
      name: "Smith_Contract_Final.pdf",
      type: "Contract",
      client: "John Smith",
      size: "2.4 MB",
      dateUploaded: "2024-01-15",
      lastModified: "2 hours ago",
      status: "active",
      confidential: true,
      version: "v3.0",
      tags: ["contract", "final", "signed"]
    },
    {
      id: "2",
      name: "Motion_to_Dismiss.docx",
      type: "Legal Filing",
      client: "Emily Johnson",
      size: "856 KB",
      dateUploaded: "2024-01-14",
      lastModified: "1 day ago",
      status: "draft",
      confidential: false,
      version: "v1.2",
      tags: ["motion", "court", "draft"]
    },
    {
      id: "3",
      name: "Case_Evidence_Photos.zip",
      type: "Evidence",
      client: "Michael Davis",
      size: "15.2 MB",
      dateUploaded: "2024-01-12",
      lastModified: "3 days ago",
      status: "active",
      confidential: true,
      version: "v1.0",
      tags: ["evidence", "photos", "personal-injury"]
    },
    {
      id: "4",
      name: "Client_Intake_Form.pdf",
      type: "Form",
      client: "Sarah Wilson",
      size: "1.1 MB",
      dateUploaded: "2024-01-13",
      lastModified: "2 days ago",
      status: "active",
      confidential: true,
      version: "v1.0",
      tags: ["intake", "form", "new-client"]
    },
    {
      id: "5",
      name: "Legal_Precedent_Research.docx",
      type: "Research",
      client: "N/A",
      size: "3.7 MB",
      dateUploaded: "2024-01-11",
      lastModified: "4 days ago",
      status: "active",
      confidential: false,
      version: "v2.1",
      tags: ["research", "precedent", "case-law"]
    }
  ];

  const getFileIcon = (name: string) => {
    const extension = name.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf': return <FileText className="h-5 w-5 text-red-500" />;
      case 'docx':
      case 'doc': return <FileText className="h-5 w-5 text-blue-500" />;
      case 'zip':
      case 'rar': return <Archive className="h-5 w-5 text-yellow-500" />;
      case 'jpg':
      case 'jpeg':
      case 'png': return <Image className="h-5 w-5 text-green-500" />;
      default: return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'draft': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'archived': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Document Management</h1>
          <p className="text-muted-foreground">Organize and manage legal documents securely</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Folder
          </Button>
          <Button size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Folders Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Folders</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search folders..."
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div
              className={`p-3 rounded-lg cursor-pointer hover:bg-muted transition-colors ${
                selectedFolder === null ? 'bg-muted' : ''
              }`}
              onClick={() => setSelectedFolder(null)}
            >
              <div className="flex items-center space-x-2">
                <Folder className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">All Documents</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {documents.length} files
              </p>
            </div>
            
            {folders.map((folder) => (
              <div
                key={folder.id}
                className={`p-3 rounded-lg cursor-pointer hover:bg-muted transition-colors ${
                  selectedFolder === folder.id ? 'bg-muted' : ''
                }`}
                onClick={() => setSelectedFolder(folder.id)}
              >
                <div className="flex items-center space-x-2">
                  <Folder className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{folder.name}</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  <p>{folder.documentCount} files • {folder.size}</p>
                  <p>Modified {folder.lastModified}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Documents Area */}
        <div className="lg:col-span-3 space-y-6">
          <Tabs defaultValue="list">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>

            <TabsContent value="list" className="space-y-4">
              {filteredDocuments.map((document) => (
                <Card key={document.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {getFileIcon(document.name)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-sm font-medium text-foreground truncate">
                            {document.name}
                          </h3>
                          {document.confidential && (
                            <Lock className="h-3 w-3 text-red-500" />
                          )}
                          <Badge className={getStatusColor(document.status)} variant="outline">
                            {document.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{document.type}</span>
                          <span>{document.client}</span>
                          <span>{document.size}</span>
                          <span>v{document.version}</span>
                          <span>Modified {document.lastModified}</span>
                        </div>
                        
                        <div className="flex items-center space-x-1 mt-2">
                          {document.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredDocuments.map((document) => (
                  <Card key={document.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          {getFileIcon(document.name)}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium truncate">{document.name}</h3>
                            <p className="text-xs text-muted-foreground">{document.type}</p>
                          </div>
                        </div>
                        {document.confidential && (
                          <Lock className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Client:</span>
                          <span>{document.client}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span>{document.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Version:</span>
                          <span>v{document.version}</span>
                        </div>
                      </div>
                      
                      <Badge className={getStatusColor(document.status)} variant="outline">
                        {document.status}
                      </Badge>
                      
                      <div className="flex space-x-1 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Share className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DocumentManagement;