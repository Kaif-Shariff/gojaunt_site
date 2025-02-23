import {useState} from "react";
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
import {motion} from "framer-motion";
import {email, phone} from "@/core/constant.js";

export default function ServiceCard({service}) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: "easeOut"}}
            whileHover={{scale: 1.05}}
            className="w-full sm:w-[320px] md:w-[350px] flex flex-col"
        >
            <Card
                className="border border-gray-200 rounded-3xl shadow-lg overflow-hidden bg-white flex flex-col h-full">

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
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full transition-all hover:bg-blue-700"
                                >
                                    Learn More <ArrowUpRight className="inline-block ml-2"/>
                                </motion.button>
                            </DialogTrigger>
                            <DialogContent>
                                <motion.div
                                    initial={{opacity: 0, scale: 0.8}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.8}}
                                    transition={{duration: 0.3, ease: "easeOut"}}
                                    className="bg-white p-6 rounded-2xl shadow-xl"
                                >
                                    <DialogHeader className="text-center">
                                        <DialogTitle className="text-2xl font-bold text-gray-800 mt-4">
                                            Contact Information
                                        </DialogTitle>
                                        <DialogDescription className="text-gray-600">
                                            Reach out to us for any inquiries about our services.
                                        </DialogDescription>
                                    </DialogHeader>

                                    {/* Contact Info Section */}
                                    <div className="flex flex-col space-y-4 mt-6">
                                        <div
                                            className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-all">
                                            <Mail className="w-6 h-6 text-blue-600"/>
                                            <a href={`mailto:${email}`}
                                               className="text-blue-600 font-semibold hover:underline">
                                                {email}
                                            </a>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-all">
                                            <Phone className="w-6 h-6 text-blue-600"/>
                                            <a href={`tel:${phone}`}
                                               className="text-blue-600 font-semibold hover:underline">
                                                {phone}
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </DialogContent>
                        </Dialog>
                    </div>

                </CardContent>
            </Card>
        </motion.div>
    );
}
