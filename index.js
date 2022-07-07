// Write your solution in this file!
const employee = {
  name: "Harry Styles",
  address: "1 Direction Drive",
};

const updateEmployeeWithKeyAndValue = function (obj, key, value) {
  const newEmployee = { ...obj };

  newEmployee[key] = value;

  return newEmployee;
};

const destructivelyUpdateEmployeeWithKeyAndValue = function (obj, key, value) {
  const destructiveNewEmployee = obj;

  destructiveNewEmployee[key] = value;

  return destructiveNewEmployee;
};

const deleteFromEmployeeByKey = function (obj, key) {
  const deletedEmployee = { ...obj };

  delete deletedEmployee[key];

  return deletedEmployee;
};

const destructivelyDeleteFromEmployeeByKey = function (obj, key) {
  const destructiveDelete = obj;

  delete destructiveDelete[key];
  return destructiveDelete;
};
