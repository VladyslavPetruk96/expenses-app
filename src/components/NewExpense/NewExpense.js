import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [isActiveForm, setIsActiveForm] = useState(false);

  const saveExpanseDataHandler = (enteredExpanseData) => {
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    onAddExpense(expanseData);
    setIsActiveForm(false);
  };

  const openFormHandler = () => {
    setIsActiveForm(true);
  };

  const closeFormHandler = () => {
    setIsActiveForm(false);
  };

  return (
    <div className="new-expense">
      {!isActiveForm && (
        <button onClick={openFormHandler}>Add New Expense</button>
      )}
      {isActiveForm && (
        <ExpenseForm
          onSaveExpanseData={saveExpanseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
