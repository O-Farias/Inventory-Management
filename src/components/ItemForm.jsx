import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  FaBox,
  FaTag,
  FaDollarSign,
  FaThLarge,
  FaInfoCircle,
} from "react-icons/fa";

const ItemForm = ({ onSubmit, initialData = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: initialData,
  });

  const onSubmitForm = (data) => {
    try {
      onSubmit(data);
    } catch (error) {
      toast.error("Failed to add item. Please try again.");
      setError("formError", {
        message: "Failed to add item. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      <div className="mb-4">
        <label className="block text-gray-300 font-semibold">Name:</label>
        <div className="flex items-center bg-gray-900 rounded-md shadow-sm border border-gray-600">
          <FaBox className="mx-2 text-gray-400" />
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-2 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-md"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 font-semibold">Quantity:</label>
        <div className="flex items-center bg-gray-900 rounded-md shadow-sm border border-gray-600">
          <FaTag className="mx-2 text-gray-400" />
          <input
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 1, message: "Quantity must be at least 1" },
            })}
            className="w-full px-3 py-2 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-md"
          />
        </div>
        {errors.quantity && (
          <p className="text-red-500 text-sm">{errors.quantity.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 font-semibold">Price:</label>
        <div className="flex items-center bg-gray-900 rounded-md shadow-sm border border-gray-600">
          <FaDollarSign className="mx-2 text-gray-400" />
          <input
            type="number"
            {...register("price", {
              required: "Price is required",
              min: { value: 0.01, message: "Price must be at least 0.01" },
            })}
            className="w-full px-3 py-2 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-md"
          />
        </div>
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 font-semibold">Category:</label>
        <div className="flex items-center bg-gray-900 rounded-md shadow-sm border border-gray-600">
          <FaThLarge className="mx-2 text-gray-400" />
          <input
            type="text"
            {...register("category", { required: "Category is required" })}
            className="w-full px-3 py-2 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-md"
          />
        </div>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 font-semibold">
          Description:
        </label>
        <div className="flex items-center bg-gray-900 rounded-md shadow-sm border border-gray-600">
          <FaInfoCircle className="mx-2 text-gray-400" />
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full px-3 py-2 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-md"
          />
        </div>
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
      >
        Submit
      </button>
    </form>
  );
};

export default ItemForm;
