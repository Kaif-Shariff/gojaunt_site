import {useState} from 'react'
import {Mail, Phone} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import {email, phone} from "@/core/constant.js";
import {services} from "@/data/services.js";
import ServiceCard from "@/features/home/components/service.card.jsx";


export function ServicesSection() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl sm:text-6xl font-semibold text-black mb-8">
                    Tailored Travel Solutions <br/> for Every Adventure
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service}/>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                        <DialogTrigger asChild>
                            <Button size="lg">Contact Us for Inquiries</Button>
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
        </section>
    );
}
