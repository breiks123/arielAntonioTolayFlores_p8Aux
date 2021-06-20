import express from "express";
import morgan from "morgan";
//import userRoutes from "../routes/user";
import allRoutes from "../routes";
import multer, { diskStorage } from "multer";
import path from "path";
import { v4 as uuid } from "uuid";
class Application {
  app: express.Application;
  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.static();
  }
  settings() {
    this.app.set("port", process.env.PORT || 8000);
    const storage = diskStorage({
      destination: "uploads",
      filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname)
        );
      }
    });
    this.app.use(multer({ storage }).single("img"));
    //this.app.use("/", routes);
  }
  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`server running port ${this.app.get("port")}`);
    });
  }
  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  routes() {
    //this.app.use("/api/user", userRoutes);   
    this.app.use("/api", allRoutes);
  }
  static() {
    this.app.use("/uploads", express.static(path.resolve
      ("uploads")));
  }
}

export default Application;
