import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export const usePropertyContext = () => useContext(PropertyContext);
