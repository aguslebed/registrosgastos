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

    async getSummary() {
        return expenseModel.aggregate([
            {
                $match: { deleted: false }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: "$amount" }
                }
            }
        ])
    }
    async getSummaryBymonth(month) {
        return expenseModel.aggregate([
            {
                $match: {
                    date: {
                        $gte: new Date("2026-02-01"),
                        $lte: new Date("2026-02-29")
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: "$amount" }
                }
            }
        ])
    }
}