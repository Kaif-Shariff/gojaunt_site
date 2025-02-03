import {ArrowUpRight, Mail, Phone} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.jsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {email, phone} from "@/core/constant.js";
import {useState} from "react";

export default function ServiceCard({service}) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            {/* The Service Card */}
            <Card className="border border-[#E2E2E2] rounded-2xl transform scale-100 sm:scale-90 lg:scale-100">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 sm:h-48 object-contain rounded-t-2xl"
                />
                <CardContent className="p-3 sm:p-4">
                    <h2 className="text-xl sm:text-xl font-semibold mb-1 sm:mb-2">{service.title}</h2>
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-gray-600 text-md sm:text-base flex-1">{service.description}</p>
                        <div className="text-center mt-12">
                            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                                <DialogTrigger asChild>
                                    <button
                                        className="w-9 h-9 sm:w-14 sm:h-14 p-0 flex justify-center items-center rounded-full bg-blue-500 text-white hover:bg-blue-600 flex-shrink-0"
                                    >
                                        <ArrowUpRight size={30}/>
                                    </button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Contact Information</DialogTitle>
                                        <DialogDescription>
                                            Reach out to us for any inquiries about our services.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex flex-col space-y-4 mt-4">
                                        <div className="flex items-center space-x-2">
                                            <Mail className="w-5 h-5 text-primary"/>
                                            <a href={`mailto:${email}`} className="text-primary hover:underline">
                                                {email}
                                            </a>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Phone className="w-5 h-5 text-primary"/>
                                            <a href={`tell:${phone}`} className="text-primary hover:underline">
                                                {phone}
                                            </a>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </>
    );
}
