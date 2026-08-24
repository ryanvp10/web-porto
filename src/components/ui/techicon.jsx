import { Cpu, Database, BarChart3 } from 'lucide-react';
import { siReact, siVite, siTailwindcss, siNextdotjs, siTypescript, siKotlin, siFirebase, siNodedotjs, siExpress, siPostgresql, siLangchain, siGooglegemini, siAmazonwebservices, siGit, siCesium, siLeaflet, siSqlite, siTelegram } from 'simple-icons';

const ICON_MAP = {
  'React': siReact,
  'Vite': siVite,
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
