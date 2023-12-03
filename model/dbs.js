// import section

const mongoose = require('mongoose');
        mongoose
          .connect(
            ""
          )
          .then(() => {
            console.log(`database connected`);
          })
          .catch(() => {
            console.log(`something went worng database connect`);
          });
    const dbsschema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    });


const collection = new mongoose.model("sharewheels", dbsschema);

module.exports = collection;