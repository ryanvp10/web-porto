import React from 'react';
import { BUCKET_LIST } from '../../data/content.js';
import { CheckCircle, Clock } from 'lucide-react';

const Goals = () => {
  const completedItems = BUCKET_LIST.filter(item => item.done).length;
  const totalItems = BUCKET_LIST.length;
  const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    return (
        <>
        <ul className="space-y-4 mb-10">
                    {BUCKET_LIST.map(item => (
                        <li key={item.id} className={`flex items-start p-4 rounded-xl transition-all duration-300 ${item.done ? 'bg-green-900/20 border-l-4 border-green-500' : 'bg-gray-700/50 border-l-4 border-yellow-500'}`}>
                            {item.done ? (
                                <CheckCircle size={20} className="text-green-400 mt-1 shrink-0" />
                            ) : (
                                <Clock size={20} className="text-yellow-400 mt-1 shrink-0" />
                            )}
                            <span className={`ml-4 text-gray-200 text-md ${item.done ? ' text-gray-400' : ''}`}>
                                {item.item}
                            </span>
                        </li>
                    ))}
        </ul>

        <div className="mt-40 p-3 rounded-xl bg-gray-700/50 border border-gray-600 shadow-xl">
                    <h3 className="text-md font-semibold text-white mb-3 flex items-center gap-2">
                        Overall Progress: <span className="text-blue-400">{progressPercentage}%</span> Complete
                    </h3>
                    <div className="w-full bg-gray-600 rounded-full h-3">
                        <div 
                            className="bg-linear-to-r from-blue-500 to-cyan-400 h-3 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                            role="progressbar"
                            aria-valuenow={progressPercentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                    <p className="mt-3 text-sm text-gray-400">
                        ({completedItems} of {totalItems} goals achieved)
                    </p>
                </div>
            </>
    
    )
};

export default Goals;