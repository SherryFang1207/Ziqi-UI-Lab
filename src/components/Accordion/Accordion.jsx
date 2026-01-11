import React, { useState } from "react";
import { Plus, Minus, Star } from "lucide-react";
import "./accordion.css";
/**
 * 骨架屏组件 (Skeleton Screen)
 * 练习搜索关键词: "React Skeleton Loader Tailwind"
 */
export const FAQAccordionSkeleton = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl max-w-[600px] w-full mx-auto animate-pulse">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-slate-200 p-5 rounded-full"></div>
        <div className="h-8 bg-slate-200 rounded-md w-24"></div>
      </div>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="border-b border-purple-50 py-5 last:border-none"
        >
          <div className="flex justify-between items-center">
            <div className="h-5 bg-slate-200 rounded w-3/4"></div>
            <div className="h-6 w-6 bg-slate-100 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-purple-100 last:border-none py-5">
      <button
        className="flex w-full items-center justify-between text-left group focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span
          className={`font-bold transition-colors duration-300 ${
            isOpen ? "text-purple-600" : "text-slate-800"
          } group-hover:text-purple-600`}
        >
          {question}
        </span>

        {/* 图标旋转容器 */}
        <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
          {/* Minus 图标 (仅在 Open 时完全显示并旋转) */}
          <div
            className={`absolute transition-all duration-500 transform ${
              isOpen
                ? "rotate-0 opacity-100 scale-100"
                : "rotate-90 opacity-0 scale-50"
            }`}
          >
            <Minus className="text-slate-900 w-6 h-6" />
          </div>
          {/* Plus 图标 (仅在 Closed 时显示) */}
          <div
            className={`absolute transition-all duration-500 transform ${
              isOpen
                ? "-rotate-90 opacity-0 scale-50"
                : "rotate-0 opacity-100 scale-100"
            }`}
          >
            <Plus className="text-purple-600 w-6 h-6" />
          </div>
        </div>
      </button>

      {/* CSS Grid 魔法实现高度动画 (0fr -> 1fr) */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-500 leading-relaxed pb-2">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQAccordion = ({ items = [], isLoading = false }) => {
  const [openIndex, setOpenIndex] = useState(0);

  // 如果处于加载态，渲染骨架屏
  if (isLoading) return <FAQAccordionSkeleton />;

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl max-w-[600px] w-full mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-purple-600 p-2 rounded-full shadow-lg shadow-purple-200">
          <Star className="text-white w-6 h-6 fill-current" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          FAQs
        </h1>
      </div>

      <div className="divide-y divide-purple-50">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};
