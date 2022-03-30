const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/school";

mongoose.connect(dbUrl, (err, suc)=>{
    if(err) console.log(err);
    console.log("Connected Successfully !!!");
})


// First Step : Create a schema

const studentSchema = mongoose.Schema({
    name : String,
    age : Number,
    email : String,
})


const teacherSchema = mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    experience : Number
})

// Second Step : Create a model / collection using this schema

const StudentModel = mongoose.model("students", studentSchema)
const TeacherModel = mongoose.model("teachers", teacherSchema)

// this approach will not be opted because we need to create the documents based on the model of the collection.

// const student1 = {
//     name :"John",
//     age : 24,
//     email : "abc@email.com"
// }

var student1 = new StudentModel({
    name : 122,
    age : 24,
    email : "abc@email.com"
})


student1.save((err, result)=>{
    if (err) console.log(err);
    console.log(result);
})