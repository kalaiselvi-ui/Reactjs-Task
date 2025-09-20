import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useExpenseStore = create()(
  persist(
    (set) => ({
      expenses: [],
      addExpenses: (expense) => {
        set((state) => ({ expenses: [...state.expenses, expense] }));
      },
      removeExpenses: (expensesId) => {
        set((state) => ({
          expenses: state.expenses.filter((exp) => exp.id !== expensesId),
        }));
      },
    }),
    {
      name: "expense-tracker",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
