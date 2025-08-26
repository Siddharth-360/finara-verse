import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp } from "lucide-react";
import NewsGrid from "@/components/news/NewsGrid";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Federal Reserve", 
    "Earnings",
    "Energy",
    "Healthcare",
    "Cryptocurrency",
    "Real Estate",
    "Technology",
    "Banking"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Market News & Analysis
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Market
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the latest market news, expert analysis, and trading insights to make informed investment decisions.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="default">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-smooth"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats Bar */}
      <section className="py-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">S&P 500:</span>
              <span className="text-bullish font-semibold">4,234.12 (+1.2%)</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">NASDAQ:</span>
              <span className="text-bullish font-semibold">13,456.78 (+0.8%)</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">DOW:</span>
              <span className="text-bearish font-semibold">33,987.45 (-0.3%)</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">VIX:</span>
              <span className="text-warning font-semibold">18.45</span>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsGrid />
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;