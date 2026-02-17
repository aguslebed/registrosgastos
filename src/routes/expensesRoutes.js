import { Router } from "express";
import { makeExpensesController } from "../controllers/expensesController.js";

const router = Router();
const controller = makeExpensesController({})

router.get("/", controller.getAllExpenses);
router.post("/", controller.createExpense);
router.put("/:id", controller.updateExpense);
router.delete("/:id", controller.deleteExpense);

export default router;