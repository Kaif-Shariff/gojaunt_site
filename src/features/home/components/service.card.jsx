import { useState } from "react";
import { ArrowUpRight} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.jsx";
import { email, phone } from "@/core/constant.js";

export default function ServiceCard({ service, index }) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const imageUrls = {
        1: "https://images.unsplash.com/photo-1576737064520-f45d313d17ff?q=80&w=688&auto=format&fit=crop",
        2: "https://images.unsplash.com/photo-1685858875697-0759165f85e3?q=80&w=687&auto=format&fit=crop",
        3: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&q=80&w=800",
        4: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
        5: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
        6: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&q=80&w=800",
        7: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800",
    };

    return (
        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <div className="group relative aspect-[4/5] border-r border-b border-gray-200 bg-white overflow-hidden flex flex-col transition-all duration-500 hover:bg-black cursor-pointer">

                {/* Invisible Click Layer */}
                <button
                    onClick={() => setIsContactOpen(true)}
                    className="absolute inset-0 z-20"
                    aria-label={`Open ${service.title}`}
                />

                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-all duration-700 scale-110 group-hover:scale-100 ease-out z-0">
                    <img
                        src={imageUrls[service.id]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 p-10 h-full flex flex-col justify-between pointer-events-none">
                    <div>
                        <span className="text-[10px] font-mono tracking-widest text-blue-600 mb-6 block group-hover:text-white transition-colors">
                            0{index + 1}
                        </span>
                        <h3 className="text-2xl font-light tracking-tight text-black group-hover:text-white transition-colors duration-300">
                            {service.title}
                        </h3>
                    </div>

                    <div className="space-y-6">
                        <p className="text-sm text-gray-400 group-hover:text-white/80 transition-colors duration-300 leading-relaxed max-w-[200px]">
                            {service.description}
                        </p>

                        {/* Learn More Button (still works) */}
                        <DialogTrigger asChild>
                            <button
                                onClick={(e) => e.stopPropagation()}
                                className="pointer-events-auto relative z-30 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black group-hover:text-white transition-all"
                            >
                                Learn More
                                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </DialogTrigger>
                    </div>
                </div>
            </div>

            {/* Dialog Content */}
            <DialogContent className="rounded-none border-none p-12 bg-white max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-5xl font-light tracking-tighter mb-4 italic font-serif">
                        Contact
                    </DialogTitle>
                    <DialogDescription className="text-base text-gray-500">
                        Inquire about our {service.title} below.
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-10 grid grid-cols-1 gap-4">
                    <a
                        href={`mailto:${email}`}
                        className="p-6 border border-gray-100 hover:border-black transition-colors flex justify-between items-center group/link"
                    >
                        <span className="text-sm uppercase tracking-widest font-bold">Email</span>
                        <span className="text-gray-400 group-hover/link:text-black">{email}</span>
                    </a>
                    <a
                        href={`tel:${phone}`}
                        className="p-6 border border-gray-100 hover:border-black transition-colors flex justify-between items-center group/link"
                    >
                        <span className="text-sm uppercase tracking-widest font-bold">Call</span>
                        <span className="text-gray-400 group-hover/link:text-black">{phone}</span>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}