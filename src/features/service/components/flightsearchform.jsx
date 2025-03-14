import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FlightSearchForm = ({ onSearch }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (departure && destination && date) {
      onSearch({ departure, destination, date });
    }
  };

  return (
    <Card className="p-6 mb-8">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {/* Departure Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Departure</label>
          <Input
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="From where?"
          />
        </div>

        {/* Destination Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Destination</label>
          <Input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where to?"
          />
        </div>

        {/* Travel Date (Fixed Alignment) */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Travel Date</label>
          <div>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              minDate={new Date()}
              dateFormat="dd MMM yyyy"
              placeholderText="DD MMM YYYY"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button type="submit" className="w-full">
            Search Flights
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FlightSearchForm;
