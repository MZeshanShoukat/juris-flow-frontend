import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Database, 
  Shield, 
  Mail,
  Bell,
  Globe,
  Server,
  Key,
  AlertCircle,
  CheckCircle,
  Save,
  RefreshCw,
  Monitor,
  Lock,
  Zap
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SystemConfiguration = () => {
  const [activeTab, setActiveTab] = useState("general");

  // System settings state
  const [settings, setSettings] = useState({
    general: {
      platformName: "LegalConnect",
      supportEmail: "support@legalconnect.com",
      timezone: "America/New_York",
      maintenanceMode: false,
      maxFileSize: "50",
      sessionTimeout: "24"
    },
    security: {
      twoFactorRequired: true,
      passwordMinLength: "8",
      maxLoginAttempts: "5",
      sessionSecure: true,
      corsEnabled: true,
      allowedOrigins: "https://app.legalconnect.com"
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      systemAlerts: true,
      userRegistrationNotify: true,
      paymentFailureNotify: true
    },
    integrations: {
      stripeEnabled: true,
      twilioEnabled: false,
      analyticsEnabled: true,
      loggingLevel: "info",
      backupFrequency: "daily"
    }
  });

  // System health status
  const systemHealth = [
    {
      service: "Database",
      status: "healthy",
      uptime: "99.98%",
      lastCheck: "2 minutes ago",
      icon: Database
    },
    {
      service: "API Gateway",
      status: "healthy",
      uptime: "99.95%",
      lastCheck: "1 minute ago",
      icon: Server
    },
    {
      service: "Email Service",
      status: "healthy",
      uptime: "99.92%",
      lastCheck: "3 minutes ago",
      icon: Mail
    },
    {
      service: "Payment Gateway",
      status: "warning",
      uptime: "98.80%",
      lastCheck: "5 minutes ago",
      icon: Key
    },
    {
      service: "File Storage",
      status: "healthy",
      uptime: "99.99%",
      lastCheck: "1 minute ago",
      icon: Monitor
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'healthy':
        return { badge: 'bg-green-100 text-green-800', icon: 'text-green-600' };
      case 'warning':
        return { badge: 'bg-yellow-100 text-yellow-800', icon: 'text-yellow-600' };
      case 'error':
        return { badge: 'bg-red-100 text-red-800', icon: 'text-red-600' };
      default:
        return { badge: 'bg-gray-100 text-gray-800', icon: 'text-gray-600' };
    }
  };

  const handleSave = (section: string) => {
    // In a real app, this would save to the backend
    console.log(`Saving ${section} settings:`, settings[section as keyof typeof settings]);
    // Show success message
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Configuration</h1>
          <p className="text-muted-foreground mt-1">
            Configure platform settings, security, and integrations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Status
          </Button>
          <Button variant="outline" size="sm">
            <Monitor className="h-4 w-4 mr-2" />
            System Logs
          </Button>
        </div>
      </div>

      {/* System Health Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            System Health Overview
          </CardTitle>
          <CardDescription>Real-time status of critical system components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {systemHealth.map((service, index) => {
              const IconComponent = service.icon;
              const colors = getStatusColor(service.status);
              return (
                <div key={index} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <IconComponent className={`h-5 w-5 ${colors.icon}`} />
                    <Badge className={colors.badge}>{service.status}</Badge>
                  </div>
                  <div>
                    <h4 className="font-medium">{service.service}</h4>
                    <p className="text-sm text-muted-foreground">Uptime: {service.uptime}</p>
                    <p className="text-xs text-muted-foreground">{service.lastCheck}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Configuration Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>Basic platform configuration and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="platformName">Platform Name</Label>
                  <Input
                    id="platformName"
                    value={settings.general.platformName}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      general: { ...prev.general, platformName: e.target.value }
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={settings.general.supportEmail}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      general: { ...prev.general, supportEmail: e.target.value }
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select value={settings.general.timezone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="UTC">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxFileSize">Max File Size (MB)</Label>
                  <Input
                    id="maxFileSize"
                    type="number"
                    value={settings.general.maxFileSize}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      general: { ...prev.general, maxFileSize: e.target.value }
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (hours)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.general.sessionTimeout}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      general: { ...prev.general, sessionTimeout: e.target.value }
                    }))}
                  />
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable to put the platform in maintenance mode
                  </p>
                </div>
                <Switch
                  checked={settings.general.maintenanceMode}
                  onCheckedChange={(checked) => setSettings(prev => ({
                    ...prev,
                    general: { ...prev.general, maintenanceMode: checked }
                  }))}
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSave('general')}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure security policies and authentication requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Require Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Force all users to enable 2FA for account access
                    </p>
                  </div>
                  <Switch
                    checked={settings.security.twoFactorRequired}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      security: { ...prev.security, twoFactorRequired: checked }
                    }))}
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="passwordMinLength">Minimum Password Length</Label>
                    <Input
                      id="passwordMinLength"
                      type="number"
                      value={settings.security.passwordMinLength}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        security: { ...prev.security, passwordMinLength: e.target.value }
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxLoginAttempts">Max Failed Login Attempts</Label>
                    <Input
                      id="maxLoginAttempts"
                      type="number"
                      value={settings.security.maxLoginAttempts}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        security: { ...prev.security, maxLoginAttempts: e.target.value }
                      }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allowedOrigins">Allowed CORS Origins</Label>
                  <Textarea
                    id="allowedOrigins"
                    value={settings.security.allowedOrigins}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      security: { ...prev.security, allowedOrigins: e.target.value }
                    }))}
                    rows={3}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Secure Session Cookies</Label>
                    <p className="text-sm text-muted-foreground">
                      Enforce secure, HTTP-only session cookies
                    </p>
                  </div>
                  <Switch
                    checked={settings.security.sessionSecure}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      security: { ...prev.security, sessionSecure: checked }
                    }))}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSave('security')}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Security Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure system-wide notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Send email notifications for system events
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.emailNotifications}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, emailNotifications: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Send SMS notifications for critical alerts
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.smsNotifications}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, smsNotifications: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable browser push notifications
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.pushNotifications}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, pushNotifications: checked }
                    }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>User Registration Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify admins of new user registrations
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.userRegistrationNotify}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, userRegistrationNotify: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Payment Failure Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify admins of payment processing failures
                    </p>
                  </div>
                  <Switch
                    checked={settings.notifications.paymentFailureNotify}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, paymentFailureNotify: checked }
                    }))}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSave('notifications')}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                External Integrations
              </CardTitle>
              <CardDescription>Manage third-party service integrations and API configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Stripe Payment Processing</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable Stripe for payment processing
                    </p>
                  </div>
                  <Switch
                    checked={settings.integrations.stripeEnabled}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      integrations: { ...prev.integrations, stripeEnabled: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Twilio SMS Service</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable Twilio for SMS notifications
                    </p>
                  </div>
                  <Switch
                    checked={settings.integrations.twilioEnabled}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      integrations: { ...prev.integrations, twilioEnabled: checked }
                    }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Analytics Tracking</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable analytics and usage tracking
                    </p>
                  </div>
                  <Switch
                    checked={settings.integrations.analyticsEnabled}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      integrations: { ...prev.integrations, analyticsEnabled: checked }
                    }))}
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="loggingLevel">Logging Level</Label>
                    <Select value={settings.integrations.loggingLevel}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debug">Debug</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                        <SelectItem value="warn">Warning</SelectItem>
                        <SelectItem value="error">Error</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backupFrequency">Backup Frequency</Label>
                    <Select value={settings.integrations.backupFrequency}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSave('integrations')}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Integration Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SystemConfiguration;