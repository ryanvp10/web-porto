export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Bucket List', id: 'bucketlist' },
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
    • User-friendly chat interface built with React.
    • With store near you and the up-to-date pricing.
    • Deployed on Vercel for fast and reliable access.
     The project showcases the use of modern web technologies and AI to create a useful tool for cooking enthusiasts.`,
    tech: ['React', 'Tailwind', 'Socket.io', 'Prisma'],
    stars: '1.2k',
    imageUrl: 'https://via.placeholder.com/600x300/1E293B/E2E8F0?text=Notion+Clone+Preview', 
    delay: '100ms'
  },
  {
    slug: 'billbot',
    title: 'BillBot - Split Bills Made Easy',
    description: 'An app to simplify splitting bills among friends and family using AI and OCR technology.',
    longDescription: `BillBot is a mobile application designed to make splitting bills among friends and family effortless.
    
    Key features include:
    • User-friendly interface for adding expenses and participants.
    • Automatic calculation of individual shares, including tax and tip.
    • Expense history tracking for transparency.
    • Multi-currency support for international use.
    • Built with Kotlin for Android.
    The app aims to eliminate the hassle of manual calculations and ensure everyone pays their fair share.`,
    tech: ['React', 'Vite', 'Recharts', 'Firebase'],
    stars: '843',
    imageUrl: 'https://via.placeholder.com/600x300/1E293B/E2E8F0?text=Dashboard+Preview', 
    delay: '200ms'
  },
  {
    slug: 'devportfolio-v2',
    title: 'DevPortfolio v2',
    description: 'The current website you are viewing. Built with performance and accessibility in mind.',
    longDescription: `My personal portfolio website, designed to showcase my projects and writing.
    
    Technical highlights:
    • Built with React and Vite for a lightning-fast development experience.
    • Custom CSS animations for the "spotlight" card effects and smooth page transitions.
    • Fully accessible components following WAI-ARIA guidelines.
    • Dynamic routing simulation for a seamless single-page application feel.`,
    tech: ['React', 'Tailwind', 'CSS Modules'],
    stars: '2.1k',
    imageUrl: 'https://via.placeholder.com/600x300/1E293B/E2E8F0?text=Portfolio+Preview', 
    delay: '300ms'
  },
  {
    slug: 'opengraph-generator',
    title: 'Open Graph Generator',
    description: 'Serverless function to generate dynamic OG images for blog posts on the fly.',
    longDescription: `A utility tool that automatically generates social media preview images (Open Graph images) for blog posts.
    
    How it works:
    • It uses Puppeteer to render a React component into a headless Chrome instance.
    • Takes query parameters (title, date, tags) to customize the image.
    • Deployed as a Vercel Serverless Function for on-demand generation.
    • Heavily cached to ensure fast load times for social media crawlers.`,
    tech: ['TypeScript', 'Puppeteer', 'Vercel'],
    stars: '320',
    imageUrl: 'https://via.placeholder.com/600x300/1E293B/E2E8F0?text=OG+Generator+Preview', 
    delay: '400ms'
  }
];
