import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.jsx";

export default function ServiceCard({service}) {
    return (
        <Card
            className="border border-[#E2E2E2] rounded-2xl shadow-md hover:shadow-lg transition-shadow"
        >
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-contain rounded-t-2xl"
            />
            <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <div className="flex items-center justify-between gap-4">
                    <p className="text-[#77797D] font-medium flex-1">{service.description}</p>
                    <Button
                        className="w-14 h-14 p-0 rounded-full bg-blue-500 text-white hover:bg-blue-600 flex-shrink-0"
                    >
                        <ArrowUpRight size={20} />
                    </Button>

                </div>
            </CardContent>
        </Card>
    );
}
