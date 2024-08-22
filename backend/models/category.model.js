const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  color: { type: String, default: "#ffffff" }, // Default color is white
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "todo" }],
});

module.exports = mongoose.model("Category", CategorySchema);
