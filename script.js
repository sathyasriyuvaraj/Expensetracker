document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');
    
    let expenses = [];

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const expenseName = document.getElementById('expense-name').value;
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

        if (expenseName && expenseAmount) {
            const expense = {
                name: expenseName,
                amount: expenseAmount
            };

            expenses.push(expense);
            updateExpenses();
            expenseForm.reset();
        }
    });

    function updateExpenses() {
        expenseList.innerHTML = '';

        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${expense.name} - $${expense.amount.toFixed(2)}
            <button onclick="removeExpense(${index})">Remove</button>`;
            expenseList.appendChild(li);
        });

        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        totalAmount.textContent = total.toFixed(2);
    }

    window.removeExpense = (index) => {
        expenses.splice(index, 1);
        updateExpenses();
    };
});
