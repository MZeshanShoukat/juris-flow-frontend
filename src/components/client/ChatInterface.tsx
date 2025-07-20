import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Send, 
  Paperclip, 
  Phone, 
  Video,
  MoreVertical,
  Search,
  Star,
  FileText,
  Image,
  Download,
  Clock
} from "lucide-react";

const ChatInterface = () => {
  const [selectedChat, setSelectedChat] = useState("1");
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const conversations = [
    {
      id: "1",
      lawyer: "Attorney Sarah Johnson",
      specialty: "Corporate Law",
      avatar: "/placeholder.svg",
      lastMessage: "I've reviewed the contract. Here are my recommendations...",
      lastTime: "2 min ago",
      unread: 2,
      online: true,
      rating: 5,
      caseId: "C001"
    },
    {
      id: "2", 
      lawyer: "Attorney Michael Chen",
      specialty: "Real Estate Law",
      avatar: "/placeholder.svg",
      lastMessage: "The documents look good. We can proceed with the closing.",
      lastTime: "1 hour ago",
      unread: 0,
      online: false,
      rating: 4,
      caseId: "C002"
    },
    {
      id: "3",
      lawyer: "Attorney Emily Rodriguez", 
      specialty: "Family Law",
      avatar: "/placeholder.svg",
      lastMessage: "I'll prepare the custody agreement draft by tomorrow.",
      lastTime: "3 hours ago",
      unread: 1,
      online: true,
      rating: 5,
      caseId: "C003"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "lawyer",
      content: "Hello John! I've had a chance to review your contract. There are a few clauses I'd like to discuss with you.",
      time: "10:30 AM",
      type: "text"
    },
    {
      id: 2,
      sender: "client",
      content: "Great! What are your main concerns?",
      time: "10:32 AM", 
      type: "text"
    },
    {
      id: 3,
      sender: "lawyer",
      content: "contract_review_notes.pdf",
      time: "10:35 AM",
      type: "file",
      fileName: "contract_review_notes.pdf",
      fileSize: "245 KB"
    },
    {
      id: 4,
      sender: "lawyer",
      content: "I've attached my detailed notes. The main issues are in sections 4.2 and 7.1 regarding liability limitations.",
      time: "10:36 AM",
      type: "text"
    },
    {
      id: 5,
      sender: "client",
      content: "Thank you for the thorough review. Should we schedule a call to discuss these changes?",
      time: "10:45 AM",
      type: "text"
    },
    {
      id: 6,
      sender: "lawyer",
      content: "Absolutely. I'm available tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?",
      time: "11:15 AM",
      type: "text"
    }
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-6 h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground">Communicate with your legal team</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Conversations
              </span>
              <Badge variant="secondary">{conversations.length}</Badge>
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`p-4 cursor-pointer border-b border-border hover:bg-secondary/50 transition-colors ${
                    selectedChat === conv.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conv.avatar} />
                        <AvatarFallback>{conv.lawyer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-sm truncate">{conv.lawyer}</p>
                        <div className="flex items-center space-x-1">
                          {[...Array(conv.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{conv.specialty}</p>
                      <p className="text-sm text-muted-foreground truncate mt-1">{conv.lastMessage}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">{conv.lastTime}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {conv.caseId}
                          </Badge>
                          {conv.unread > 0 && (
                            <Badge className="h-5 w-5 flex items-center justify-center p-0 text-xs bg-destructive">
                              {conv.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="lg:col-span-2 flex flex-col">
          {selectedConversation && (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedConversation.avatar} />
                        <AvatarFallback>{selectedConversation.lawyer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{selectedConversation.lawyer}</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm text-muted-foreground">{selectedConversation.specialty}</p>
                        <Badge variant="outline" className="text-xs">
                          Case {selectedConversation.caseId}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${
                      msg.sender === 'client' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary'
                    } rounded-lg p-3`}>
                      {msg.type === 'file' ? (
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5" />
                          <div>
                            <p className="font-medium text-sm">{msg.fileName}</p>
                            <p className="text-xs opacity-70">{msg.fileSize}</p>
                          </div>
                          <Button size="sm" variant="ghost" className="p-1">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <p className="text-sm">{msg.content}</p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs opacity-70">{msg.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="border-t border-border p-4">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={handleFileUpload}>
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-gradient-primary">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    // Handle file upload
                    console.log(e.target.files);
                  }}
                />
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ChatInterface;