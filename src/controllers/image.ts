import Image, { IImage } from "../models/image";
import { Request, Response } from "express";
import path from "path";
class ImageControllers {
    public async newImage(req: Request, res: Response) {
        /*console.log(req.file);*/
        const nImg = new Image({
            path: req.file?.path,
            relativePatch: "img/$(req.file.filename)",
            filename: req.file?.filename
        });
        await nImg.save();
        res.json({ message: "uploaded image" });
    }
    public async getImage(req: Request, res: Response) {
        const fImg = await Image.findOne({ filename: req.params.filename });
        console.log(__dirname + fImg?.path);
        if (fImg) {
            return res.sendFile(path.join(__dirname, "../../", fImg?.path));
        }
        return res.json({ message: "image not found" });
    }
}
export const imageControllers = new ImageControllers();