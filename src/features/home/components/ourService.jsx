'use client'

import {useState} from 'react'
import {Plane, StampIcon as Passport, Palmtree, Train, Mail, Phone, Bed, CarTaxiFront, Luggage} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {email, phone} from "@/core/constant.js";

const services = [
    {
        icon: Plane,
        title: 'Plane Ticket Booking',
        description: 'Find the best deals on flights to your dream destinations.',
    },
    {
        icon: Passport,
        title: 'Visa Services',
        description: 'Hassle-free visa application process for your international travels.',
    },
    {
        icon: Palmtree,
        title: 'Travel Packages',
        description: 'Curated travel experiences for unforgettable adventures.',
    },
    {
        icon: Train,
        title: 'Railway Ticket Booking',
        description: 'Convenient and comfortable train journeys across the country.',
    },
    {
        icon: Bed,
        title: 'Hotel Booking',
        description: 'Curated travel experiences for unforgettable adventures.',
    },
    {
        icon: CarTaxiFront,
        title: 'Car Rental Service',
        description: 'Curated travel experiences for unforgettable adventures.',
    },
    {
        icon: Luggage,
        title: 'Travel Insurance',
        description: 'Curated travel experiences for unforgettable adventures.',
    },
]

export function ServicesSection() {
    const [isContactOpen, setIsContactOpen] = useState(false)

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <CardHeader>
                                <div
                                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                        <DialogTrigger asChild>
                            <Button size="lg">
                                Contact Us for Inquiries
                            </Button>
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
    )
}
