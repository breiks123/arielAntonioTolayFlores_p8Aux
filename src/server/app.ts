import express from "express";
import morgan from "morgan";
//import userRoutes from "../routes/user";
import allRoutes from "../routes";
class Application {
  app: express.Application;
  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set("port", process.env.PORT || 8000);
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
}

export default Application;
