const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true, useUnifiedTopology: true},  function(error){
    console.log("open done"+mongoose.connection.host+"\t"+ mongoose.connection.port)
      if(error){
        console.log("error"+error);
      }else{
      }
    });

let userSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    age: Number,
  });


let people_to_create = [
    {
        name: "7amo",
        age:33,
    },
    {
        name: "Heba",
        age:20,
    },
    {
        name: "Mooka",
        age:21,
    },
    {
        name: "Shiko",
        age:25,
    },
    {
        name: "Nada",
        age:28,
    },
    {
        name: "Mima",
        age:19,
    },
    {
        name: "Mary",
        age:19,
    },
    {
        name: "Mary",
        age:39,
    }
]

let User = mongoose.model('User', userSchema);


display_callback = (err, result) => {if (err) {throw err};
        console.log("result: " + result)
        }


    User.create(people_to_create)

    console.log("find")
    Person.find(function(err, result){
        console.log("find")
        display_callback(err, result)
        })

    Person.find({favoriteFoods: "roz"}, function(err, result){
    console.log("find food")
     display_callback(err, result)
    })

    
    console.log("find name")
    Person.find({name: "Nada"}).exec(function(err, result){
        console.log("find name")
         display_callback(err, result)
        })
    
    Person.findOne({name: "Nada"}).exec(function(err, result){
        console.log("find one")
        Person.findById(result._id).exec(function(err, result){
            console.log("FindbyID")
            display_callback(err, result)
            })
        display_callback(err, result)
        })
   
    Person.findOneAndUpdate({name:"Nada"}, { $set: {age: 20}}).exec(function(err, result){
        console.log("findOneAndUpdate")
        display_callback(err, result)
        })
    
    Person.findByIdAndRemove(person_id).exec(function(err, result){
        console.log("findByIdAndRemove")
        display_callback(err, result)
        })

    Person.find({favoriteFoods: "kabab"}).sort({age:1}).limit(10).select({name:true, favoriteFoods:true}).exec(function(err, result){
        console.log("find")
        display_callback(err, result)
        })
