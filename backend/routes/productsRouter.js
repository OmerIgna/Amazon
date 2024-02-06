import expressAsyncHandler from "express-async-handler";
import express from "express";
import {
  getProducts,
  getProductById,
  getProductByToken,
  getCategories,
} from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.get("/", expressAsyncHandler(getProducts));
productsRouter.get("/categories", expressAsyncHandler(getCategories));
productsRouter.get("/token/:token", expressAsyncHandler(getProductByToken));
productsRouter.get("/:id", expressAsyncHandler(getProductById));

export default productsRouter;
