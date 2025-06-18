import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import { useSelector } from 'react-redux';

const Category = ({ title, widgets }) => {
  const [showModal, setShowModal] = useState(false);
  const search = useSelector(state => state.dashboard.searchQuery.toLowerCase());

  return (
    <div className="mb-10 bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
          onClick={() => setShowModal(true)}
        >
          + Add Widget
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {widgets
          .filter(w => w.name.toLowerCase().includes(search))
          .map(w => <Widget key={w.id} {...w} category={title} />)}
      </div>
      {showModal && <AddWidgetModal category={title} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Category;