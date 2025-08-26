import NewsCard from "./NewsCard";

const NewsGrid = () => {
  // Mock news data - in a real app, this would come from an API
  const newsData = [
    {
      id: "1",
      title: "Federal Reserve Signals Potential Rate Cuts Amid Economic Uncertainty",
      excerpt: "The Federal Reserve Chairman hinted at possible interest rate adjustments in the coming months, citing global economic headwinds and inflation concerns. Market analysts expect this to significantly impact equity valuations.",
      author: "Sarah Johnson",
      publishedAt: "2024-08-26",
      category: "Federal Reserve",
      readTime: 5,
      trend: "bullish" as const,
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
    },
    {
      id: "2", 
      title: "Tech Giants Report Mixed Q3 Earnings Results",
      excerpt: "Major technology companies delivered varied performance in their latest quarterly reports, with cloud computing revenues showing strong growth while consumer hardware sales declined.",
      author: "Michael Chen",
      publishedAt: "2024-08-25",
      category: "Earnings",
      readTime: 4,
      trend: "neutral" as const,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    {
      id: "3",
      title: "Energy Sector Faces Headwinds as Oil Prices Fluctuate",
      excerpt: "Volatile oil prices continue to pressure energy sector stocks, with geopolitical tensions and supply chain concerns creating uncertainty for investors in the commodity space.",
      author: "David Rodriguez",
      publishedAt: "2024-08-24",
      category: "Energy",
      readTime: 6,
      trend: "bearish" as const,
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop"
    },
    {
      id: "4",
      title: "Healthcare Stocks Rally on Breakthrough Drug Approvals",
      excerpt: "Several pharmaceutical companies saw their stock prices surge following FDA approvals for new treatments, highlighting the potential for innovation in the healthcare sector.",
      author: "Dr. Emily Watson",
      publishedAt: "2024-08-23",
      category: "Healthcare", 
      readTime: 3,
      trend: "bullish" as const,
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
    },
    {
      id: "5",
      title: "Cryptocurrency Market Shows Signs of Institutional Adoption",
      excerpt: "Major financial institutions continue to announce cryptocurrency trading and custody services, signaling growing acceptance of digital assets in traditional finance.",
      author: "Alex Thompson",
      publishedAt: "2024-08-22",
      category: "Cryptocurrency",
      readTime: 7,
      trend: "bullish" as const,
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop"
    },
    {
      id: "6",
      title: "Real Estate Investment Trusts Navigate Rising Interest Rates",
      excerpt: "REITs face challenges as higher interest rates impact borrowing costs and property valuations, forcing fund managers to adjust their investment strategies.",
      author: "Jennifer Liu",
      publishedAt: "2024-08-21",
      category: "Real Estate",
      readTime: 5,
      trend: "bearish" as const,
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {newsData.map((article) => (
        <NewsCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default NewsGrid;