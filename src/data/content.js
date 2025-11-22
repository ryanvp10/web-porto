export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Bucket List', id: 'bucketlist' },
];

export const PROJECTS = [
  {
    title: 'Notion Clone',
    description: 'A block-based note taking app with real-time collaboration features using WebSockets.',
    tech: ['Next.js', 'Tailwind', 'Socket.io', 'Prisma'],
    stars: '1.2k',
    delay: '100ms'
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Comprehensive analytics dashboard with dark mode, charts, and order management.',
    tech: ['React', 'Vite', 'Recharts', 'Firebase'],
    stars: '843',
    delay: '200ms'
  },
  {
    title: 'DevPortfolio v2',
    description: 'The current website you are viewing. Built with performance and accessibility in mind.',
    tech: ['React', 'Tailwind', 'CSS Modules'],
    stars: '2.1k',
    delay: '300ms'
  },
  {
    title: 'Open Graph Generator',
    description: 'Serverless function to generate dynamic OG images for blog posts on the fly.',
    tech: ['TypeScript', 'Puppeteer', 'Vercel'],
    stars: '320',
    delay: '400ms'
  }
];

export const BLOG_POSTS = [
  {
    title: 'Understanding React Server Components',
    views: '12,304 views',
    date: 'Nov 12, 2024',
    description: 'A deep dive into RSC, how they differ from SSR, and when to actually use them.',
    delay: '100ms'
  },
  {
    title: 'Mastering Tailwind CSS Architecture',
    views: '8,902 views',
    date: 'Oct 28, 2024',
    description: 'Best practices for scaling Tailwind in large codebases without creating a mess.',
    delay: '200ms'
  },
  {
    title: 'Why I switched to Vim',
    views: '25,100 views',
    date: 'Sep 15, 2024',
    description: 'The productivity boost is real, but the learning curve is steep.',
    delay: '300ms'
  }
];