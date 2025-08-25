// Template for adding new blog posts
// Copy this template and add it to the blogPosts array in blogPosts.js

export const newBlogPostTemplate = {
  id: 6, // Increment this number for each new post
  title: "Your Blog Post Title Here",
  slug: "your-blog-post-slug-here", // URL-friendly version of title
  category: "Experience", // Options: Experience, Tips & Tricks, Design Trends, etc.
  date: "January 15, 2025", // Publication date
  author: {
    name: "Author Name",
    role: "Author Role/Title",
    avatar: "/images/avatar/avatar-1.jpg" // Path to author image
  },
  featuredImage: "/images/blog/blog-6.jpg", // Path to featured image
  excerpt: "Brief description of the blog post that appears in listings and meta descriptions.",
  content: {
    introduction: "Opening paragraph that introduces the topic and hooks the reader.",
    sections: [
      {
        title: "First Section Title",
        content: "Content for the first section. This can be multiple paragraphs.",
        list: [ // Optional - include if you want bullet points
          "First bullet point",
          "Second bullet point: with additional explanation",
          "Third bullet point"
        ]
      },
      {
        title: "Second Section Title",
        content: "Content for the second section without bullet points."
      }
      // Add more sections as needed
    ],
    conclusion: "Concluding paragraph that wraps up the article and provides key takeaways."
  },
  tags: ["Tag1", "Tag2", "Tag3"], // Relevant tags for the post
  readTime: "5 min read", // Estimated reading time
  likes: 0, // Initial likes count
  comments: 0 // Initial comments count
};

// Instructions for adding a new blog post:
// 1. Copy the template above
// 2. Update all the fields with your content
// 3. Make sure the ID is unique and incremental
// 4. Add the new post object to the blogPosts array in blogPosts.js
// 5. Make sure the featured image exists in the public/images/blog/ directory