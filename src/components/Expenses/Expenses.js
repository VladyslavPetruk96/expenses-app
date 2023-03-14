import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [choosenYear, setChoosenyear] = useState("2021");

  const userFilterHandler = (selectedYear) => {
    setChoosenyear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === choosenYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={choosenYear}
          onYearFilter={userFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
