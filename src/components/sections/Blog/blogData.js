import nation from "./nation.jpg"
import tcs from "./tcs.jpg"


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
        <li>Integr ation with Google Maps API for location services</li>
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
  },
  {
    title: "Tata Imagination Challenge 2024",
    excerpt: "",
    fullContent: `
      
      <h2>My Participation Experience</h2>
      <p>I participated in the Tata Imagination Challenge 2024 and received a participation certificate. The experience was enriching, providing insights into structured problem-solving and the importance of presenting impactful ideas.</p>
      <h2>imaginethat Idea </h2>
      <p>
      WHAT: Describe your idea and its necessity.
      <br/>


      HOW: Explain how it will drive change.
      <br/>

      WHO: Identify its impact and beneficiaries.
      <br/>
      </p>
    `,
    date: "jun 10 2024",
    readTime: 1,
    coverImage: tcs,
    tags: ["", "", ""],
    additionalImages: [
      
    ]
  },
  {
    title: "NationBuilding Case Study Competition 2025",
    excerpt: "The NationBuilding Case Study Competition 2025 is an event where participants analyze and propose innovative solutions to real-world challenges related to national development. ",
    fullContent: `
      <h2>Introduction to NationBuilding Case Study Competition 2025</h2>
      <p>The NationBuilding Case Study Competition 2025 is an event where participants analyze and propose innovative solutions to real-world challenges related to national development. It typically involves:

Case Study Analysis: Teams or individuals are provided with a detailed scenario focusing on issues like infrastructure, education, healthcare, or sustainability.
Problem-Solving: Participants research, brainstorm, and devise actionable strategies or solutions.
Presentation: Solutions are presented to a panel of judges, often including experts and industry leaders.
Objective: Foster critical thinking, collaboration, and innovative ideas to address pressing national challenges.</p>

     
    `,
    date: "jan 10, 2025",
    readTime: 2,
    coverImage: nation,
    tags: ["", "", ""],
    additionalImages: [
      
    ]
  }
];