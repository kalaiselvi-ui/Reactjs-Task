import { list } from "postcss";
import React, { useEffect, useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, input]);
    console.log(todoList);
    const updatedList = [...todoList, input];
    localStorage.setItem("list", JSON.stringify(updatedList));
    setInput("");
  };

  useEffect(() => {
    const savedList = localStorage.getItem("list");
    if (savedList) {
      setTodoList(JSON.parse(savedList));
    }
  }, []);

  const handleDelete = (indexToDelete) => {
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="bg-white  rounded-lg shadow-md max-w-md w-full min-h-[300px]">
        <h2 className="text-bold font-semibold text-3xl">Add Todo List </h2>

        <div className="p-4">
          <form className="flex justify-between" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="add todo list..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="pl-5 border border-gray-400 w-full"
            />
            <button
              type="submit"
              className="w-28 py-1 px-3 bg-green-600 rounded-r-md"
            >
              Add
            </button>
          </form>
        </div>
        <div className="mt-20 mb-10">
          <h2 className="text-bold font-semibold text-xl"> List Items</h2>
          <ul>
            {todoList.map((item, index) => (
              <li key={index} onClick={() => handleDelete(index)}>
                {index + 1}. {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Input;
