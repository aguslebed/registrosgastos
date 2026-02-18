import expenseModel from "../models/expenseModel.js";

export class ExpenseRepository {
    async getAllExpenses() {
        return expenseModel.find();
    }
    async createExpense(expense) {
        return expenseModel.create(expense);
    }
    async updateExpense(expense) {
        return expenseModel.findByIdAndUpdate(expense._id, expense, { new: true });
    }
    async deleteExpense(expense) {
        return expenseModel.findByIdAndDelete(expense._id);
    }
}