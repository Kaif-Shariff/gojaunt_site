import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import FlightSearchForm from "./flightsearchform";
import FlightResults from "./flightresults";

export default function FlightSearch() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const dummyFlights = [
    {
      id: 1,
      departureAirport: "JFK - New York",
      destinationAirport: "LAX - Los Angeles",
      departureTime: "09:00 AM",
      arrivalTime: "12:00 PM",
      duration: "6h 0m",
      price: 250,
    },
  ];

  const handleSearch = async () => {
    setLoading(true);
    try {
      setFlights(dummyFlights);
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Flight</h1>

      <FlightSearchForm onSearch={handleSearch} />

      {loading ? (
        <div className="text-center">Loading flights...</div>
      ) : flights.length > 0 ? (
        <FlightResults flights={flights} />
      ) : (
        <div className="text-center text-gray-500">
          Enter your search criteria to find available flights
        </div>
      )}
    </div>
  );
}
