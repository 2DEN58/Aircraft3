import React, { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import aircraftsService from '../../services/firebase/aircrafts.service';
import "./RealAircrafts.css";

function RealAircrafts() {
  const [aircrafts, setAircrafts] = useState([]);
  const [filteredAircrafts, setFilteredAircrafts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Obtener todos los aviones de Firebase
  useEffect(() => {
    getAllAircrafts();
  }, []);

  const getAllAircrafts = () => {
    aircraftsService.getAllAircrafts().then((items) => {
      let auxAircrafts = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();
        auxAircrafts.push({
          key: key,
          country: data.country,
          name: data.name,
          price: data.price,
          role: data.role
        });
      });
      setAircrafts([...auxAircrafts]);
      setFilteredAircrafts([...auxAircrafts]); // Inicialmente, mostrar todos los aviones
    });
  };

  // Función para manejar el cambio en la opción de orden
  const handleSortOptionChange = (option) => {
    setSortOption(option);
    filterAircrafts(option);
  };

  // Función para filtrar los aviones según la opción de orden seleccionada
  const filterAircrafts = (option) => {
    let sortedAircrafts = [...aircrafts];
    switch (option) {
      case 'name':
        sortedAircrafts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-asc':
        sortedAircrafts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedAircrafts.sort((a, b) => b.price - a.price);
        break;
      case 'country':
        sortedAircrafts.sort((a, b) => a.country.localeCompare(b.country));
        break;
      default:
        break;
    }
    setFilteredAircrafts(sortedAircrafts);
  };

  // Función para filtrar los aviones según el término de búsqueda
  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
    const filtered = aircrafts.filter((a) =>
      a.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredAircrafts(filtered);
  };

  return (
    <>
      <Header />
      <div className="content">
        <h1>Aircraft Inventory</h1>
        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Search by aircraft name..."
          value={searchTerm}
          onChange={(e) => handleSearchTermChange(e.target.value)}
        />
        {/* Menú desplegable para filtrar */}
        <select
          value={sortOption}
          onChange={(e) => handleSortOptionChange(e.target.value)}
        >
          <option value="">Sort by...</option>
          <option value="name">Name (A-Z)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="country">Country</option>
        </select>
        {/* Tabla de aviones */}
        <table className="aircraft-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Name</th>
              <th>Role</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredAircrafts.map((a, index) => (
              <tr key={index}>
                <td>{a.country}</td>
                <td>{a.name}</td>
                <td>{a.role}</td>
                <td>${a.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default RealAircrafts;

