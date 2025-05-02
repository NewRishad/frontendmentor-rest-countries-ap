import React, { useEffect, useState } from "react";
import { Moon, Search } from "lucide-react";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/api/countries/getAllCountries');
  //       const data = await res.json();
  //       setCountries(data);
  //     } catch (error) {
  //       console.error('Failed to fetch the countries:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCountries();
  // }, []);

  //if (loading) return <p>Loading...</p>
  console.log(countries);
  // get the country flags into an array
  return (
    <div>
      <div className="navbar">
        <h1 className="title-home">Where in the world?</h1>
        <div>
          <div className="dark-mode-container">
            <Moon size="15px" aria-label="Toggle dark mode" />
            <span>Dark Mode</span>
          </div>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a country"
          className="search-input"
        />
        <div>
          <Search size="20px" />
        </div>
      </div>
    </div>
  );
};

export default Home;
