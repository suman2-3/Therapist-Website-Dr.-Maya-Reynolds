import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white/40 backdrop-blur-sm border border-neutral-200/50 rounded-lg overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/20 transition-colors"
          >
            <span 
              className="text-xl md:text-2xl text-neutral-800 pr-4"
              style={{ fontFamily: 'Crimson Pro, serif' }}
            >
              {item.question}
            </span>
            <ChevronDown
              className={`w-6 h-6 text-neutral-600 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-8 pb-6">
              <p className="text-neutral-700 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
