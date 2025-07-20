import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Scale, Calendar, FileText, MessageSquare, Star, Clock } from "lucide-react";

const CaseOverview = () => {
  const cases = [
    {
      id: "C001",
      title: "Corporate Contract Review",
      lawyer: "Attorney Sarah Johnson",
      avatar: "/placeholder.svg",
      status: "Active",
      priority: "High",
      startDate: "2024-01-10",
      deadline: "2024-02-15",
      progress: 75,
      lastUpdate: "Contract amendments reviewed",
      nextAction: "Client approval needed",
      documents: 8,
      messages: 15
    },
    {
      id: "C002", 
      title: "Real Estate Transaction",
      lawyer: "Attorney Michael Chen",
      avatar: "/placeholder.svg",
      status: "In Progress",
      priority: "Medium",
      startDate: "2024-01-05",
      deadline: "2024-01-30",
      progress: 60,
      lastUpdate: "Title search completed",
      nextAction: "Schedule closing",
      documents: 12,
      messages: 22
    },
    {
      id: "C003",
      title: "Employment Contract Review",
      lawyer: "Attorney Emily Rodriguez", 
      avatar: "/placeholder.svg",
      status: "Completed",
      priority: "Low",
      startDate: "2023-12-20",
      deadline: "2024-01-15",
      progress: 100,
      lastUpdate: "Final documents delivered",
      nextAction: "Case closed",
      documents: 5,
      messages: 8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800";
      case "in progress": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Case Overview</h1>
        <p className="text-muted-foreground">Track your ongoing and completed legal matters</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cases.map((case_) => (
          <Card key={case_.id} className="hover:shadow-card transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge className={getStatusColor(case_.status)}>
                  {case_.status}
                </Badge>
                <Badge variant="outline">{case_.id}</Badge>
              </div>
              <CardTitle className="text-lg">{case_.title}</CardTitle>
              <CardDescription className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={case_.avatar} />
                  <AvatarFallback>{case_.lawyer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <span>{case_.lawyer}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{case_.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${case_.progress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>{case_.documents} docs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span>{case_.messages} messages</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Deadline: {case_.deadline}</span>
                </div>
                <p className="text-muted-foreground">{case_.lastUpdate}</p>
                <p className="font-medium text-primary">{case_.nextAction}</p>
              </div>

              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseOverview;