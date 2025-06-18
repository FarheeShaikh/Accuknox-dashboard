
// Updated React component flow to support drawer with pre-step functionality
// Key file: Category.js (we'll add drawer logic here)

// Import necessary hooks and components
import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetDrawer from './AddWidgetDrawer';
import { useSelector } from 'react-redux';

const Category = ({ title, widgets }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const search = useSelector(state => state.dashboard.searchQuery.toLowerCase());

  return (
    <div className="mb-10 bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
          onClick={() => setShowDrawer(true)}
        >
          + Add Widget
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {widgets
          .filter(w => w.name.toLowerCase().includes(search))
          .map(w => <Widget key={w.id} {...w} category={title} />)}
      </div>

      {showDrawer && (
        <AddWidgetDrawer
          category={title}
          onClose={() => setShowDrawer(false)}
        />
      )}
    </div>
  );
};

export default Category;