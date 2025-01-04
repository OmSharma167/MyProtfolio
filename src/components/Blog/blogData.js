export const blogPosts = [
  {
    title: "Building a Full-Stack Healthcare Platform",
    excerpt: "Learn how I built Helix Emergency Healthcare using MERN Stack and integrated various APIs for a comprehensive healthcare solution.",
    fullContent: `
      <h2>Introduction</h2>
      <p>In this blog post, I'll walk you through the process of building Helix Emergency Healthcare, a comprehensive healthcare platform that combines emergency services, telemedicine, and real-time location tracking.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Emergency SOS system with real-time location tracking</li>
        <li>Telemedicine platform for remote consultations</li>
        <li>Integration with Google Maps API for location services</li>
        <li>Real-time chat using Socket.io</li>
        <li>ML-powered symptom checker</li>
      </ul>

      <h2>Technical Implementation</h2>
      <p>The platform was built using the MERN stack (MongoDB, Express.js, React, Node.js) with additional technologies like Socket.io for real-time features and Google Maps API for location services.</p>

      <h2>Challenges and Solutions</h2>
      <p>One of the main challenges was implementing real-time location tracking while ensuring data privacy and security. We solved this by...</p>
    `,
    date: "Feb 15, 2024",
    readTime: 8,
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    tags: ["MERN Stack", "Healthcare", "Web Development"],
    additionalImages: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Implementing Real-time Features with Socket.io",
    excerpt: "A deep dive into implementing real-time communication features in web applications using Socket.io.",
    fullContent: `
      <h2>Introduction to Socket.io</h2>
      <p>Socket.io is a powerful library that enables real-time, bidirectional communication between web clients and servers. In this post, we'll explore how to implement various real-time features.</p>

      <h2>Setting Up Socket.io</h2>
      <p>First, let's look at how to set up Socket.io in both client and server applications...</p>

      <h2>Real-time Chat Implementation</h2>
      <p>We'll build a real-time chat system with features like typing indicators and read receipts...</p>

      <h2>Best Practices</h2>
      <p>Here are some important considerations when working with Socket.io in production...</p>
    `,
    date: "Feb 10, 2024",
    readTime: 6,
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
    tags: ["Socket.io", "JavaScript", "Real-time"],
    additionalImages: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
    ]
  }
];