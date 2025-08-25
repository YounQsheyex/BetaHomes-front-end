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
  const handleSearch = ({ location, bedrooms }) => {
    if (!location && !bedrooms) {
      setFilteredProperties(properties); // reset to all
      return;
    }

    const results = properties.filter((p) => {
      const matchesLocation = location
        ? p.location.toLowerCase().includes(location.toLowerCase())
        : true;

      const matchesBedrooms = bedrooms
        ? String(p.bedrooms).toLowerCase().includes(bedrooms.toLowerCase())
        : true;

      return matchesLocation && matchesBedrooms;
    });

    setFilteredProperties(results);
  };

  return (
    <PropertyContext.Provider value={{ loading, properties,filteredProperties,handleSearch }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default Propertyprovider;
