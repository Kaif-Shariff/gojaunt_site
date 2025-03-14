import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import "react-datepicker/dist/react-datepicker.css";

const FlightResults = ({ flights }) => {
    return (
      <div className="space-y-4">
        {flights.map((visa, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <p className="text-lg font-semibold">{visa.process_name}</p>
                <p className="text-sm text-gray-500">Purpose: {visa.purpose}</p>
                <p className="text-sm text-gray-500">
                  Processing Time: {visa.processing_time.duration} {visa.processing_time.unit}
                </p>
              </div>
              <div>
                <p className="text-md font-bold">Visa Fee: Rs.{visa.visa_fee.amount}/-</p>
                <p className="text-md font-bold">Service Fee: Rs.{visa.service_fee.amount}/-</p>
              </div>
              <div>
                <p className="text-sm">Documents Required:</p>
                <ul className="text-sm text-gray-500">
                  {visa.required_documents.map((doc, key) => (
                    <li key={key}>{doc.label}</li>
                  ))}
                </ul>
              </div>
              <Button size="sm" className="w-full md:w-auto">
                Apply Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    );
  };
  
  export default FlightResults;
  
