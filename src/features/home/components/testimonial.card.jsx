import {Card, CardContent} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

export default function TestimonialCard({ testimonial }) {
    return (
        <Card className="
            /* Responsive Widths */
            w-[280px] sm:w-[380px] lg:w-[450px]
            mx-3 md:mx-5
            /* Design: Minimal & Clean */
            border-none bg-[#f8f8f8] rounded-2xl transition-colors
        ">
            <CardContent className="p-8 md:p-12">
                <div className="flex flex-col gap-6">
                    {/* Content First - Modern Hierarchy */}
                    <p className="text-lg md:text-xl font-medium tracking-tight text-gray-700 leading-snug group-hover:text-white transition-colors">
                        &#34;{testimonial.content}&#34;
                    </p>

                    <div className="flex items-center space-x-4">
                        <Avatar className="w-10 h-10 md:w-12 md:h-12 border border-gray-200">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-bold text-sm md:text-base uppercase tracking-widest text-black group-hover:text-white transition-colors">
                                {testimonial.name}
                            </h3>
                            <p className="text-xs font-mono text-blue-600 group-hover:text-blue-400 transition-colors">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}