import { Router } from "express";
import { makeExpensesController } from "../controllers/expensesController.js";
import { ExpenseService } from "../services/expenseService.js";
import { ExpenseRepository } from "../repositories/expenseRepository.js";

const router = Router();
const expensesRepository = new ExpenseRepository();
const expensesService = new ExpenseService({ expensesRepository });
const controller = makeExpensesController({ expensesServices: expensesService });

router.get("/", controller.getAllExpenses);
router.post("/", controller.createExpense);
router.put("/:id", controller.updateExpense);
router.delete("/:id", controller.deleteExpense);

export default router;