
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(657);

  useEffect(() => {
    // Get current count from localStorage or start at 657
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      setVisitorCount(parseInt(storedCount));
    } else {
      localStorage.setItem('visitorCount', '657');
    }

    // Increment visitor count on page load
    const newCount = storedCount ? parseInt(storedCount) + 1 : 658;
    setVisitorCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  return (
    <div className="flex items-center justify-center py-4 bg-gray-100 border-t border-gray-200">
      <div className="flex items-center space-x-2 text-gray-600">
        <Calculator className="w-4 h-4" />
        <span className="text-sm font-medium">
          Visitors: {visitorCount.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default VisitorCounter;
