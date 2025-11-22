import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '../../data/content';

const BlogSection = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-100 animate-fade-in">Recent Posts</h2>
    <div className="space-y-0">
      {BLOG_POSTS.map((post, idx) => (
        <div 
          key={idx} 
          style={{ animationDelay: post.delay }}
          className="animate-fade-up group relative flex flex-col gap-2 rounded-xl border border-transparent px-4 py-4 transition-all hover:bg-gray-900/50 sm:flex-row sm:items-baseline sm:gap-6 hover:border-gray-800"
        >
          <div className="shrink-0 text-sm text-gray-500 w-32 font-mono">{post.date}</div>
          <div className="flex-grow">
            <h3 className="text-base font-semibold text-gray-200 group-hover:text-primary-400 transition-colors">
              {post.title}
            </h3>
            <p className="mt-1 text-sm text-gray-400 line-clamp-2">
              {post.description}
            </p>
            <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><div className="h-1 w-1 rounded-full bg-gray-500"/> {post.views}</span>
              <span className="text-primary-500/0 group-hover:text-primary-500/100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 flex items-center gap-1 font-medium">
                Read more <ArrowUpRight size={10} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BlogSection;