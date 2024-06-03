import React from "react";
import { useLocalStorage } from "../store";
import ItemForm from "../components/ItemForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddItem = () => {
  const [items, setItems] = useLocalStorage("items", []);
  const navigate = useNavigate();

  const addItem = (item) => {
    const newItem = { ...item, id: Date.now() };
    setItems([...items, newItem]);
    toast.success("Item added successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { width: "300px", whiteSpace: "nowrap" },
    });
    navigate("/items");
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Add Item</h2>
      <ItemForm onSubmit={addItem} />
    </div>
  );
};

export default AddItem;
