import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/dashboardSlice';

const AddWidgetModal = ({ category, onClose }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name.trim()) {
      dispatch(addWidget({ category, name, text }));
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Widget to {category}</h2>
        <input
          className="border border-gray-300 p-2 mb-3 w-full rounded"
          placeholder="Widget Name"
          onChange={e => setName(e.target.value)}
        />
        <textarea
          className="border border-gray-300 p-2 mb-3 w-full rounded"
          placeholder="Widget Text"
          onChange={e => setText(e.target.value)}
        />
        <div className="flex justify-end space-x-3">
          <button className="text-gray-600 hover:underline" onClick={onClose}>Cancel</button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;