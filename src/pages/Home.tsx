import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.js';
import { Button } from '@/components/ui/button.js';
import { CalendarIcon, UsersIcon, MapPinIcon } from 'lucide-react';

interface Event {
    title: string;
    date: string;
    location: string;
    description: string;
    category: string;
}

interface Achievement {
    title: string;
    description: string;
    date: string;
    participants: number;
}

const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'workshop' | 'networking'>('all');
    
    const upcomingEvents: Event[] = [
        {
            title: "Tech Workshop 2024",
            date: "April 15, 2024",
            location: "Main Campus",
            description: "Learn about latest technologies and trends",
            category: "workshop",
        },
        {
            title: "Networking Mixer",
            date: "April 20, 2024",
            location: "Innovation Hub",
            description: "Connect with industry professionals",
            category: "networking",
        },
    ];

    const pastAchievements: Achievement[] = [
        {
            title: "Rise to Thrive: Entrepreneurship Bootcamp",
            description: "Fostering entrepreneurial skills with industry experts like Anjan Dutta and Avelo Roy.",
            date: "July 23 - 30, 2023",
            participants: 150,
        },
        {
            title: "BI Brilliance: Power BI Contest",
            description: "Pan-India competition showcasing data visualization skills.",
            date: "June 2023",
            participants: 300,
        },
        {
            title: "Quant Workshop & Alphathon",
            description: "Exploring quantitative finance with World Quant.",
            date: "August 2023",
            participants: 200,
        },
    ];

    return (
        <div className="flex flex-col gap-8">
            <section className="relative bg-gradient-to-r from-[#28d4a5] via-[#1f78d1] to-[#003f6f] text-white py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-no-repeat bg-center opacity-20" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f78d1] to-[#28d4a5]">FEBS</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Fostering Excellence in Business and Science through Innovation and Leadership
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" className="bg-[#28d4a5] text-white hover:bg-[#1f78d1]">Get Started</Button>
                            <Button variant="outline" size="lg" className="border-[#28d4a5] text-[#28d4a5] hover:bg-[#1f78d1] hover:text-white">Learn More</Button>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center mb-16">Upcoming Events</h2>
                <div className="flex justify-center gap-4 mb-8">
                    {['all', 'workshop', 'networking'].map((tab) => (
                        <Button key={tab} variant={activeTab === tab ? 'default' : 'outline'} onClick={() => setActiveTab(tab as 'all' | 'workshop' | 'networking')} className="capitalize">
                            {tab}
                        </Button>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {upcomingEvents
                        .filter((event) => activeTab === 'all' || event.category === activeTab)
                        .map((event, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-2xl group-hover:text-[#1f78d1] transition-colors">
                                        {event.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <CalendarIcon className="w-5 h-5 text-[#28d4a5]" />
                                            <span className="text-gray-600">{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPinIcon className="w-5 h-5 text-[#28d4a5]" />
                                            <span className="text-gray-600">{event.location}</span>
                                        </div>
                                        <p className="text-gray-600 mt-2">{event.description}</p>
                                        <Button className="mt-4 w-full group-hover:bg-[#1f78d1] transition-colors">Register Now</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
