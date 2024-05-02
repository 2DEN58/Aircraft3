import React from 'react';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css"; // Importa el archivo de estilos CSS

function Home(){
  return (
    <>
      <Header />
      <div className="body-home">
        {/* Contenido de la página */}
      </div>
      <Footer />
    </>
  );
}

export default Home;



