import { axiosInstance } from "../../utils/axiosInstance";
import { useState, useEffect, createContext } from "react";

export const PropertyContext = createContext();

const Propertyprovider = ({ children }) => {
  const [loading, setIsloading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // get all properties from db
  const fetchProperties = async () => {
    setIsloading(true);
    try {
      const response = await axiosInstance.get("/property/all-property");
      const { data } = response;
      const property = data.properties || data || [];
      console.log(property);
      setProperties(property);
      setFilteredProperties(property);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // Search function
  const handleSearch = (query) => {
    if (!query.location && !query.bedrooms) {
      setFilteredProperties(properties);
      return;
    }

    const results = properties.filter((p) => {
      const matchesLocation = query.location
        ? (p.location || "").toLowerCase().includes(location.toLowerCase())
        : true;

      const matchesBedrooms = query.bedrooms
        ? parseInt(p.bedrooms) === Number(query.bedrooms) // extract number safely
        : true;

      return matchesLocation && matchesBedrooms;
    });

    setFilteredProperties(results);
  };

  return (
    <PropertyContext.Provider
      value={{ loading, properties, filteredProperties, handleSearch }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export default Propertyprovider;
