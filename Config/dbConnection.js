const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const connect = mongoose.connect("mongodb://127.0.0.1:27017/oleaDBS");
    console.log("DB connected");
  } catch (error) {
    console.log("DB not connected");
  }
};

module.exports = dbConnect;
