// Simplified blog posts metadata - content is stored in Markdown files
export const blogPostsMetadata = [
  {
    id: 1,
    title: "Why Branding Is So Important (And Not Just for Big Companies)",
    slug: "why-branding-is-so-important",
    category: "Branding",
    date: "January 15, 2025",
    author: {
      name: "Spread Team",
      role: "Brand Strategist",
      avatar: "/favicon.png"
    },
    featuredImage: "/content/blog/featured_images/1.jpg",
    excerpt: "Discover why branding isn't just for big corporations and how it can transform any business, from startups to personal brands.",
    tags: ["Branding", "Business Strategy", "Marketing"],
    readTime: "6 min read",
    likes: 35,
    comments: 8,
    contentFile: "/content/blog/1.md"
  },
  {
    id: 2,
    title: "The Role of Branding in Building Trust Online",
    slug: "branding-building-trust-online",
    category: "Digital Marketing",
    date: "January 12, 2025",
    author: {
      name: "Spread Team",
      role: "Digital Marketing Specialist",
      avatar: "/favicon.png"
    },
    featuredImage: "/content/blog/featured_images/2.jpg",
    excerpt: "Learn how branding serves as the secret ingredient that makes people feel safe, confident, and excited about choosing your business online.",
    tags: ["Branding", "Online Trust", "E-commerce"],
    readTime: "7 min read",
    likes: 42,
    comments: 12,
    contentFile: "/content/blog/2.md"
  },
  {
    id: 3,
    title: "How Important Digital Marketing Is for a Brand",
    slug: "importance-digital-marketing-for-brands",
    category: "Digital Marketing",
    date: "January 10, 2025",
    author: {
      name: "Spread Team",
      role: "Digital Marketing Manager",
      avatar: "/favicon.png"
    },
    featuredImage: "/content/blog/featured_images/3.jpg",
    excerpt: "Discover why digital marketing isn't just important—it's the lifeline that keeps your brand alive and growing in today's connected world.",
    tags: ["Digital Marketing", "Brand Growth", "Online Presence"],
    readTime: "8 min read",
    likes: 56,
    comments: 15,
    contentFile: "/content/blog/3.md"
  },
  {
    id: 4,
    title: "Social Media Trends That Work Best in 2025",
    slug: "social-media-trends-2025",
    category: "Social Media",
    date: "January 8, 2025",
    author: {
      name: "Spread Team",
      role: "Social Media Strategist",
      avatar: "/favicon.png"
    },
    featuredImage: "/content/blog/featured_images/4.jpg",
    excerpt: "Stay ahead of the curve with the social media trends that actually drive results and help businesses connect, engage, and sell in 2025.",
    tags: ["Social Media", "Trends 2025", "Content Strategy"],
    readTime: "9 min read",
    likes: 73,
    comments: 22,
    contentFile: "/content/blog/4.md"
  },
  {
    id: 5,
    title: "Best Graphic Design Trends in 2025",
    slug: "graphic-design-trends-2025",
    category: "Design",
    date: "January 5, 2025",
    author: {
      name: "Spread Team",
      role: "Creative Director",
      avatar: "/favicon.png"
    },
    featuredImage: "/content/blog/featured_images/5.jpg",
    excerpt: "Explore the graphic design trends taking over 2025 and learn how to make your brand look modern, professional, and memorable.",
    tags: ["Graphic Design", "Design Trends", "Visual Identity"],
    readTime: "7 min read",
    likes: 48,
    comments: 11,
    contentFile: "/content/blog/5.md"
  },
  {
    id: 6,
    title: "Why Social Media Is More Important Than Ever",
    slug: "why-social-media-important-than-ever",
    category: "Social Media",
    date: "January 3, 2025",
    author: {
      name: "Spread Team",
      role: "Social Media Manager",
      avatar: "/favicon.png"
    },
    featuredImage: "/content/blog/featured_images/6.jpg",
    excerpt: "Understand why social media has become essential for businesses, brands, and creators in today's digital-first world.",
    tags: ["Social Media", "Digital Marketing", "Business Growth"],
    readTime: "6 min read",
    likes: 67,
    comments: 18,
    contentFile: "/content/blog/6.md"
  },
  {
    id: 7,
    title: "The Importance of Digital Marketing in Bangladesh's Organic Food Market",
    slug: "digital-marketing-bangladesh-organic-food",
    category: "Industry Insights",
    date: "December 28, 2024",
    author: {
      name: "Spread Team",
      role: "Market Research Analyst",
      avatar: "/favicon.png"
    },
    featuredImage: "/content/blog/featured_images/7.jpg",
    excerpt: "Discover how digital marketing is transforming Bangladesh's organic food market and helping local farmers reach health-conscious consumers.",
    tags: ["Digital Marketing", "Organic Food", "Bangladesh Market"],
    readTime: "8 min read",
    likes: 34,
    comments: 9,
    contentFile: "/content/blog/7.md"
  },
  {
    id: 8,
    title: "The Importance of Going Digital: Social Media for Restaurants",
    slug: "social-media-for-restaurants",
    category: "Industry Insights",
    date: "December 25, 2024",
    author: {
      name: "Spread Team",
      role: "Restaurant Marketing Consultant",
      avatar: "/favicon.png"
    },
    featuredImage: "/content/blog/featured_images/8.jpg",
    excerpt: "Learn why social media has become essential for restaurant success and how to leverage digital platforms to attract more customers.",
    tags: ["Social Media", "Restaurant Marketing", "Digital Transformation"],
    readTime: "7 min read",
    likes: 52,
    comments: 14,
    contentFile: "/content/blog/8.md"
  },
  {
    id: 9,
    title: "When to Post on Social Media for Better Reach",
    slug: "when-to-post-social-media-better-reach",
    category: "Social Media",
    date: "December 22, 2024",
    author: {
      name: "Spread Team",
      role: "Social Media Analyst",
      avatar: "/favicon.png"
    },
    featuredImage: "/content/blog/featured_images/9.jpg",
    excerpt: "Master the art of timing your social media posts to maximize reach, engagement, and overall performance across different platforms.",
    tags: ["Social Media", "Content Strategy", "Engagement"],
    readTime: "6 min read",
    likes: 89,
    comments: 25,
    contentFile: "/content/blog/9.md"
  }
];

// Helper functions
export const getBlogPostMetadataById = (id) => {
  return blogPostsMetadata.find(post => post.id === parseInt(id));
};

export const getBlogPostMetadataBySlug = (slug) => {
  return blogPostsMetadata.find(post => post.slug === slug);
};

export const getRelatedPostsMetadata = (currentPostId, limit = 3) => {
  return blogPostsMetadata
    .filter(post => post.id !== parseInt(currentPostId))
    .slice(0, limit);
};