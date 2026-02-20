
export function makeExpensesController({ expensesServices }) {
    return {
        async getAllExpenses(req, res) {
            try {
                const expenses = await expensesServices.getAllExpenses();
                res.json(expenses);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        },
        async createExpense(req, res) {
            try {
                const expense = req.body;
                const newExpense = await expensesServices.createExpense(expense);
                res.json(newExpense);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        },
        async updateExpense(req, res) {
            try {
                const { id } = req.params;
                const expense = req.body;
                const updatedExpense = await expensesServices.updateExpense(id, expense);
                res.json(updatedExpense);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        },
        async deleteExpense(req, res) {
            try {
                const { id } = req.params;
                await expensesServices.deleteExpense(id);
                res.json({ message: "Expense deleted" });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        },
        async getSummary(req, res) {
            try {
                const summary = await expensesServices.getSummary();
                res.json(summary);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        }
    }
}