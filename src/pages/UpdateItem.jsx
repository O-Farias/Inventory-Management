import React from "react";
import { useLocalStorage } from "../store";
import ItemForm from "../components/ItemForm";
import { useNavigate, useParams } from "react-router-dom";

const UpdateItem = () => {
  const [items, setItems] = useLocalStorage("items", []);
  const navigate = useNavigate();
  const { id } = useParams();
  const item = items.find((i) => i.id === parseInt(id));

  const updateItem = (updatedItem) => {
    const updatedItems = items.map((i) =>
      i.id === parseInt(id) ? { ...i, ...updatedItem } : i
    );
    setItems(updatedItems);
    navigate("/items");
  };

  if (!item) {
    return <div className="text-gray-300">Item not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Update Item</h2>
      <ItemForm onSubmit={updateItem} initialData={item} />
    </div>
  );
};

export default UpdateItem;
