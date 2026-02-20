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
    async updateExpense(id, expense) {
        return this.expensesRepository.updateExpense(id, expense);
    }
    async deleteExpense(id) {
        return this.expensesRepository.deleteExpense(id);
    }
}