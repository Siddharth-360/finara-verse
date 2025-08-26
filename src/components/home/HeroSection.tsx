import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, BarChart3, Shield } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "Active Traders", value: "50,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "87%" },
    { icon: BarChart3, label: "Markets Covered", value: "25+" },
    { icon: Shield, label: "Uptime", value: "99.9%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional trading dashboard with financial charts and market data"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="animate-float absolute top-20 left-10 w-2 h-2 bg-primary rounded-full glow-primary" />
        <div className="animate-float absolute top-40 right-20 w-3 h-3 bg-success rounded-full glow-success" style={{ animationDelay: '1s' }} />
        <div className="animate-float absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full opacity-60" style={{ animationDelay: '2s' }} />
        <div className="animate-float absolute bottom-20 right-40 w-4 h-4 bg-primary/50 rounded-full" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Badge */}
        <div className="animate-slide-up mb-8">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            🚀 New: Advanced AI Trading Signals Available
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="animate-slide-up mb-8" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Master the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Stock Market
            </span>
            <br />
            Like a Professional
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access real-time market data, expert analysis, and powerful trading tools. 
            Join thousands of successful traders who trust our platform.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            Start Trading Now
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
            Watch Demo
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="animate-slide-up grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" style={{ animationDelay: '0.6s' }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className="market-card p-6 text-center hover:scale-105 transition-smooth"
              >
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="animate-slide-up mt-16 text-center" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-4">Trusted by leading institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="h-8 w-24 bg-muted rounded-md" />
            <div className="h-8 w-28 bg-muted rounded-md" />
            <div className="h-8 w-20 bg-muted rounded-md" />
            <div className="h-8 w-32 bg-muted rounded-md" />
            <div className="h-8 w-24 bg-muted rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;