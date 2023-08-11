import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import { RoutesApp } from "./shared/router/index.routes";
import { AppDataSource } from "./config/postgreSQL";

class Server {
  private app = express();
  private port = process.env.PORT || 3000;
  private router = new RoutesApp();

  constructor(){
    this.database();
    this.middlewares();
    this.listen();
  }

  private database(){
    AppDataSource
      .initialize()
      .then(() => console.log("Database connected"))
      .catch((error) => console.log(error));
  }

  private middlewares(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors({credentials: true}));
    this.app.use(morgan("dev"));
    this.app.use("/api", this.router.routes());

    this.app.use(
      session({
        secret: process.env.SECRET_KEY as string,
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 30000000000000, 
          httpOnly: true
        },
      })
    );
  }

  private listen(){
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    })
  }
}

new Server();