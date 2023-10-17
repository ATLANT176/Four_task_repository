function calculateBalance (incomes, expenses) {
    const totalIncomes = incomes.sum;
    const totalExpenses = expenses.sum;
    const balance = totalIncomes - totalExpenses;
    return balance;
}

console.log(calculateBalance(20, 10));