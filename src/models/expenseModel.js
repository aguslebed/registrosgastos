import { Schema, model, Document } from "mongoose";


const expenseSchema = new Schema({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
});

export default model("Expense", expenseSchema);
