import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Goals', id: 'goals' },
];

export const PROJECTS = [
  {
    slug: 'resepai',
    title: 'ResepAI - AI-Powered Recipe Assistant',
    description: 'RAG-powered bilingual cooking assistant grounded in a database of over 10K localized recipes.',
    longDescription: `ResepAI is an AI conversational assistant that helps users cook with what they have.

Key features include:
- Retrieval-Augmented Generation (RAG) pipeline using LangChain.js and ChromaDB, grounding every answer in 10K+ localized Indonesian recipes
- Bilingual chat (Bahasa Indonesia / English) that understands natural-language ingredient queries
- Context-aware suggestions powered by Google Gemini API through a Node.js/Express backend
- React + Vite chat interface deployed on Netlify`,
    tech: ['React', 'Vite', 'Node.js', 'Express', 'LangChain', 'ChromaDB', 'Gemini API'],
    imageUrl: '/previews/resepai.png',
    liveUrl: 'https://recipe-chat.netlify.app/',
    repoUrl: 'https://github.com/ryanvp10/recipe-chatbot',
    delay: '100ms'
  },
  {
    slug: 'financial-tracker',
    title: 'Financial Tracker - Personal Finance App',
    description: 'Finance tracker with a Telegram bot that parses expenses from natural-language messages.',
    longDescription: `Financial Tracker is a personal finance application built around frictionless input.

Key features include:
- Telegram bot integration that automatically extracts and categorizes expenses from plain chat messages, no forms needed
- Custom Brutalist-style React dashboard with income vs expense and category breakdown charts
- Express + PostgreSQL REST API for transaction history and reporting
- Deployed frontend on Netlify`,
    tech: ['React', 'Vite', 'Recharts', 'Node.js', 'Express', 'PostgreSQL', 'Telegram Bot API'],
    imageUrl: '/previews/financial-tracker.png',
    liveUrl: 'https://personaltrac.netlify.app/',
    repoUrl: 'https://github.com/ryanvp10/personal-tracker',
    delay: '200ms'
  },
  {
    slug: 'tremorid',
    title: 'TremorID - Real-time Earthquake Monitor',
    description: 'Real-time Indonesia earthquake monitor with AI chat, 3D globe and Telegram alerts.',
    longDescription: `TremorID is a real-time earthquake monitoring webapp for Indonesia.

Key features include:
- Interactive maps plotting every recent BMKG earthquake: Leaflet 2D fallback plus a CesiumJS 3D globe locked to Indonesia
- Natural-language AI chat for asking about recent earthquakes
- Telegram bot (@TremorIDBot) pushing real-time alerts for quakes of magnitude 5.0 and above
- Bilingual UI (ID/EN) with translated locations, magnitude/depth filters and a browsable timeline
- Backend polls the BMKG API every 5 minutes; Node.js/Express + SQLite deployed on Hugging Face Spaces`,
    tech: ['React', 'Vite', 'CesiumJS', 'Leaflet', 'Node.js', 'Express', 'SQLite', 'Telegram Bot API'],
    imageUrl: '/previews/tremorid.png',
    liveUrl: 'https://tremorid.netlify.app/',
    repoUrl: 'https://github.com/ryanvp10/Tremorid',
    delay: '300ms'
  }
];

export const ABOUTBRIEF = [
  "I'm an instrumentation engineer (UGM) who builds and ships production web apps. For the past five years I've kept high-volume production lines running at Epson - root-cause analysis, preventive maintenance, and leading rapid-response repair teams. That discipline shows up in how I write software: measure first, fix the cause, make it reliable.",
  "Since then I've designed, built, and deployed full-stack applications end-to-end: an AI cooking assistant running a RAG pipeline, a finance tracker driven through a Telegram bot, and a real-time earthquake monitor with a 3D globe. Stack: React, TailwindCSS, Node.js, Express, PostgreSQL, LangChain, ChromaDB, Gemini API. AWS Certified Cloud Practitioner.",
  "Based in Cikarang, Indonesia (WIB, UTC+7) - comfortable overlapping EU mornings and US evenings. Open to junior frontend / full-stack roles, remote or local."
];

export const SKILLS = [
  {tech: ['React', 'Vite', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'LangChain', 'ChromaDB', 'Gemini API', 'AWS', 'Git']}
];

export const CERTIFICATIONS = [
  {
    name: 'AWS Certified Cloud Practitioner',
    image: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    link: 'https://www.credly.com/badges/8c11b72a-85c6-40c4-b006-299873f02df3/public_url'
  },
];

export const BUCKET_LIST = [
    { id: 1, item: "Work as a Software Engineer", done: false },
    { id: 2, item: "Working remotely from anywhere", done: false },
    { id: 3, item: "Visit Mekkah, Madinah, and Manchester", done: false },
    { id: 4, item: "Buy original jersey Manchester United", done: false },
    { id: 5, item: "Featured once in media", done: false },
    { id: 6, item: "Buy a car", done: false },
    { id: 7, item: "Live a month in Bali", done: false },
    { id: 8, item: "Build web portfolio", done: true },
    { id: 9, item: "Visit Labuan Bajo", done: false },
    { id: 10, item: "Run a half-marathon", done: false },
    { id: 11, item: "Visit Europe", done: false },
    { id: 12, item: "Buy a Macbook and Iphone", done: false },
    { id: 13, item: "Solve all easy LeetCode", done: false },
    { id: 14, item: "Get certified CCP", done: true },
];

export const SOCIALS = [
  { label: Github, url: 'https://github.com/ryanvp10'},
  { label: Linkedin, url: 'https://www.linkedin.com/in/ryansapta/'},
  { label: Instagram , url: 'https://www.instagram.com/ryansapta_/'},
  { label: Mail , url: 'mailto:ryansapta10@gmail.com'}
]
