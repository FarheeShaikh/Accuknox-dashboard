import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/dashboardSlice';

const Widget = ({ id, name, text, category }) => {
  const dispatch = useDispatch();
  return (
    <div className="border border-gray-300 bg-white p-4 rounded-lg shadow relative">
      <button
        className="absolute top-2 right-2 text-red-600 hover:text-red-800"
        onClick={() => dispatch(removeWidget({ category, id }))}
      >
        ❌
      </button>
      <h3 className="font-bold text-lg text-blue-600">{name}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default Widget;