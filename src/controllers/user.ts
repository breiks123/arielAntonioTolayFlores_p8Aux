import User, { IUser } from "../models/user";
import { Request, Response } from "express";
class UserControllers {
    public async index(req: Request, res: Response) {
        const users = await User.find({});
        res.json({ message: "all users", users });
    }
    public async createUser(req: Request, res: Response) {
        res.send("prueba create user 2 ");
    }
}
export const userControllers = new UserControllers();