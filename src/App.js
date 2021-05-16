import React, { useEffect, useState } from "react";
import "./App.css";
import Tariler from "./Tarifler";

function App() {
  const APP_ID = "dd9c77e3";
  const APP_KEY = "08a276df9605dc6b1f6426dcec46ecb3";
  const [tarif, setTarif] = useState([]);
  const [ara, setAra] = useState("");
  const [istek, setIstek] = useState("chicken");

  useEffect(() => {
    tarifiAl();
  }, [istek]);

  const tarifiAl = async () => {
    const cvp = await fetch(
      `https://api.edamam.com/search?q=${istek}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const veri = await cvp.json();
    console.log(veri.hits);
    setTarif(veri.hits);
  };
  const aramayiGuncelle = (e) => {
    setAra(e.target.value);
    console.log(e.target.value);
  };

  const istenenKelime = (e) => {
    e.preventDefault();
    setIstek(ara);
    setAra("");
  };

  return (
    <div className="App">
      <form onSubmit={istenenKelime} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={ara}
          onChange={aramayiGuncelle}
        />
        <button className="search-button">Search</button>
      </form>
      <div className="tarif">
        {tarif.map((tarifler) => (
          <Tariler
            key={tarifler.recipe.label}
            baslik={tarifler.recipe.label}
            kalori={tarifler.recipe.calories}
            foto={tarifler.recipe.image}
            icindekiler={tarifler.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
