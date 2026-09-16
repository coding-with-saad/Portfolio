export const projects = [
  {
    id: "ai-native-book",
    title: "AI-Native Technical Book & Physical AI Platform",
    focus:
      "A Docusaurus-based technical book on Physical AI and humanoid robotics, with a RAG chatbot that answers questions strictly grounded in the manuscript — not open-ended hallucination.",
    detail:
      "Covers Vision-Language-Action systems, ROS 2, and Gazebo/Unity simulation. The chatbot layer runs on FastAPI with Neon Postgres and a Qdrant vector store, using OpenAI Agents to retrieve and cite the source text before answering.",
    tech: ["Python", "FastAPI", "Docusaurus", "Qdrant", "ROS 2", "NVIDIA Isaac"],
    github: "https://github.com/coding-with-saad/AI-Nativebook",
    live: "https://ai-nativebook-three.vercel.app",
    featured: true,
  },
  {
    id: "smart-hajj",
    title: "Smart Hajj Management & Pilgrim Tracking System",
    focus:
      "A full-stack system for real-time pilgrim tracking, safety, and administration at high concurrency.",
    detail:
      "Includes an interactive admin dashboard, automated QR-based identity generation, live location checkpoints, and RESTful transactions built to hold up under crowd-scale load.",
    tech: ["JavaScript", "HTML5/CSS3", "REST APIs", "QR Tracking"],
    github:
      "https://github.com/coding-with-saad/Smart-Hajj-Management-Pilgrim-Tracking-System",
    live: null,
    featured: true,
  },
  {
    id: "mcp-server",
    title: "MCP Server & Agent Ecosystem",
    focus:
      "Production-grade Model Context Protocol tools and dynamic resources that let LLMs execute local and remote tasks reliably.",
    detail:
      "Built alongside companion guides for Claude Code and the OpenAI Agent SDK, covering tool-calling patterns and agent routing for real workflows, not just demos.",
    tech: ["Python", "MCP", "OpenAI SDK", "Agent Routing"],
    github: "https://github.com/coding-with-saad/Mcp_Server",
    live: null,
    featured: true,
  },
  {
    id: "blockchain",
    title: "Blockchain & Distributed Ledger Mechanics",
    focus:
      "Core blockchain primitives implemented from first principles, not from a framework.",
    detail:
      "SHA-256 based hashing routines, an immutable ledger, proof-of-work consensus, and peer-to-peer gossip networking — built to actually understand how the pieces fit, not just to ship a demo coin.",
    tech: ["JavaScript", "Node.js", "Cryptography", "Distributed Systems"],
    github: "https://github.com/coding-with-saad/Blockchain-",
    live: null,
    featured: true,
  },
  {
    id: "ai-task-manager",
    title: "AI-Powered Task Management & Prioritization System",
    focus:
      "A modular CLI task engine with a pluggable AI architecture for prioritization.",
    detail:
      "Calculates urgency, dependencies, and context embeddings to recommend what to work on next and how to allocate time — built around clean, swappable plugin architecture.",
    tech: ["Python", "Spec-Driven Development", "AI Plugins"],
    github: "https://github.com/coding-with-saad/AI-Powered-Task-Management-System",
    live: null,
    featured: false,
  },
  {
    id: "mongodb-mastery",
    title: "NoSQL Engineering & MongoDB Mastery",
    focus:
      "Production-style database work: aggregation pipelines, indexing strategy, and schema design.",
    detail:
      "A hands-on deep dive into MongoDB beyond CRUD basics, with an Express/Node integration layer for querying real datasets efficiently.",
    tech: ["MongoDB", "NoSQL", "Node.js", "Express"],
    github: "https://github.com/coding-with-saad/Learning-Mongodb-from-scratch",
    live: null,
    featured: false,
  },
];
