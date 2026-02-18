import { IExpensesService } from "../interfaces/IExpensesService.js";

export class ExpenseService extends IExpensesService {
    constructor({ expensesRepository }) {
        super();
        this.expensesRepository = expensesRepository;
    }
    async getAllExpenses() {
        return this.expensesRepository.getAllExpenses();
    }
    async createExpense(expense) {
        return this.expensesRepository.createExpense(expense);
    }
    async updateExpense(expense) {
        return this.expensesRepository.updateExpense(expense);
    }
    async deleteExpense(expense) {
        return this.expensesRepository.deleteExpense(expense);
    }
}