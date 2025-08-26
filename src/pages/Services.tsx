import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  Zap, 
  Shield, 
  BarChart3,
  Star,
  Check,
  ArrowRight,
  Crown,
  Rocket
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Services = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for new traders getting started",
      price: "$29",
      period: "/month",
      features: [
        "Basic market analysis",
        "Email alerts",
        "Educational content",
        "Community access",
        "Mobile app access"
      ],
      color: "muted",
      icon: BarChart3,
      recommended: false
    },
    {
      name: "Professional",
      description: "Advanced tools for serious traders",
      price: "$99",
      period: "/month",
      features: [
        "AI-powered trading signals",
        "Real-time notifications",
        "Advanced technical analysis",
        "Risk management tools",
        "Priority support",
        "Portfolio tracking",
        "Backtesting tools"
      ],
      color: "primary",
      icon: Brain,
      recommended: true
    },
    {
      name: "Enterprise",
      description: "Complete solution for institutional traders",
      price: "$299",
      period: "/month",
      features: [
        "Everything in Professional",
        "Personal trading coach",
        "Custom trading bots",
        "API access",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics"
      ],
      color: "premium",
      icon: Crown,
      recommended: false
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "1-on-1 Trading Coaching",
      description: "Personalized mentorship with expert traders",
      price: "From $200/session",
      features: ["Customized strategy development", "Live trading sessions", "Performance analysis"]
    },
    {
      icon: Zap,
      title: "Automated Trading Bots",
      description: "AI-powered bots that trade for you 24/7",
      price: "From $199/month", 
      features: ["Multiple trading strategies", "Risk management", "Performance monitoring"]
    },
    {
      icon: Rocket,
      title: "API & Integration Services",
      description: "Connect your existing systems with our platform",
      price: "Custom pricing",
      features: ["REST API access", "Custom integrations", "Technical support"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary glow-primary bg-primary/5';
      case 'premium':
        return 'border-warning glow-danger bg-gradient-primary';
      default:
        return 'border-border';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Professional Trading Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Supercharge Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Trading Performance
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan to match your trading goals. From beginner-friendly 
            tools to enterprise-grade solutions, we have everything you need to succeed.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={plan.name}
                  className={`relative market-card transition-smooth hover:scale-105 ${getColorClasses(plan.color)} ${
                    plan.color === 'premium' ? 'text-primary-foreground' : ''
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge variant="default" className="bg-gradient-primary">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                      plan.color === 'premium' ? 'bg-white/10' : 
                      plan.color === 'primary' ? 'bg-primary/10 text-primary' : 
                      'bg-muted/50'
                    }`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className={`text-base ${
                      plan.color === 'premium' ? 'text-primary-foreground/80' : ''
                    }`}>
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="text-center mb-8">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className={`${plan.color === 'premium' ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                            plan.color === 'premium' ? 'text-primary-foreground' : 'text-primary'
                          }`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.color === 'premium' ? 'secondary' : plan.recommended ? 'hero' : 'outline'}
                      className="w-full"
                      size="lg"
                    >
                      {plan.color === 'premium' ? 'Contact Sales' : 'Get Started'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Professional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Enhance your trading with our specialized one-on-one services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="market-card hover:scale-105 transition-smooth">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary p-3 rounded-2xl inline-flex mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="h-2 w-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Trading Like a Pro?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of successful traders who trust our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;