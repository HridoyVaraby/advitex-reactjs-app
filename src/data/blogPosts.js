export const blogPosts = [
    {
        id: 1,
        title: "Why Branding Is So Important (And Not Just for Big Companies)",
        slug: "why-branding-is-so-important",
        category: "Branding",
        date: "January 15, 2025",
        author: {
            name: "Spread Team",
            role: "Brand Strategist",
            avatar: "/images/avatar/avatar-2.jpg"
        },
        featuredImage: "/content/blog/featured_images/1.jpg",
        excerpt: "Discover why branding isn't just for big corporations and how it can transform any business, from startups to personal brands.",
        tags: ["Branding", "Business Strategy", "Marketing"],
        readTime: "6 min read",
        likes: 35,
        comments: 8
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
            avatar: "/content/blog/featured_images/2.jpg"
        },
        featuredImage: "/images/blog/blog-7.jpg",
        excerpt: "Learn how branding serves as the secret ingredient that makes people feel safe, confident, and excited about choosing your business online.",
        tags: ["Branding", "Online Trust", "E-commerce"],
        readTime: "7 min read",
        likes: 42,
        comments: 12
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
            avatar: "/content/blog/featured_images/3.jpg"
        },
        featuredImage: "/images/blog/blog-8.jpg",
        excerpt: "Discover why digital marketing isn't just important—it's the lifeline that keeps your brand alive and growing in today's connected world.",
        tags: ["Digital Marketing", "Brand Growth", "Online Presence"],
        readTime: "8 min read",
        likes: 56,
        comments: 15
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
            avatar: "/content/blog/featured_images/4.jpg"
        },
        featuredImage: "/images/blog/blog-9.jpg",
        excerpt: "Stay ahead of the curve with the social media trends that actually drive results and help businesses connect, engage, and sell in 2025.",
        tags: ["Social Media", "Trends 2025", "Content Strategy"],
        readTime: "9 min read",
        likes: 73,
        comments: 22
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
            avatar: "/content/blog/featured_images/5.jpg"
        },
        featuredImage: "/images/blog/blog-10.jpg",
        excerpt: "Explore the graphic design trends taking over 2025 and learn how to make your brand look modern, professional, and memorable.",
        tags: ["Graphic Design", "Design Trends", "Visual Identity"],
        readTime: "7 min read",
        likes: 48,
        comments: 11
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
            avatar: "/content/blog/featured_images/6.jpg"
        },
        featuredImage: "/images/blog/blog-11.jpg",
        excerpt: "Understand why social media has become essential for businesses, brands, and creators in today's digital-first world.",
        tags: ["Social Media", "Digital Marketing", "Business Growth"],
        readTime: "6 min read",
        likes: 67,
        comments: 18
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
            avatar: "/content/blog/featured_images/7.jpg"
        },
        featuredImage: "/images/blog/blog-12.jpg",
        excerpt: "Discover how digital marketing is transforming Bangladesh's organic food market and helping local farmers reach health-conscious consumers.",
        tags: ["Digital Marketing", "Organic Food", "Bangladesh Market"],
        readTime: "8 min read",
        likes: 34,
        comments: 9
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
            avatar: "/content/blog/featured_images/8.jpg"
        },
        featuredImage: "/images/blog/blog-13.jpg",
        excerpt: "Learn why social media has become essential for restaurant success and how to leverage digital platforms to attract more customers.",
        tags: ["Social Media", "Restaurant Marketing", "Digital Transformation"],
        readTime: "7 min read",
        likes: 52,
        comments: 14
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
            avatar: "/content/blog/featured_images/9.jpg"
        },
        featuredImage: "/images/blog/blog-14.jpg",
        excerpt: "Master the art of timing your social media posts to maximize reach, engagement, and overall performance across different platforms.",
        tags: ["Social Media", "Content Strategy", "Engagement"],
        readTime: "6 min read",
        likes: 89,
        comments: 25
    }
];

// Helper function to get blog post by ID
export const getBlogPostById = (id) => {
    return blogPosts.find(post => post.id === parseInt(id));
};

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
};

// Helper function to get related posts
export const getRelatedPosts = (currentPostId, limit = 3) => {
    return blogPosts
        .filter(post => post.id !== parseInt(currentPostId))
        .slice(0, limit);
};

// Export all blog posts as default
export default blogPosts;