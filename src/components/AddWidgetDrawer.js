import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/dashboardSlice';

const AddWidgetDrawer = ({ category, onClose }) => {
  const [activeTab, setActiveTab] = useState('CPSM');
  const [widgets, setWidgets] = useState({
    widget1: false,
    widget2: false
  });
  const [formInputs, setFormInputs] = useState({
    widget1: { name: '', text: '' },
    widget2: { name: '', text: '' }
  });
  const dispatch = useDispatch();

  const categories = ['CPSM', 'CWPP', 'IMG', 'TICKET'];

  const handleInputChange = (id, field, value) => {
    setFormInputs(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const handleConfirm = () => {
    Object.entries(widgets).forEach(([id, isChecked]) => {
      if (isChecked) {
        const { name, text } = formInputs[id];
        dispatch(addWidget({ category: activeTab, name, text }));
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex z-50">
      <div className="bg-white w-96 h-full shadow-lg p-4 overflow-y-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Add Widget</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600">✖</button>
        </div>

        <div className="flex space-x-2 mb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1 rounded ${activeTab === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {['widget1', 'widget2'].map(widgetId => (
            <div key={widgetId} className="border p-3 rounded shadow-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={widgets[widgetId]}
                  onChange={() => setWidgets(prev => ({ ...prev, [widgetId]: !prev[widgetId] }))}
                />
                <span className="font-semibold capitalize">{widgetId.replace('widget', 'Widget ')}</span>
              </label>
              {widgets[widgetId] && (
                <div className="mt-2">
                  <input
                    className="border p-2 mb-2 w-full rounded"
                    placeholder="Widget Name"
                    value={formInputs[widgetId].name}
                    onChange={e => handleInputChange(widgetId, 'name', e.target.value)}
                  />
                  <textarea
                    className="border p-2 w-full rounded"
                    placeholder="Widget Text"
                    value={formInputs[widgetId].text}
                    onChange={e => handleInputChange(widgetId, 'text', e.target.value)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div className="flex-1 bg-black bg-opacity-40" onClick={onClose}></div>
    </div>
  );
};

export default AddWidgetDrawer;