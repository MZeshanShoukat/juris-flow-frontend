import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Phone, Video, MoreVertical, PlusCircle } from "lucide-react";

const ChatInterface = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>("1");
  const [message, setMessage] = useState("");

  const clients = [
    {
      id: "1",
      name: "John Smith",
      lastMessage: "Thank you for the contract review...",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      caseType: "Contract Law"
    },
    {
      id: "2", 
      name: "Emily Johnson",
      lastMessage: "When is our next court hearing?",
      timestamp: "15 min ago",
      unread: 0,
      online: false,
      caseType: "Family Law"
    },
    {
      id: "3",
      name: "Michael Davis",
      lastMessage: "I have some additional documents...",
      timestamp: "1 hour ago",
      unread: 1,
      online: true,
      caseType: "Personal Injury"
    }
  ];

  const messages = [
    {
      id: "1",
      sender: "client",
      content: "Hi Sarah, I've reviewed the contract you sent. I have a few questions about clause 3.2.",
      timestamp: "10:30 AM"
    },
    {
      id: "2",
      sender: "lawyer",
      content: "Of course! Clause 3.2 deals with the termination conditions. What specifically would you like me to clarify?",
      timestamp: "10:32 AM"
    },
    {
      id: "3",
      sender: "client", 
      content: "I'm concerned about the 30-day notice period. Is this negotiable?",
      timestamp: "10:35 AM"
    },
    {
      id: "4",
      sender: "lawyer",
      content: "Yes, the notice period is typically negotiable. We can propose a 60 or 90-day period if that works better for your business needs. I'll draft an amendment for your review.",
      timestamp: "10:38 AM"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("");
      // Add message sending logic here
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Client Communication</h1>
        <p className="text-muted-foreground">Secure messaging with your clients</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        {/* Client List */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Clients</CardTitle>
              <Button size="sm" variant="outline">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search clients..."
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-96">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className={`p-4 border-b cursor-pointer hover:bg-muted transition-colors ${
                    selectedChat === client.id ? 'bg-muted' : ''
                  }`}
                  onClick={() => setSelectedChat(client.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {client.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">{client.name}</p>
                        <div className="flex items-center space-x-1">
                          {client.unread > 0 && (
                            <Badge variant="default" className="text-xs">
                              {client.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{client.caseType}</p>
                      <p className="text-xs text-muted-foreground truncate">{client.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-1">{client.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="lg:col-span-3 flex flex-col">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <CardHeader className="pb-3 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">John Smith</h3>
                      <p className="text-sm text-muted-foreground">Contract Law • Online</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-80 p-4">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'lawyer' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === 'lawyer'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                          <p className={`text-xs mt-1 ${
                            msg.sender === 'lawyer'
                              ? 'text-primary-foreground/70'
                              : 'text-muted-foreground'
                          }`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground">Select a client to start messaging</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ChatInterface;