import User, { IUser } from "../models/user";
import { Request, Response } from "express";
//import {authToken} from "../libs/authToken";
import { createToken } from "../libs/serviceToken";
class UserControllers {
    public async index(req: Request, res: Response) {
        const users = await User.find({});
        res.json({ message: "All users", users });
    }
    public async createUser(req: Request, res: Response) {
        const { fullname, username, password, email } = req.body;
        const nUser = new User(req.body)
        nUser.password = await nUser.encryptPassword(password);
        await nUser.save();
        res.json({ message: "User registred ", nUser });
        res.status(101).end();
    }
    public async logUser(req: Request, res: Response) {
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            if (foundUser.matchPassword(password)) {
                const token = createToken(foundUser.id);
                return res.json({ message: "logged in user", token });
            }
            res.json({ message: "invalid password" });
        }
        res.json({ message: "invalid email" });
    }
    public async editUser(req: Request, res: Response) {
        const { id } = req.params;
        const { fullname, username, password, email } = req.body;
        const eUser = await User.findByIdAndUpdate(id, req.body);
        res.json({ message: "Updated user", eUser });
        res.status(101).end();
    }
    public async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        const dUser = await User.findByIdAndDelete(id);
        res.json({ message: "User Deleted", dUser });
        res.status(101).end();
    }
    public async getProfile(req: Request, res: Response) {
        const { id } = req.params;
        const findUser = await User.findById(id);
        res.json({ message: "Profile Users", findUser });
    }
    public async sendEmail(req: Request, res: Response) {
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'breiks12@gmail.com',
                pass: '*************'
            }
        });

        const mailOptions = {
            from: 'Ariel Antonio Tolay Flores',
            //to: 'warlodsofdraenor@gmail.com',
            to: 'breiks123@hotmail.com',
            //to: 'logatsudesu@gmail.com',
            subject: 'This is my test for the assignment',
            text: 'Practica # 8',
            html: '<p>imagen de memes</p><img src="https://i.postimg.cc/YSbNPTjj/c4fab09501902c8dd2f23dfff39732c4.jpg">'
        };

        transporter.sendMail(mailOptions, function (err: any, info: any) {
            if (err)
                console.log(err, "error al enviar")
            else
                console.log(info);
        })
    }
}
export const userControllers = new UserControllers();
