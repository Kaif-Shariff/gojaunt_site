import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import FlightSearchForm from "./flightsearchform";
import FlightResults from "./flightresults";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AUTH_CREDENTIALS = {
  email: import.meta.env.VITE_AUTH_EMAIL,
  password: import.meta.env.VITE_AUTH_PASSWORD,
};
const AGENCY_ID = import.meta.env.VITE_AGENCY_ID;

export default function FlightSearch() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAuthToken = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        {
          email: AUTH_CREDENTIALS.email,
          password: AUTH_CREDENTIALS.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.access_token) {
        console.log("Auth Token Received:", response.data.access_token);
        return response.data.access_token;
      } else {
        throw new Error("No access token in response");
      }
    } catch (error) {
      console.error(
        "Error fetching auth token:",
        error.response?.data || error.message
      );
      return null;
    }
  };

  const getCountryCode = async (location) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${location}?fullText=true`
      );
      if (response.data && response.data.length > 0) {
        return response.data[0].cca2;
      }
    } catch (error) {
      console.error(
        `Error fetching country code for ${location}:`,
        error.message
      );
    }
    return location.toUpperCase();
  };

  const handleSearch = async ({ departure, destination, date }) => {
    setLoading(true);
    setFlights([]);

    try {
      const token = await getAuthToken();
      if (!token) throw new Error("Failed to authenticate");

      const originCode = await getCountryCode(departure);
      const destinationCode = await getCountryCode(destination);

      const response = await axios.get(`${API_BASE_URL}/visas/search`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          origin_country: originCode,
          destination_country: destinationCode,
          residence: originCode,
          travel_date: date.toISOString().split("T")[0],
          agency_id: AGENCY_ID,
        },
      });

      console.log("Visa API Response:", response.data);
      setFlights(response.data.visa_types || []);
    } catch (error) {
      console.error(
        "Error fetching visa details:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Flight</h1>

      <FlightSearchForm onSearch={handleSearch} />

      {loading ? (
        <div className="text-center">Loading visa details...</div>
      ) : flights.length > 0 ? (
        <FlightResults flights={flights} />
      ) : (
        <div className="text-center text-gray-500">
          Enter your search criteria to find available visa options.
        </div>
      )}
    </div>
  );
}
