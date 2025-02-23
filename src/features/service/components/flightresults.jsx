import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "react-datepicker/dist/react-datepicker.css";

const FlightResults = ({ flights }) => {
  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <Card key={flight.id} className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <div>
              <p className="font-medium">{flight.departureTime}</p>
              <p className="text-sm text-gray-500">{flight.departureAirport}</p>
            </div>
            <div>
              <p className="font-medium">{flight.arrivalTime}</p>
              <p className="text-sm text-gray-500">
                {flight.destinationAirport}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm">{flight.duration}</p>
              <p className="text-xs text-gray-500">Non-stop</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-primary">${flight.price}</p>
              <Button size="sm" className="mt-2">
                Book Now
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FlightResults;
