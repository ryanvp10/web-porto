export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Bucket List', id: 'bucketlist' },
];

export const PROJECTS = [
  {
    slug: 'notion-clone',
    title: 'Notion Clone',
    description: 'A block-based note taking app with real-time collaboration features using WebSockets.',
    longDescription: `This project is a full-featured clone of Notion, focusing on the block-based editing experience. 
    
    Key features include:
    • Real-time collaboration using Socket.io, allowing multiple users to edit the same document simultaneously.
    • A recursive block architecture to support nested content (lists inside toggles, etc.).
    • Drag-and-drop functionality for rearranging blocks.
    • Slash commands for quickly inserting different block types.
    
    The backend is built with Node.js and Prisma, ensuring efficient data storage and retrieval.`,
    tech: ['Next.js', 'Tailwind', 'Socket.io', 'Prisma'],
    stars: '1.2k',
    imageUrl: 'https://via.placeholder.com/600x300/1E293B/E2E8F0?text=Notion+Clone+Preview', 
    delay: '100ms'
  },
  {
    slug: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    description: 'Comprehensive analytics dashboard with dark mode, charts, and order management.',
    longDescription: `A powerful dashboard designed for e-commerce store owners to track performance metrics in real-time.
    
    The dashboard includes:
    • Interactive charts using Recharts to visualize sales data, user growth, and revenue.
    • A fully responsive datatable for order management with filtering and sorting.
    • Light/Dark mode toggle using Tailwind CSS class strategies.
    • Firebase authentication and Firestore for real-time data updates.`,
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

export const FOOTER_LINKS = {
    general: [
        { label: 'Home', href: '#' },
        { label: 'Projects', href: '#' },
        { label: 'About', href: '#' },
        { label: 'Bucket List', href: '#' }
    ],
    website: [
        { label: 'Attribution', href: '#' },
        { label: 'Statistics', href: '#' },
        { label: 'Analytics', href: '#' }
    ]
}