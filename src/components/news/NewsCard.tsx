import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, TrendingDown, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: number;
  imageUrl?: string;
  trend?: 'bullish' | 'bearish' | 'neutral';
  featured?: boolean;
}

const NewsCard = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  publishedAt, 
  category, 
  readTime, 
  imageUrl, 
  trend = 'neutral',
  featured = false 
}: NewsCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'bullish':
        return <TrendingUp className="h-4 w-4 text-bullish" />;
      case 'bearish':
        return <TrendingDown className="h-4 w-4 text-bearish" />;
      default:
        return null;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'bullish':
        return 'border-l-success';
      case 'bearish':
        return 'border-l-danger';
      default:
        return 'border-l-primary';
    }
  };

  return (
    <Card className={`market-card hover:scale-105 transition-smooth border-l-4 ${getTrendColor()} ${featured ? 'glow-primary' : ''}`}>
      {imageUrl && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover transition-smooth hover:scale-110"
          />
          {featured && (
            <Badge variant="default" className="absolute top-4 left-4 bg-gradient-primary">
              Featured
            </Badge>
          )}
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            {getTrendIcon()}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {readTime} min read
          </div>
        </div>
        
        <h3 className="text-xl font-semibold leading-tight hover:text-primary transition-smooth cursor-pointer">
          <Link to={`/news/${id}`}>
            {title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{author}</span>
            <span>•</span>
            <span>{formatDate(publishedAt)}</span>
          </div>
          
          <Button variant="ghost" size="sm" className="p-2" asChild>
            <Link to={`/news/${id}`}>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;