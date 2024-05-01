const supertest = require("supertest");
const app = require("../app");
const { expect } = require("chai");

const request = supertest(app);

describe("Endpoints de la API", () => {
  describe("GET /products", () => {
    it("Debería devolver una lista de productos", async () => {
      const response = await request.get("/products");
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array");
    });
  });
  describe("POST /products", () => {
    it("Debería crear un nuevo producto", async () => {
      const newProduct = {
        name: "Producto de prueba",
        price: 10.99,
      };
      const response = await request.post("/products").send(newProduct);
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("id");
    });
  });
  describe("POST /carts/add-product", () => {
    it("Debería agregar un producto al carrito", async () => {
      const productToAdd = {
        productId: "producto_id_de_prueba",
        quantity: 1,
      };
      const response = await request
        .post("/carts/add-product")
        .send(productToAdd);
      expect(response.status).to.equal(200);
    });
  });
});
