import { model, Schema,Document } from "mongoose";
//import bcrypt from "bcrypt";
export interface IUser extends Document {
    fullname: String;
    username: String;
    password: String;
    email: String;    
    dateReg: Date;
}
const userSchema = new Schema<IUser>({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },  
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }, 
    dateReg: {
        type: Date,
        default: Date.now(),
    },
});
export default model<IUser>("User",userSchema)
