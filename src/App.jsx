import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemsList from "./pages/ItemsList";
import ItemDetails from "./pages/ItemDetails";
import AddItem from "./pages/AddItem";
import UpdateItem from "./pages/UpdateItem";

function App() {
  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4 bg-gray-800 shadow-lg rounded-lg p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-blue-400"
          >
            Dashboard
          </Link>
          <Link
            to="/items"
            className="text-white text-lg font-semibold hover:text-blue-400"
          >
            Items
          </Link>
          <Link
            to="/add"
            className="text-white text-lg font-semibold hover:text-blue-400"
          >
            Add Item
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/items" element={<ItemsList />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/update/:id" element={<UpdateItem />} />
      </Routes>
    </div>
  );
}

export default App;
