export function validateExpense(expense) {
    if (!expense.amount || !expense.description || !expense.category || !expense.date || !expense.user) {
        throw new Error("Missing required fields");
    }
    if (typeof expense.amount !== "number") {
        throw new Error("Amount must be a number");
    }
    if (typeof expense.description !== "string") {
        throw new Error("Description must be a string");
    }
    if (typeof expense.category !== "string") {
        throw new Error("Category must be a string");
    }
    if (typeof expense.date !== new Date(expense.date).toISOString()) {
        throw new Error("Date must be a date");
    }
    return true;
}