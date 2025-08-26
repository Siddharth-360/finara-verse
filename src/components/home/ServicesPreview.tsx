import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Brain, 
  Users, 
  Zap, 
  Shield, 
  BarChart3,
  ArrowRight,
  Star
} from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Trading Signals",
      description: "Advanced machine learning algorithms analyze market patterns to provide you with high-accuracy trading signals.",
      price: "$99",
      period: "/month",
      features: ["Real-time alerts", "95% accuracy rate", "Multi-market coverage", "Risk management"],
      popular: true,
      color: "primary"
    },
    {
      icon: Users,
      title: "Personal Trading Coach",
      description: "One-on-one mentorship with experienced traders to accelerate your learning and improve your strategies.",
      price: "$299",
      period: "/month",
      features: ["Weekly 1-hour sessions", "Personalized strategy", "Direct messaging", "Portfolio review"],
      popular: false,
      color: "success"
    },
    {
      icon: Zap,
      title: "Automated Trading Bots",
      description: "Let our sophisticated trading bots execute trades for you 24/7 based on proven strategies.",
      price: "$199",
      period: "/month",
      features: ["24/7 automated trading", "Multiple strategies", "Risk controls", "Performance tracking"],
      popular: false,
      color: "accent"
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Market Data",
      description: "Access live market data, charts, and analytics from global exchanges with millisecond precision."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data and funds are protected with enterprise-grade encryption and security protocols."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Powerful tools for technical analysis, backtesting, and performance optimization."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Premium Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Accelerate Your Trading{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive suite of professional trading services designed 
            to help you achieve consistent profitability in the markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`relative market-card hover:scale-105 transition-smooth ${
                  service.popular ? 'border-primary glow-primary' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-gradient-primary">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex p-3 rounded-2xl mb-4 ${
                    service.color === 'primary' ? 'bg-primary/10 text-primary' :
                    service.color === 'success' ? 'bg-success/10 text-success' :
                    'bg-accent/10 text-accent'
                  }`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{service.price}</span>
                    <span className="text-muted-foreground">{service.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="h-2 w-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={service.popular ? "hero" : "outline"} 
                    className="w-full"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="bg-primary/10 text-primary p-4 rounded-2xl inline-flex mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="px-8">
            View All Services
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;