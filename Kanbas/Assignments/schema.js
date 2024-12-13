import mongoose from "mongoose";
const schema = new mongoose.Schema(
 {
   title: String,
   course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
   points:Number,
   description:String,
   due:String,
   available:String,
   ddate:Date,
   adate:Date
 },
 { collection: "assignments" }
);
export default schema;