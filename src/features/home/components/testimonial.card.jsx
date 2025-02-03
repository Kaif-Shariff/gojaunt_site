import {Card, CardContent} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

export default function TestimonialCard({testimonial}) {
    return (
        <Card className="w-80 lg:w-full max-w-md m-2">
            <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name}/>
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-sm font-medium text-[#77797D]">{testimonial.content}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
