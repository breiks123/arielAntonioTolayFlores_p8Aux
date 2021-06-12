import { model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
export interface IUser extends Document {
    fullname: string;
    username: string;
    password: string;
    email: string;
    dateReg: Date;
    encryptPassword(password: string): any;
    matchPassword(password: string): any;
    //idPost: String;
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
    /*idpost: {
        type: String,
        required: true,
    },*/
    dateReg: {
        type: Date,
        default: Date.now(),
    },
});
userSchema.methods.encryptPassword = async (password:
    string) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};
userSchema.methods.matchPassword = async function
    (password: string) {
    return await bcrypt.compare(password, this.password);
};

export default model<IUser>("User", userSchema)
