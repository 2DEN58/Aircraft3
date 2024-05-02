import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Creations.css";

function Creations(){
  return(
    <>
      <Header/>
      <div className="background-image">
        <div className="container">
          <p className="header">Creations</p>
          {/* Contenedor de las imágenes */}
          <div className="image-container">
            {/* Contenedor de cada imagen */}
            <a href="https://www.simpleplanes.com/a/Yon3ik/XMRD-01M" target="_blank" rel="noopener noreferrer" className="image-card">
              <img src="https://jundroo.blob.core.windows.net/simpleplanes/GameData/aircraft/1259/Yon3ik-UserView-0.jpg" alt="Aircraft" className="image" />
              <p className="image-name">XMRD-01M</p>
              <p className="author">DEN58</p>
            </a>
            <a href="https://www.simpleplanes.com/a/QFsiIl/MAH-01" target="_blank" rel="noopener noreferrer" className="image-card">
              <img src="https://jundroo.blob.core.windows.net/simpleplanes/GameData/aircraft/1361/QFsiIl-UserView-0.jpg" alt="Aircraft" className="image" />
              <p className="image-name">MAH-01</p>
              <p className="author">DEN58</p>
            </a>
            <a href="https://www.simpleplanes.com/a/xYNZ4x/XM-24" target="_blank" rel="noopener noreferrer" className="image-card">
              <img src="https://jundroo.blob.core.windows.net/simpleplanes/GameData/aircraft/1286/xYNZ4x-UserView-0.jpg" alt="Aircraft" className="image" />
              <p className="image-name">XM-24</p>
              <p className="author">DEN58</p>
            </a>
            <a href="https://www.simpleplanes.com/a/79kS1B/XTD-01" target="_blank" rel="noopener noreferrer" className="image-card">
              <img src="https://jundroo.blob.core.windows.net/simpleplanes/GameData/aircraft/1220/79kS1B-UserView-0.jpg" alt="Aircraft" className="image" />
              <p className="image-name">XTD-01</p>
              <p className="author">DEN58</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Creations;

