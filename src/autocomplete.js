import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.scss';
export const Autocomplete = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const getData = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    setData(response.data.results);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {search && (
        <div>
          {data
            .filter(
              ({ name }) =>
                name.toLowerCase().indexOf(search.toLowerCase()) > -1
            )
            .map((value, i) => (
              <div
                className="options-container"
                key={i}
                onClick={() => alert(value.name)}
              >
                <img src={value.image} alt="o" />
                <p>{value.name}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
