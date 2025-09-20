import React, { useEffect, useState } from "react";
import { useExpenseStore } from "../store/expenseStore";
import { TbTrash } from "react-icons/tb";

const ExpenseTracker = () => {
  const [expenseInput, setExpenseInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [search, setSearch] = useState("");
  const { expenses, addExpenses, removeExpenses, searchFilter } =
    useExpenseStore();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseInput.title.trim() === "") {
      alert("Title is required");
      return; // stop submission
    }
    addExpenses({ id: Date.now(), ...expenseInput });
    console.log(expenseInput);
    setExpenseInput({ title: "", amount: "", date: "" });
  };

  const totalAmount = expenses.reduce(
    (acc, exp) => acc + Number(exp.amount),
    0
  );

  return (
    <div className="h-full my-20 flex flex-col justify-center items-center">
      <div className="max-w-[580px] w-full">
        <form
          className="bg-white rounded-lg shadow-md w-full min-h-[300px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-semibold text-gray-900">
            Add New Expense
          </h1>
          <div className="md:p-10 p-5 my-5">
            <div className="flex md:gap-10 md:flex-row flex-col gap-2 mb-4">
              <label htmlFor="" className="min-w-14">
                {" "}
                Title:
              </label>
              <input
                type="text"
                placeholder="enter expense title"
                name="title"
                className="pl-5 border border-gray-400 w-full"
                onChange={handleChange}
                value={expenseInput.title}
                required
              />
            </div>
            <div className="flex md:gap-10 md:flex-row flex-col gap-2 mb-4">
              <label htmlFor="" className="min-w-14">
                Amount:
              </label>
              <input
                type="number"
                placeholder="enter expense amount"
                name="amount"
                onChange={handleChange}
                value={expenseInput.amount}
                className="pl-5 border border-gray-400 w-full"
              />
            </div>
            <div className="flex md:gap-10 md:flex-row flex-col gap-2 mb-4">
              <label htmlFor="" className="min-w-14">
                Date:
              </label>
              <input
                type="date"
                name="date"
                placeholder="enter expense date"
                onChange={handleChange}
                value={expenseInput.date}
                className="pl-5 border border-gray-400 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 rounded-md text-white transition duration-200 mt-5 px-10 py-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto mt-10">
        <input
          type="text"
          placeholder="search by title"
          className="border border-gray-200 mb-5 pl-5 max-w-[500px] h-10 w-full"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-yellow-500 text-white">
            <tr>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Amount</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {expenses
              .filter((exp) =>
                exp.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((exp) => (
                <tr key={exp.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 text-gray-400">
                    {exp.title}
                  </td>
                  <td className="border px-4 py-2 font-xl text-gray-700">
                    <span className="text-sm text-gray-400">AED</span>{" "}
                    {exp.amount}
                  </td>
                  <td className="border px-4 py-2 text-xs">{exp.date}</td>
                  <td
                    className="border px-4 py-2"
                    onClick={() => removeExpenses(exp.id)}
                  >
                    <TbTrash className="text-red-600" />
                  </td>
                </tr>
              ))}
            <tr>
              <td
                className="py-2 px-4 text-right font-semibold text-gray-900"
                colSpan={4}
              >
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>AED {totalAmount}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTracker;
