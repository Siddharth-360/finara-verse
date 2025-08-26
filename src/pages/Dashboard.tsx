import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign,
  Eye,
  Edit,
  Plus,
  Settings,
  FileText,
  ShoppingCart
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - in real app this would come from API
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,345",
      change: "+12.3%",
      trend: "up" as const,
      icon: DollarSign
    },
    {
      title: "Active Users", 
      value: "2,847",
      change: "+8.7%",
      trend: "up" as const,
      icon: Users
    },
    {
      title: "Blog Views",
      value: "45,678",
      change: "-2.1%", 
      trend: "down" as const,
      icon: Eye
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.8%",
      trend: "up" as const,
      icon: BarChart3
    }
  ];

  const recentPosts = [
    {
      id: "1",
      title: "Federal Reserve Signals Rate Cuts",
      status: "Published",
      views: "1,234",
      date: "2024-08-26"
    },
    {
      id: "2", 
      title: "Tech Earnings Preview",
      status: "Draft",
      views: "0",
      date: "2024-08-25"
    },
    {
      id: "3",
      title: "Market Volatility Analysis",
      status: "Published",
      views: "2,567",
      date: "2024-08-24"
    }
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "John Smith",
      service: "Premium Plan",
      amount: "$99.00",
      status: "Completed"
    },
    {
      id: "ORD-002", 
      customer: "Sarah Johnson",
      service: "Trading Signals",
      amount: "$49.00",
      status: "Processing"
    },
    {
      id: "ORD-003",
      customer: "Mike Chen", 
      service: "Personal Coaching",
      amount: "$299.00",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your content, track performance, and grow your business
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="hero">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Manage Content
            </Button>
            <Button variant="outline">
              <ShoppingCart className="h-4 w-4 mr-2" />
              View Orders
            </Button>
            <Button variant="ghost">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={stat.title} className="market-card">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          {stat.title}
                        </CardTitle>
                        <Icon className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          {stat.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 mr-1 text-bullish" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1 text-bearish" />
                          )}
                          <span className={stat.trend === "up" ? "text-bullish" : "text-bearish"}>
                            {stat.change}
                          </span>
                          <span className="ml-1">from last month</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="market-card">
                  <CardHeader>
                    <CardTitle>Recent Posts</CardTitle>
                    <CardDescription>
                      Your latest blog posts and articles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPosts.map((post) => (
                        <div key={post.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{post.title}</p>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Badge variant={post.status === "Published" ? "default" : "secondary"}>
                                {post.status}
                              </Badge>
                              <span>{post.views} views</span>
                              <span>•</span>
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="market-card">
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>
                      Latest service purchases and subscriptions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{order.customer}</p>
                            <p className="text-sm text-muted-foreground">
                              {order.service} • {order.amount}
                            </p>
                          </div>
                          <Badge variant={order.status === "Completed" ? "default" : "secondary"}>
                            {order.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="content">
              <Card className="market-card">
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>
                    Create and manage your blog posts, market analysis, and educational content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Content management features will be implemented here. This will include:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                    <li>Rich text editor for blog posts</li>
                    <li>Image upload and management</li>
                    <li>SEO optimization tools</li>
                    <li>Publishing and scheduling</li>
                    <li>Content categorization and tagging</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sales">
              <Card className="market-card">
                <CardHeader>
                  <CardTitle>Sales & Revenue</CardTitle>
                  <CardDescription>
                    Track your service sales, subscriptions, and revenue metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sales management features will include:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                    <li>Revenue tracking and analytics</li>
                    <li>Subscription management</li>
                    <li>Payment processing with Stripe</li>
                    <li>Customer relationship management</li>
                    <li>Automated billing and invoicing</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card className="market-card">
                <CardHeader>
                  <CardTitle>Analytics & Insights</CardTitle>
                  <CardDescription>
                    Detailed analytics for your content performance and user engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Analytics features will include:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                    <li>User engagement metrics</li>
                    <li>Content performance tracking</li>
                    <li>Conversion funnel analysis</li>
                    <li>Revenue attribution</li>
                    <li>Real-time dashboard updates</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;