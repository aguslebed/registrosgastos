import expenseModel from "../models/expenseModel.js";

export class ExpenseRepository {
    async getAllExpenses() {
        return expenseModel.find({ deleted: false });
    }
    async createExpense(expense) {
        return expenseModel.create(expense);
    }
    async updateExpense(id, expense) {
        return expenseModel.findByIdAndUpdate(id, expense, { returnDocument: 'after' });
    }
    async deleteExpense(id) {
        return expenseModel.findByIdAndUpdate(id, { deleted: true, deletedAt: new Date() }, { returnDocument: 'after' });
    }
}