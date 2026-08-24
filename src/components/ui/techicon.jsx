import { Cpu, Database, BarChart3 } from 'lucide-react';
import { siReact, siTailwindcss, siNextdotjs, siTypescript, siKotlin, siFirebase, siNodedotjs, siExpress, siPostgresql, siLangchain, siGooglegemini, siAmazonwebservices, siGit, siCesium, siLeaflet, siSqlite, siTelegram } from 'simple-icons';

const ICON_MAP = {
  'React': siReact,
  'Tailwind': siTailwindcss,
  'TailwindCSS': siTailwindcss,
  'Next.js': siNextdotjs,
  'TypeScript': siTypescript,
  'Kotlin': siKotlin,
  'Firebase': siFirebase,
  'Node.js': siNodedotjs,
  'Express': siExpress,
  'PostgreSQL': siPostgresql,
  'LangChain': siLangchain,
  'Gemini API': siGooglegemini,
  'AWS': siAmazonwebservices,
  'Git': siGit,
  'CesiumJS': siCesium,
  'Leaflet': siLeaflet,
  'SQLite': siSqlite,
  'Telegram Bot API': siTelegram,
};

const TechIcon = ({ name, className = 'w-6 h-6' }) => {
  const renderIcon = () => {
    if (name === 'Vite') {
      return (
        <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' fill='none' className={className}>
          <path d='M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z' fill='#9575CD' />
          <path d='M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z' fill='#FFEA83' />
        </svg>
      );
    }
    const icon = ICON_MAP[name];
    if (icon) {
      return (
        <svg viewBox='0 0 24 24' className={className} role='img' aria-hidden='true'>
          <path fill={'#' + icon.hex} d={icon.path} />
        </svg>
      );
    }
    if (name === 'ChromaDB') return <Database size={20} className='text-gray-300' />;
    if (name === 'Recharts') return <BarChart3 size={20} className='text-gray-300' />;
    // Fallback for less common/custom items
    return <Cpu size={20} className='text-gray-400' />;
  };

  return <span className='inline-block shrink-0'>{renderIcon()}</span>;
};

export default TechIcon;
