import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import "react-datepicker/dist/react-datepicker.css";

const FlightResults = ({flights}) => {
    return (<div className="space-y-4">
        {flights.map((flight) => (<Card key={flight.id} className="p-6">
            <div
                className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left gap-4">

                <div className="flex justify-between w-full md:w-auto md:flex md:gap-8">
                    <div className="text-left">
                        <p className="text-md ">{flight.departureAirport}</p>
                        <p className="text-sm text-gray-500 font-medium">{flight.departureTime}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-md ">{flight.destinationAirport}</p>
                        <p className="text-sm text-gray-500 font-medium">{flight.arrivalTime}</p>
                    </div>
                </div>

                <div className="flex justify-between w-full md:w-auto md:gap-4 md:space-x-28">
                    <div className="text-center md:text-left">
                        <p className="text-sm font-medium">{flight.duration}</p>
                        <p className="text-xs text-gray-500">Non-stop</p>
                    </div>
                    <p className="md:text-lg font-bold text-primary">Rs.{flight.price}/-</p>
                </div>

                <div className="w-full md:w-auto">
                    <Button size="sm" className="w-full md:w-auto">Book Now</Button>
                </div>

            </div>
        </Card>))}
    </div>);
};

export default FlightResults;
