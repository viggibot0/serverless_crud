'use strict';

const User = require("./Models/schema");
const sequelize = require("./Models/db");

sequelize.sync();

module.exports.data = async (event) => {
  const data = await User.findAll();

  return {statusCode: 200,body:JSON.stringify({ message:data,success: false,data: [],errors:[]})}
}

module.exports.send = async (event) => {
  const {name} = event;
  const data = await User.create({name});
  return {statusCode: 200,body:JSON.stringify({ message:data,success: false,data: [],errors:[]})}
}

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
