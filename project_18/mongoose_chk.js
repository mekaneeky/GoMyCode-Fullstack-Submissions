require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('useFindAndModify', false);
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},  function(error){
    console.log("open done"+mongoose.connection.host+"\t"+ mongoose.connection.port)
      if(error){
        console.log("error"+error);
      }else{
      }
    });

let personSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    age: Number,
    favoriteFoods: [String]
  });

let Person = mongoose.model('Person', personSchema);

let people_to_create = [
    {
        name: "7amo",
        age:33,
        favoriteFoods: ["kabab", "kofta"]
    },
    {
        name: "Heba",
        age:20,
        favoriteFoods: ["crepe", "kofta"]
    },
    {
        name: "Mooka",
        age:21,
        favoriteFoods: ["kabab", "la7ma"]
    },
    {
        name: "Shiko",
        age:25,
        favoriteFoods: ["kabab", "roz"]
    },
    {
        name: "Nada",
        age:28,
        favoriteFoods: ["kosa", "kofta"]
    },
    {
        name: "Mima",
        age:19,
        favoriteFoods: ["tamatem", "kofta"]
    },
    {
        name: "Mary",
        age:19,
        favoriteFoods: ["tamatem", "kofta"]
    },
    {
        name: "Mary",
        age:39,
        favoriteFoods: ["tamatem", "kofta"]
    }
]

    display_callback = (err, result) => {if (err) {throw err};
            console.log("result: " + result)
            }


    Person.create(people_to_create)

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
