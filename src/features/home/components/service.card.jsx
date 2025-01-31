import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.jsx";

export default function ServiceCard({service}) {
    return (<Card
        className="border border-[#E2E2E2] rounded-2xl transform scale-90 sm:scale-95 lg:scale-100"
    >
        <img
            src={service.image}
            alt={service.title}
            className="w-full h-40 sm:h-48 object-contain rounded-t-2xl"
        />
        <CardContent className="p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{service.title}</h2>
            <div className="flex items-center justify-between gap-4">
                <p className="text-gray-600 text-sm sm:text-base flex-1">{service.description}</p>
                <Button
                    className="w-9 h-9 sm:w-14 sm:h-14 p-0 rounded-full bg-blue-500 text-white hover:bg-blue-600 flex-shrink-0">
                    <ArrowUpRight size={22}/>
                </Button>
            </div>
        </CardContent>
    </Card>);
}
