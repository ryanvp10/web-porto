import React from "react";
import { BUCKET_LIST } from "../../data/content.js";
import { CheckCircle, Clock } from "lucide-react";

const Goals = () => {
  const completedItems = BUCKET_LIST.filter((item) => item.done).length;
  const totalItems = BUCKET_LIST.length;
  const progressPercentage =
    totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  return (
    <>
      <ul className="space-y-3 mb-10">
        {BUCKET_LIST.map((item) => (
          <li
            key={item.id}
            className={`flex items-start p-3 rounded-lg transition-all duration-200 
        ${item.done ? "bg-green-800/20" : "bg-gray-700/40"}
      `}
          >
            {item.done ? (
              <CheckCircle
                size={18}
                className="text-green-400 mt-0.5 opacity-80"
              />
            ) : (
              <Clock size={18} className="text-yellow-300 mt-0.5 opacity-80" />
            )}

            <span
              className={`ml-3 text-gray-200 text-sm ${
                item.done ? "text-gray-400" : ""
              }`}
            >
              {item.item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-20 p-4 rounded-lg bg-gray-700/40 border border-gray-600/40">
        <h3 className="text-sm font-medium text-white mb-2">
          Progress: <span className="text-blue-400">{progressPercentage}%</span>
        </h3>

        <div className="w-full bg-gray-600/50 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-700"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <p className="mt-2 text-xs text-gray-400">
          ({completedItems} of {totalItems} goals done)
        </p>
      </div>
    </>
  );
};

export default Goals;
