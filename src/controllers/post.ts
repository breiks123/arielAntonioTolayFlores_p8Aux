import Post, { IPost } from "../models/post";
import { Request, Response } from "express";
class PostControllers {
    public index (req :Request , res :Response){
        res.send("Mensaje del controlador post");
    } 
}
export const postControllers = new PostControllers();
