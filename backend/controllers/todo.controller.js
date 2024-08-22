const globalmsges = require("../errors/errors.messages");
const Todo = require("../models/todo.model");
const Category = require("../models/category.model");

// get all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().populate("category", "name color");
    if (todos.length) {
      return res.status(globalmsges.SuccessCode).json({
        success: globalmsges.Success,
        message: globalmsges.ItemFound,
        data: todos,
      });
    }
    return res.status(globalmsges.SuccessCode).json({
      success: globalmsges.NotSuccess,
      message: globalmsges.ItemEmpty,
      data: todos,
    });
  } catch (error) {
    return res
      .status(globalmsges.ServerCode)
      .json({ message: globalmsges.ServerErrorMessage, error: error });
  }
};

// get todo by ID
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id).populate(
      "category",
      "name color"
    );
    if (!todo) {
      return res.status(globalmsges.NotFoundCode).json({
        success: globalmsges.NotSuccess,
        message: globalmsges.ItemNotFound,
        data: null,
      });
    }
    return res.status(globalmsges.SuccessCode).json({
      success: globalmsges.Success,
      message: globalmsges.ItemFound,
      data: todo,
    });
  } catch (error) {
    return res
      .status(globalmsges.ServerCode)
      .json({ message: globalmsges.ServerErrorMessage, error: error });
  }
};

// Utility function to create or find a category
const createOrFindCategory = async (catName) => {
  let category = await Category.findOne({
    name: new RegExp(`^${catName}$`, "i"),
  });

  if (!category) {
    category = new Category({ name: catName });
    await category.save();
  }

  return category;
};

const createTodo = async (req, res) => {
  try {
    const { title, description, categories } = req.body;
    if (!Array.isArray(categories)) {
      return res.status(globalmsges.BadCode).json({
        success: globalmsges.NotSuccess,
        message: globalmsges.InvalidDataError,
      });
    }
    if (!title) {
      return res.status(globalmsges.BadCode).json({
        success: globalmsges.NotSuccess,
        message: globalmsges.ContentEmpty,
      });
    }
    const categoryIds = await Promise.all(
      categories.map(async (catName) => {
        const category = await createOrFindCategory(catName);
        return category._id; // Ensure we're getting the _id safely
      })
    );

    const todo = new Todo({
      title,
      description,
      category: categoryIds,
    });

    await todo.save();
    // Update categories with the new todo ID using updateCategory
    await Category.updateMany(
      { _id: { $in: categoryIds } },
      { $push: { todos: todo._id } }
    );

    return res.status(globalmsges.CreateSuccess).json({
      success: globalmsges.Success,
      message: globalmsges.CreateSuccessMessage,
      data: todo,
    });
  } catch (error) {
    return res.status(globalmsges.ServerCode).json({
      message: globalmsges.ServerErrorMessage,
      error: error.message,
    });
  }
};

// Delete a Todo
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(globalmsges.NotFoundCode).json({
        success: globalmsges.NotSuccess,
        message: globalmsges.ItemNotFound,
        data: null,
      });
    }

    await Category.updateMany(
      { todos: todo._id },
      { $pull: { todos: todo._id } }
    );

    return res.status(globalmsges.SuccessCode).json({
      success: globalmsges.Success,
      message: globalmsges.ItemDeletedMsg,
      data: todo,
    });
  } catch (error) {
    return res.status(globalmsges.ServerCode).json({
      message: globalmsges.ServerErrorMessage,
      error: error.message,
    });
  }
};

module.exports = { getAllTodos, getTodoById, createTodo, deleteTodo };
