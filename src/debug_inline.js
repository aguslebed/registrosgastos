
import express from 'express';

// Mock controller
function makeExpensesController({ expensesServices }) {
    return {
        async getAllExpenses(req, res) { },
        async createExpense(req, res) { },
        async updateExpense(req, res) { },
        async deleteExpense(req, res) { }
    }
}

const app = express();
const PORT = 3004;

app.use(express.json());

const router = express.Router();
const controller = makeExpensesController({});

router.get("/", controller.getAllExpenses);
router.post("/", controller.createExpense);
router.put("/:id", controller.updateExpense);
router.delete("/:id", controller.deleteExpense);

app.use("/api/expenses", router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
