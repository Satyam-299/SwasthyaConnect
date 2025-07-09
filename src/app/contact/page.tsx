
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, CheckCircle, ArrowLeft } from 'lucide-react';

const benefits = [
    {
        icon: CheckCircle,
        title: "Real-Time Data",
        description: "Access live, verified information on bed availability, oxygen stock, and doctor schedules.",
    },
    {
        icon: CheckCircle,
        title: "Seamless Transport",
        description: "Instantly book ambulances or cabs directly to the hospital of your choice.",
    },
    {
        icon: CheckCircle,
        title: "24/7 Emergency Support",
        description: "Dedicated emergency services and SOS features are available around the clock.",
    },
     {
        icon: CheckCircle,
        title: "Digital Health Records",
        description: "Securely manage your prescriptions, lab reports, and consultation history online.",
    },
];

export default function ContactPage() {
    return (
        <div className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center p-4">
             {/* Background Image and Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                    alt="Doctor with tablet"
                    fill
                    className="object-cover"
                    data-ai-hint="doctor medical"
                />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            </div>
            
            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <Card className="bg-card/80 backdrop-blur-md shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">Get in Touch</CardTitle>
                        <CardDescription className="text-lg">
                            We hope you enjoyed exploring SwasthyaConnect! If you have any questions, feedback, or support needs, feel free to reach out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* Key Benefits Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-center mb-4 font-headline">Key Benefits of SwasthyaConnect</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                        <benefit.icon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold">{benefit.title}</p>
                                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="text-center border-t pt-6">
                            <h3 className="text-xl font-bold mb-4 font-headline">Contact Information</h3>
                             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Mail className="h-5 w-5 text-primary"/>
                                    <a href="mailto:contactswasthyaconnect@gmail.com" className="hover:text-primary hover:underline">
                                        contactswasthyaconnect@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Phone className="h-5 w-5 text-primary"/>
                                    <a href="tel:+917300000791" className="hover:text-primary hover:underline">
                                        +91 73xxxxx791
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                         {/* Return Home Button */}
                        <div className="mt-8 text-center">
                            <Button asChild variant="outline">
                                <Link href="/">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Return to Home
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
