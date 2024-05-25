import Joi from "joi";
import User from "../models/users.models.js";

export const findAllUsers = async () => {
  try {
    const results = await User.find();

    if (results.length === 0) {
      return {
        ok: false,
        values: "",
        message: "Users Not Found",
        status: 404
      };
    };

    return {
      ok: true,
      values: results,
      message: "Successful",
      status: 200
    };

  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500
    };
  };
};

export const findUser = async (id) => {
  try {
    const results = await User.findOne({ _id: id });

    if (!results) {
      return {
        ok: false,
        values: "",
        message: "User Not Found",
        status: 404
      };
    };

    return {
      ok: true,
      values: results,
      message: "Successful",
      status: 200
    };

  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500
    };
  };
};

export const updateUser = async (id, updUser) => {
  try {
    const results = await User.findOne({ _id: id });

    if (!results) {
      return {
        ok: false,
        values: "",
        message: "User Not Found",
        status: 404
      };
    };

    const updateUser = await User.findByIdAndUpdate(id, updUser);

    return {
      ok: true,
      values: updateUser,
      message: "Successful Updated",
      status: 200,
    };

  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500
    };
  };
};

export const deleteUser = async (id) => {
  try {
    const results = await User.findOne({ _id: id });

    if (!results) {
      return {
        ok: false,
        values: "",
        message: "User Not Found",
        status: 404
      };
    };
    await User.findByIdAndDelete(id);

    return {
      ok: true,
      values: "",
      message: "Successful Deleted",
      status: 200
    };

  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500
    };
  };
};

export const userCreate = async (newUser) => {
  try {
    
    const results = await User.findOne(newUser);

    if (results) {
      return {
        ok: false,
        values: "",
        message: "User already exist",
        status: 400
      };
    };

    const userData = new User(newUser);

    const saveUser = await userData.save();

    return {
      ok: true,
      values: saveUser,
      message: "Successful created",
      status: 201,
    };

  } catch (error) {
    console.log(error);

    return {
      ok: false,
      values: "",
      message: error.message,
      status: 500
    };
  };
};
