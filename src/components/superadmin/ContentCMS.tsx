import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Globe, 
  FileText, 
  Image, 
  Video,
  Search, 
  Filter, 
  Plus,
  MoreHorizontal,
  Calendar,
  Eye,
  Edit,
  Trash2,
  Upload,
  Link,
  Settings,
  Users,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const ContentCMS = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("pages");

  // Mock content data
  const pages = [
    {
      id: "1",
      title: "Home Page",
      slug: "/",
      type: "Landing Page",
      status: "published",
      author: "Sarah Johnson",
      lastModified: "2024-01-20",
      views: "12,450",
      published: true
    },
    {
      id: "2",
      title: "About Us",
      slug: "/about",
      type: "Static Page",
      status: "published",
      author: "Michael Torres",
      lastModified: "2024-01-18",
      views: "3,280",
      published: true
    },
    {
      id: "3",
      title: "Pricing Plans",
      slug: "/pricing",
      type: "Product Page",
      status: "draft",
      author: "Emily Chen",
      lastModified: "2024-01-22",
      views: "0",
      published: false
    },
    {
      id: "4",
      title: "Legal Resources",
      slug: "/resources",
      type: "Resource Page",
      status: "published",
      author: "David Kim",
      lastModified: "2024-01-19",
      views: "8,920",
      published: true
    }
  ];

  const blogPosts = [
    {
      id: "1",
      title: "Understanding Legal Tech Trends in 2024",
      author: "Sarah Johnson",
      category: "Industry News",
      status: "published",
      publishDate: "2024-01-20",
      views: "2,340",
      comments: 15,
      featured: true
    },
    {
      id: "2",
      title: "How to Choose the Right Legal Software",
      author: "Michael Torres",
      category: "Guides",
      status: "published",
      publishDate: "2024-01-18",
      views: "1,890",
      comments: 8,
      featured: false
    },
    {
      id: "3",
      title: "Digital Transformation in Law Firms",
      author: "Emily Chen",
      category: "Technology",
      status: "draft",
      publishDate: null,
      views: "0",
      comments: 0,
      featured: false
    }
  ];

  const media = [
    {
      id: "1",
      name: "hero-legal-platform.jpg",
      type: "image",
      size: "2.4 MB",
      dimensions: "1920x1080",
      uploadDate: "2024-01-20",
      usedIn: 3,
      url: "/images/hero-legal-platform.jpg"
    },
    {
      id: "2",
      name: "lawyer-consultation.mp4",
      type: "video",
      size: "45.2 MB",
      dimensions: "1280x720",
      uploadDate: "2024-01-18",
      usedIn: 1,
      url: "/videos/lawyer-consultation.mp4"
    },
    {
      id: "3",
      name: "company-logo.svg",
      type: "image",
      size: "12 KB",
      dimensions: "200x200",
      uploadDate: "2024-01-15",
      usedIn: 8,
      url: "/images/company-logo.svg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getFileTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'image':
        return <Image className="h-4 w-4" />;
      case 'video':
        return <Video className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content & CMS</h1>
          <p className="text-muted-foreground mt-1">
            Manage website content, pages, blog posts, and media assets
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            CMS Settings
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Content
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Pages</p>
                <p className="text-2xl font-bold">28</p>
                <p className="text-xs text-green-600">+3 this month</p>
              </div>
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Blog Posts</p>
                <p className="text-2xl font-bold">145</p>
                <p className="text-xs text-green-600">+8 this month</p>
              </div>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Media Files</p>
                <p className="text-2xl font-bold">234</p>
                <p className="text-xs text-blue-600">892 MB total</p>
              </div>
              <Image className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Views</p>
                <p className="text-2xl font-bold">24.8K</p>
                <p className="text-xs text-green-600">+15% from last month</p>
              </div>
              <Eye className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search content by title, author, or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-lg grid-cols-4">
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Website Pages</CardTitle>
                <CardDescription>Manage static pages and landing pages</CardDescription>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Page
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Page</DialogTitle>
                    <DialogDescription>
                      Add a new page to your website
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Page Title</Label>
                        <Input id="title" placeholder="Enter page title" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="slug">URL Slug</Label>
                        <Input id="slug" placeholder="/page-url" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Page Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select page type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="landing">Landing Page</SelectItem>
                          <SelectItem value="static">Static Page</SelectItem>
                          <SelectItem value="product">Product Page</SelectItem>
                          <SelectItem value="resource">Resource Page</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Meta Description</Label>
                      <Textarea id="description" placeholder="SEO meta description" rows={3} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="published" />
                      <Label htmlFor="published">Publish immediately</Label>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Create Page</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>URL</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pages.map((page) => (
                    <TableRow key={page.id}>
                      <TableCell className="font-medium">{page.title}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Link className="h-3 w-3" />
                          <span className="text-sm">{page.slug}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{page.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(page.status)}>
                          {page.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{page.author}</TableCell>
                      <TableCell className="text-sm">{page.views}</TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {page.lastModified}
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
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Preview
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link className="mr-2 h-4 w-4" />
                              Copy URL
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
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

        <TabsContent value="blog" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Blog Posts</CardTitle>
                <CardDescription>Manage blog content and articles</CardDescription>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Blog Post
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Publish Date</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Comments</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{post.title}</span>
                          {post.featured && (
                            <Badge variant="outline" className="text-yellow-600">Featured</Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{post.author}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{post.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(post.status)}>
                          {post.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {post.publishDate ? (
                          <div className="flex items-center text-sm">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.publishDate}
                          </div>
                        ) : (
                          <span className="text-muted-foreground text-sm">Not published</span>
                        )}
                      </TableCell>
                      <TableCell className="text-sm">{post.views}</TableCell>
                      <TableCell className="text-sm">{post.comments}</TableCell>
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
                              Preview
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            {post.status === "draft" && (
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Publish
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
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

        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Media Library</CardTitle>
                <CardDescription>Manage images, videos, and other media files</CardDescription>
              </div>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload Media
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>File</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Dimensions</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead>Used In</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {media.map((file) => (
                    <TableRow key={file.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                            {getFileTypeIcon(file.type)}
                          </div>
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-xs text-muted-foreground">{file.url}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {file.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{file.size}</TableCell>
                      <TableCell className="text-sm">{file.dimensions}</TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {file.uploadDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{file.usedIn} pages</Badge>
                      </TableCell>
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
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link className="mr-2 h-4 w-4" />
                              Copy URL
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
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

        <TabsContent value="settings" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
                <CardDescription>General website configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input id="siteName" defaultValue="LegalConnect" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteTagline">Tagline</Label>
                  <Input id="siteTagline" defaultValue="Connecting Legal Professionals" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Meta Description</Label>
                  <Textarea id="siteDescription" defaultValue="The premier platform for legal professionals and clients" rows={3} />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="maintenance" />
                  <Label htmlFor="maintenance">Maintenance Mode</Label>
                </div>
                <Button>Save Settings</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>Search engine optimization configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="metaKeywords">Meta Keywords</Label>
                  <Input id="metaKeywords" placeholder="legal, law firm, attorneys" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                  <Input id="googleAnalytics" placeholder="G-XXXXXXXXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="robots">Robots.txt</Label>
                  <Textarea id="robots" defaultValue="User-agent: *\nDisallow: /admin/\nSitemap: /sitemap.xml" rows={4} />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="indexing" defaultChecked />
                  <Label htmlFor="indexing">Allow Search Engine Indexing</Label>
                </div>
                <Button>Save SEO Settings</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentCMS;