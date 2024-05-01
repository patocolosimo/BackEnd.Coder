import { productoModelo } from "./models/products.model.js";

export class ProductosDAO {
  async get() {
    try {
      return await productoModelo.find().lean();
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  async getById(id) {
    try {
      return await productoModelo.findOne({ _id: id }).lean();
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  async update(id, producto) {
    try {
      return await productoModelo.updateOne({ _id: id }, producto);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
}
