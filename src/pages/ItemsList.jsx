import React from "react";
import { useLocalStorage } from "../store";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ItemsList = () => {
  const [items, setItems] = useLocalStorage("items", []);

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="p-4 bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Items List</h2>
      <table className="min-w-full bg-gray-900 border border-gray-700 rounded-md shadow-lg">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-gray-100">Name</th>
            <th className="border px-4 py-2 text-gray-100">Quantity</th>
            <th className="border px-4 py-2 text-gray-100">Price</th>
            <th className="border px-4 py-2 text-gray-100">Category</th>
            <th className="border px-4 py-2 text-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-700 transition ease-in-out duration-150"
            >
              <td className="border px-4 py-2 text-gray-300">{item.name}</td>
              <td className="border px-4 py-2 text-gray-300">
                {item.quantity}
              </td>
              <td className="border px-4 py-2 text-gray-300">{item.price}</td>
              <td className="border px-4 py-2 text-gray-300">
                {item.category}
              </td>
              <td className="border px-4 py-2 flex space-x-2 items-center">
                <Link
                  to={`/items/${item.id}`}
                  className="text-blue-400 hover:underline flex items-center"
                >
                  <FaEye className="mr-1" /> View
                </Link>
                <Link
                  to={`/update/${item.id}`}
                  className="text-blue-400 hover:underline flex items-center"
                >
                  <FaEdit className="mr-1" /> Update
                </Link>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 flex items-center transition ease-in-out duration-150"
                >
                  <FaTrash className="mr-1" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsList;
