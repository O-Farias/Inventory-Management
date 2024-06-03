import React from "react";
import { useLocalStorage } from "../store";
import { Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaClock,
  FaExclamationTriangle,
  FaList,
} from "react-icons/fa";

const Dashboard = () => {
  const [items] = useLocalStorage("items", []);

  const totalItems = items.length;
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const recentItems = items.filter(
    (item) => Date.now() - item.id <= 10 * 24 * 60 * 60 * 1000
  );
  const lowStockItems = items.filter((item) => item.quantity < 10);

  return (
    <div className="p-4 bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Dashboard</h2>
      <div className="space-y-4">
        <div className="flex items-center text-gray-300">
          <FaBoxOpen className="mr-2 text-blue-400" />
          <span className="font-semibold">Total different items:</span>
          <span className="ml-2">{totalItems}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <FaList className="mr-2 text-blue-400" />
          <span className="font-semibold">Total items in stock:</span>
          <span className="ml-2">{totalQuantity}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <FaClock className="mr-2 text-blue-400" />
          <span className="font-semibold">
            Items added in the last 10 days:
          </span>
          <span className="ml-2">{recentItems.length}</span>
        </div>
        <ul className="ml-8 text-gray-400">
          {recentItems.map((item) => (
            <li key={item.id}>
              <Link
                to={`/items/${item.id}`}
                className="text-blue-400 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center text-gray-300">
          <FaExclamationTriangle className="mr-2 text-yellow-400" />
          <span className="font-semibold">
            Items with less than 10 in stock:
          </span>
          <span className="ml-2">{lowStockItems.length}</span>
        </div>
        <ul className="ml-8 text-gray-400">
          {lowStockItems.map((item) => (
            <li key={item.id}>
              <Link
                to={`/items/${item.id}`}
                className="text-blue-400 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
