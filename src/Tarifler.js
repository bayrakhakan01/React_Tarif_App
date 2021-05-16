import React from "react";
import style from "./tarifler.module.css";
function Tarifler({ baslik, kalori, foto, icindekiler }) {
  return (
    <div className={style.recipes}>
      <h1>{baslik}</h1>
      <ol>
        {icindekiler.map((icindeki, index) => (
          <li key={index}>
            {icindeki.text}
            <img className={style.icon} src={icindeki.image} />
          </li>
        ))}
      </ol>
      <p>{kalori}</p>
      <img className={style.image} src={foto} alt="Tarif FOTO" />
    </div>
  );
}

export default Tarifler;
