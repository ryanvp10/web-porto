import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Goals', id: 'goals' },
];

export const PROJECTS = [
  {
    slug: 'recibot-app',
    title: 'Recibot - Recipe Chatbot',
    description: 'AI-powered chatbot that provides recipe suggestions and help you find the best recipes.',
    longDescription: `This project is an AI-powered recipe chatbot that helps users find recipes based on ingredients they have at home.
    the chatbot uses languange based on your mother languange to understand user queries and provide relevant recipe suggestions.

    Key features include:
    • Natural language processing to understand user queries.
    • Integration with a recipe API to fetch recipe data.
    • User-friendly chat interface built with Next.js.
    • With store near you and the up-to-date pricing.
    • Deployed on Vercel for fast and reliable access.
     The project showcases the use of modern web technologies and AI to create a useful tool for cooking enthusiasts.`,
    tech: ['Next.js', 'Tailwind', 'Vite', 'Prisma'],
    imageUrl: 'https://via.placeholder.com/600x300/1E293B/E2E8F0?text=Notion+Clone+Preview', 
    delay: '100ms'
  },
  {
    slug: 'splitbill-app',
    title: 'Split Bill - Split Bills Made Easy',
    description: 'An app to simplify splitting bills among friends and family using AI and OCR technology.',
    longDescription: `Split Bill is a mobile application designed to make splitting bills among friends and family effortless.
    
    Key features include:
    • User-friendly interface for adding expenses and participants.
    • Automatic calculation of individual shares, including tax and tip.
    • Expense history tracking for transparency.
    • Multi-currency support for international use.
    • Built with Kotlin for Android.
    The app aims to eliminate the hassle of manual calculations and ensure everyone pays their fair share.`,
    tech: ['Kotlin', 'Room', 'MaterialUI', 'Firebase'],
    imageUrl: 'https://via.placeholder.com/600x300/1E293B/E2E8F0?text=Dashboard+Preview', 
    delay: '200ms'
  },
  {
    slug: 'iOS Project',
    title: 'Coming Soon: iOS App',
    description: 'An exciting iOS application currently in development, aiming to revolutionize user experience on mobile devices.',
    longDescription: 'this iOS application is being developed to provide users with an innovative and seamless experience on their mobile devices.',
    tech: ['SwiftUI', 'Swift'],
    imageUrl: 'https://via.placeholder.com/600x300/1E293B/E2E8F0?text=Portfolio+Preview', 
    delay: '300ms'
  },
  {
    slug: 'Mini-Projects',
    title: 'Coming Soon: Mini Projects Collection',
    description: 'A collection of small-scale projects that demonstrate various programming concepts and technologies.',
    longDescription: 'A collection of mini projects showcasing different programming concepts and technologies, designed to provide practical examples and learning opportunities for developers.',
    tech: ['TypeScript', 'Next.js', 'Tailwind'],
    imageUrl: 'https://via.placeholder.com/600x300/1E293B/E2E8F0?text=OG+Generator+Preview', 
    delay: '400ms'
  }
];

export const ABOUTBRIEF = [
  "Hi i'm Ryan. For the past five years, I have specialized in automation machine maintenance where I developed skill to troubleshooting complex systems and ensuring zero downtime in high-pressure environments which has impact to my problem-solving skills and attention to detail.",
  "Now, I'm excited to transition into software development, bringing my analytical mindset and dedication to quality to create efficient and reliable applications. I'm passionate about learning new technologies and continuously improving my skills to deliver impactful solutions. Let's connect and explore how my unique blend of industrial experience and software skills can contribute to your team!"
];

export const SKILLS = [
  {tech: ['React', 'Vite', 'Recharts', 'Firebase', 'Tailwind', 'Next.js']}
];

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Cloud Practitioner",
    image: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png", // Replace with your actual image URL
    link: "https://www.credly.com/badges/8c11b72a-85c6-40c4-b006-299873f02df3/public_url" // Replace with your public link
  },
  // Add more badges here
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