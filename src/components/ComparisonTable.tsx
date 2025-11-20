'use client';

import { motion } from 'framer-motion';

interface ComparisonFeature {
  feature: string;
  ryft: boolean | string;
  competitors: {
    [key: string]: boolean | string;
  };
}

interface ComparisonTableProps {
  features: ComparisonFeature[];
  competitors: string[];
  className?: string;
}

export default function ComparisonTable({ 
  features, 
  competitors, 
  className = '' 
}: ComparisonTableProps) {
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const XIcon = () => (
    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? <CheckIcon /> : <XIcon />;
    }
    return <span className="text-sm text-navy-700">{value}</span>;
  };

  return (
    <motion.div
      className={`overflow-x-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <table className="w-full bg-white rounded-xl shadow-lg border border-navy-100 overflow-hidden">
        <thead>
          <tr className="bg-navy-50">
            <th className="text-left py-s4 px-s6 font-semibold text-navy-900">Feature</th>
            <th className="text-center py-s4 px-s4 font-semibold text-accent-600 bg-accent-50">RYFT</th>
            {competitors.map((competitor, index) => (
              <th key={index} className="text-center py-s4 px-s4 font-semibold text-navy-700">
                {competitor}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <motion.tr
              key={index}
              className="border-t border-navy-100 hover:bg-navy-25 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <td className="py-s4 px-s6 font-medium text-navy-800">
                {feature.feature}
              </td>
              <td className="text-center py-s4 px-s4 bg-accent-25">
                {renderCell(feature.ryft)}
              </td>
              {competitors.map((competitor, compIndex) => (
                <td key={compIndex} className="text-center py-s4 px-s4">
                  {renderCell(feature.competitors[competitor] || false)}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}