import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products] = useState([
    {
      productId: 1,
      productName: "Coca-Cola",
      price: 3.50,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnISLdcxQPEHv29owqInEVxOq-ZkbBiE9-IQ&s",
    },
    {
      productId: 2,
      productName: "Arroz blanco (1 kg)",
      price: 2.50,
      imageUrl: "https://media.istockphoto.com/id/1366752713/es/vector/arroz-cocido-en-un-taz%C3%B3n-azul-aislado-sobre-blanco.jpg?s=612x612&w=0&k=20&c=JJSX9P3RoHrN3n_Z93rbQA_hncOCoS3RwGIp8wsEBso=",
    },
    {
      productId: 3,
      productName: "Smartphone Samsung Galaxy A54 (128GB)",
      price: 400.00,
      imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/latin/sm-a546elvagto/gallery/latin-galaxy-a54-5g-sm-a546-sm-a546elvagto-thumb-535932004",
    },
    {
      productId: 4,
      productName: "Laptop HP Pavilion 15”",
      price: 750.00,
      imageUrl: "https://www.officedepot.com.sv/medias/1200ftw-1301000019.jpg?context=bWFzdGVyfHJvb3R8MjEyMTc0fGltYWdlL2pwZWd8YURFMUwyZ3dZaTh4TWpRMk5UYzVNakl5TVRJeE5DOHhNakF3Wm5SM1h6RXpNREV3TURBd01Ua3VhbkJufDMxYTBhYTk1YzFkZDViOWU1YzhjOThlMzk3NjZiZDdkZTI5NWFlNzMwYWQxZWQyMjQ2ZDYyMzQ5M2NmMDA5NTE",
    },
    {
      productId: 5,
      productName: "Refrigeradora Mabe",
      price: 650.00,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBr2yyMvoDy9t0cJwADX1bn-ef7ABQB4kEOg&s",
    },
    {
      productId: 6,
      productName: "Microondas LG",
      price: 120.00,
      imageUrl: "https://img.freepik.com/vector-premium/microondas-azul-pizza-frente-palabras-hora-12-00_481747-88179.jpg?semt=ais_hybrid",
    },
    {
      productId: 7,
      productName: "Detergente en polvo Ariel (5 kg)",
      price: 15.00,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgdbyStAjlfezKxKzqkDZzNhwsDMpsg0pdw&s",
    },
    {
      productId: 8,
      productName: "Juego de sábanas King Size",
      price: 50.00,
      imageUrl: "https://m.media-amazon.com/images/I/71LLq2XC6jL.jpg",
    },
    {
      productId: 9,
      productName: "Reloj inteligente Xiaomi",
      price: 60.00,
      imageUrl: "https://walmartsv.vtexassets.com/arquivos/ids/451100/Watch-Xiaomi-Redmi-4-1-49494.jpg?v=638514816883770000",
    },
    {
      productId: 10,
      productName: "Zapatillas deportivas Nike Revolution",
      price: 75.00,
      imageUrl: "https://siman.vtexassets.com/arquivos/ids/5426765-800-800?v=638490777115070000&width=800&height=800&aspect=true",
    },
  ]);

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <div className="product-container">
        {products.map((product) => (
          <ProductItem key={product.productId} {...product} 
          imageUrl={product.imageUrl}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;