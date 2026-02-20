import { Schema, model, Document } from "mongoose";


const expenseSchema = new Schema({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    deleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
}, { timestamps: true });

export default model("Expense", expenseSchema);
