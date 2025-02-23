import { useState } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import { motion } from "framer-motion";
import { email, phone } from "@/core/constant.js";

export default function ServiceCard({ service }) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial animation
            animate={{ opacity: 1, y: 0 }} // Enter animation
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
            whileHover={{ scale: 1.05 }} // Hover effect
            className="w-full sm:w-[320px] md:w-[350px] flex flex-col"
        >
            <Card className="border border-gray-200 rounded-3xl shadow-lg overflow-hidden bg-white flex flex-col h-full">

                {/* Image Section */}
                <div className="flex justify-center p-4">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-28 h-28 object-contain rounded-full shadow-md"
                    />
                </div>

                <CardContent className="p-5 text-center flex flex-col flex-grow">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h2>

                    {/* Description (Min Height Added) */}
                    <p className="text-gray-600 text-md mb-4 flex-grow min-h-[80px]">
                        {service.description}
                    </p>

                    {/* Action Button (Always at Bottom) */}
                    <div className="mt-auto">
                        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                            <DialogTrigger asChild>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full transition-all hover:bg-blue-700"
                                >
                                    Learn More <ArrowUpRight className="inline-block ml-2" />
                                </motion.button>
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
                                        <Mail className="w-5 h-5 text-primary" />
                                        <a href={`mailto:${email}`} className="text-primary hover:underline">
                                            {email}
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <a href={`tel:${phone}`} className="text-primary hover:underline">
                                            {phone}
                                        </a>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                </CardContent>
            </Card>
        </motion.div>
    );
}
