const mongoose = require('mongoose');
const { Schema } = mongoose;
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},  function(error){
    console.log("open done"+mongoose.connection.host+"\t"+ mongoose.connection.port)
      if(error){
        console.log("error"+error);
      }else{
      }
    });

mongoose.set('useFindAndModify', false);

let userSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    age: Number
});

let User = mongoose.model('User', userSchema);

exports.User = User
