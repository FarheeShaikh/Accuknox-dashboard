import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from './components/Category';
import { setSearchQuery } from './redux/dashboardSlice';

function App() {
  const categories = useSelector(state => state.dashboard.categories);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Dynamic Dashboard</h1>
      <input
        type="text"
        placeholder="Search Widgets..."
        className="border p-2 mb-6 w-full rounded shadow-sm"
        onChange={e => dispatch(setSearchQuery(e.target.value))}
      />
      {Object.keys(categories).map(category => (
        <Category key={category} title={category} widgets={categories[category]} />
      ))}
    </div>
  );
}

export default App;