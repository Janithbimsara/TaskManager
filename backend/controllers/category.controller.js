const globalmsges = require("../errors/errors.messages");
const Category = require("../models/category.model");

// get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length) {
      res.status(globalmsges.SuccessCode).json({
        success: globalmsges.Success,
        message: globalmsges.ItemFound,
        data: categories,
      });
    } else {
      res.status(globalmsges.SuccessCode).json({
        success: globalmsges.NotSuccess,
        message: globalmsges.ItemEmpty,
        data: categories,
      });
    }
  } catch (error) {
    res
      .status(globalmsges.ServerCode)
      .json({ message: globalmsges.ServerErrorMessage, error: error });
  }
};

// get category by name
const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;

    const regex = new RegExp(`^${name}$`, "i");

    const category = await Category.findOne({ name: regex });

    if (!category) {
      return res.status(globalmsges.NotFoundCode).json({
        success: globalmsges.NotSuccess,
        message: globalmsges.ItemNotFound,
        data: category,
      });
    }
    return res.status(globalmsges.SuccessCode).json({
      success: globalmsges.Success,
      message: globalmsges.ItemFound,
      data: category,
    });
  } catch (error) {
    return res
      .status(globalmsges.ServerCode)
      .json({ message: globalmsges.ServerErrorMessage, error: error });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, color, todos } = req.body;
    // name cannot be empty
    if (!name) {
      return res.status(globalmsges.BadCode).json({
        success: globalmsges.NotSuccess,
        message: globalmsges.ContentEmpty,
      });
    }
    // if already exists no need to create
    let category = await Category.findOne({
      name: new RegExp(`^${name}$`, "i"),
    });
    if (category) {
      return res.status(globalmsges.BadCode).json({
        success: globalmsges.NotSuccess,
        message: globalmsges.DuplicateError,
      });
    }
    // create a new category
    category = new Category({ name: name, color: color, todos: todos });

    await category.save();
    res.status(globalmsges.CreateSuccess).json({
      success: globalmsges.Success,
      message: globalmsges.CreateSuccessMessage,
      data: category,
    });
  } catch (error) {
    return res
      .status(globalmsges.ServerCode)
      .json({ message: globalmsges.ServerErrorMessage, error: error.message });
  }
};

// update category
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, color, todos } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        name,
        color,
        todos,
      },
      { new: true, runValidators: true }
    );
    if (!updatedCategory) {
      return res.status(globalmsges.NotFoundCode).json({
        success: globalmsges.NotSuccess,
        message: globalmsges.ItemNotFound,
        data: null,
      });
    }

    return res.status(globalmsges.SuccessCode).json({
      success: globalmsges.Success,
      message: globalmsges.UpdateSuccessMessage,
      data: updatedCategory,
    });
  } catch (error) {
    return res
      .status(globalmsges.ServerCode)
      .json({ message: globalmsges.ServerErrorMessage, error: error.message });
  }
};

module.exports = {
  getAllCategories,
  getCategoryByName,
  createCategory,
  updateCategory,
};
