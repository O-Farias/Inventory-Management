import React from "react";
import { useLocalStorage } from "../store";
import { Link, useParams } from "react-router-dom";

const ItemDetails = () => {
  const [items] = useLocalStorage("items", []);
  const { id } = useParams();
  const item = items.find((i) => i.id === parseInt(id));

  if (!item) {
    return <div className="text-gray-300">Item not found</div>;
  }

  return (
    <div className="p-4 bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Item Details</h2>
      <p className="mb-2 text-gray-300">
        <strong className="text-gray-400">Name:</strong> {item.name}
      </p>
      <p className="mb-2 text-gray-300">
        <strong className="text-gray-400">Quantity:</strong> {item.quantity}
      </p>
      <p className="mb-2 text-gray-300">
        <strong className="text-gray-400">Price:</strong> {item.price}
      </p>
      <p className="mb-2 text-gray-300">
        <strong className="text-gray-400">Category:</strong> {item.category}
      </p>
      <p className="mb-4 text-gray-300">
        <strong className="text-gray-400">Description:</strong>{" "}
        {item.description}
      </p>
      <Link to={`/update/${item.id}`} className="text-blue-400 hover:underline">
        Update
      </Link>
    </div>
  );
};

export default ItemDetails;
