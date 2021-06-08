import Post, { IPost } from "../models/post";
import { Request, Response } from "express";
class PostControllers {
    public async index(req: Request, res: Response) {
        const users = await Post.find({});
        res.json({ message: "All  post", users });
    }
    public async createPost(req: Request, res: Response) {
        const { title, url, content } = req.body;
        const nPost = new Post(req.body)
        await nPost.save();
        res.json({ message: "Post registred ", nPost });
        res.status(101).end();
    }
    public async editPost(req: Request, res: Response) {
        const { id } = req.params;
        const { title, url, content, image } = req.body;
        const ePost = await Post.findByIdAndUpdate(id, req.body);
        res.json({ message: "Updated Post", ePost });
        res.status(101).end();
    }
    public async deletePost(req: Request, res: Response) {
        const { id } = req.params;
        const dUser = await Post.findByIdAndDelete(id);
        res.json({ message: "Post Deleted", dUser });
        res.status(101).end();
    }
}
export const postControllers = new PostControllers();
