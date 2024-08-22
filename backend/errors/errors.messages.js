module.exports = {
  // Success messages
  Success: true,
  SuccessStatus: "success",

  // Error messages
  NotSuccess: false,
  BadMessage: "Bad Request",
  ServerErrorMessage: "Internal Server Error",
  NotSuccessStatus: "not success",

  // Validation Errors
  DuplicateError: "Field value already exists",
  InvalidDataError: "Unable to create item",
  UpdateDataError: "Unable to update",
  InvalidPasswordError: "Invalid password",
  FieldEmptyError: "Field can't be empty",

  // HTTP Codes
  SuccessCode: 200,
  CreateSuccess: 201,
  BadCode: 400,
  ServerCode: 500,
  MethodErrorCode: 405,
  NotFoundCode: 404,
  UpdateErrorCode: 401,

  // General Messages
  ItemReceived: "Data received successfully",
  ItemFound: "Items found",
  ItemEmpty: "Items list empty",
  ItemNotFound: "Data not found",
  ContentEmpty: "Content cannot be empty!",
  CreateSuccessMessage: "Created successfully",
  UpdateSuccessMessage: "Updated successfully",
  ItemUploadSuccess: "Item uploaded successfully",
  ItemAddSuccess: "Item added successfully",
  AuthorizationErrorMsg:
    "You lack the authority to access these details. Please log in.",
  NoDataError: "No data available",
  InvalidDataError: "Invalid data item",
  ProfileFoundMsg: "Profile found",
  ItemDeletedMsg: "Item deleted successfully",
};
