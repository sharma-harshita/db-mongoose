const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/school";

// creating a connection with the database : connection url should contain the db name inside it

mongoose.connect(dbUrl, (err, suc)=>{
    if(err) console.log(err);
    console.log("Connected Successfully !!!");
})


// First Step : Create a schema : pre-defined structure that we want all of our documents should follow when they are being inserted.


const studentSchema = mongoose.Schema({
    name : String,
    age : Number,
    email : String,
})




// Second Step : Create a model / collection using this schema : students is the collection that will be created in the db which will follow studentSchema


const StudentModel = mongoose.model("students", studentSchema)

// this approach will not be opted because we need to create the documents based on the model of the collection.

// const student1 = {
//     name :"John",
//     age : 24,
//     email : "abc@email.com"
// }

// var student1 = new StudentModel({
//     name : "harsh",
//     age : 24,
//     email : "abc@email.com"
// })

// var student2 = new StudentModel({
//     name : "harshita",
//     age : 24,
//     email : "abc@email.com"
// })

// var student3 = new StudentModel({
//     name : "john",
//     age : 24,
//     email : "abc@email.com"
// })

// student1.save((err, result)=>{
//     if (err) console.log(err);
//     console.log(result);
// })

// // this is to insert multiple documents

// StudentModel.insertMany([student2,student3],(err, res)=>{
//     if (err) console.log(err);
//     console.log("inserted successfully");
// })

const teacherSchema = mongoose.Schema({
    name : {
        type : String, //mandatory or must field that has to be added when you are definining the schema in this way
        required : true
    },
    age : {
        type : Number,
        required : true,
        min : 25,
        max : 45
    },
    email : String
})

const TeacherModel = mongoose.model("teachers", teacherSchema)

var teacher1 = new TeacherModel({
    name : "Ram",
    age : 35,
    email : "ram@email.com"
})
var teacher2 = new TeacherModel({
    name : "Qwe",
    age : 45,
    email : "qwe@email.com"
})

var teacher3 = new TeacherModel({
    name : "Rty",
    age : 25,
    email : "rty@email.com"
})

// teacher1.save((err, res)=>{
//     if (err) console.log(err);
//     console.log(res);
// })

// TeacherModel.insertMany([teacher2, teacher3], (err, res)=>{
//     if (err) console.log(err);
//     console.log("INSERTED SUCCESSFULLY");
// })


// Querying the database using Mongoose model

TeacherModel.find({age : {$lt : 30}}, (err, res)=>{
    if (err) console.log(err);
    console.log(res);
})

// Updating the document . 

// TeacherModel.updateOne({name : "A"}, {$set:{name: "John"}}, (err, res)=>{
//     if (err) console.log(err);
//     console.log(res);
// })

// Deleting the document .

TeacherModel.deleteOne({name:"John"},(err, res)=>{
    if (err) console.log(err);
    console.log(res);
})