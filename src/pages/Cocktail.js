import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Cocktail = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then(res => {
        setCountries(res.data);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
      });
  }, []);
  if (load) {
    return (
      <Layout>
        <ul>
          {error ? (
            <li>{error.message}</li>
          ) : (
            countries.map((country, index) => (
              <li key={index}>{country.name}</li>
            ))
          )}
        </ul>
      </Layout>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Cocktail;
