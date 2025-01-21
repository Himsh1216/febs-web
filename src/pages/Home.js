import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.js';
import { Button } from '@/components/ui/button.js';
import { CalendarIcon, UsersIcon, MapPinIcon } from 'lucide-react';
const Home = () => {
    const [activeTab, setActiveTab] = useState('all');
    const upcomingEvents = [
        {
            title: "Tech Workshop 2024",
            date: "April 15, 2024",
            location: "Main Campus",
            description: "Learn about latest technologies and trends",
            category: "workshop"
        },
        {
            title: "Networking Mixer",
            date: "April 20, 2024",
            location: "Innovation Hub",
            description: "Connect with industry professionals",
            category: "networking"
        }
    ];
    const pastAchievements = [
        {
            title: "Rise to Thrive: Entrepreneurship Bootcamp",
            description: "Fostering entrepreneurial skills with industry experts like Anjan Dutta and Avelo Roy.",
            date: "July 23 - 30, 2023",
            participants: 150
        },
        {
            title: "BI Brilliance: Power BI Contest",
            description: "Pan-India competition showcasing data visualization skills.",
            date: "June 2023",
            participants: 300
        },
        {
            title: "Quant Workshop & Alphathon",
            description: "Exploring quantitative finance with World Quant.",
            date: "August 2023",
            participants: 200
        }
    ];
    return (React.createElement("div", { className: "flex flex-col gap-8" },
        React.createElement("section", { className: "relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-32 overflow-hidden" },
            React.createElement("div", { className: "absolute inset-0 bg-[url('/grid.svg')] opacity-20" }),
            React.createElement("div", { className: "container mx-auto px-4 relative z-10" },
                React.createElement("div", { className: "max-w-3xl" },
                    React.createElement("h1", { className: "text-5xl md:text-7xl font-bold mb-6 animate-fade-in" },
                        "Welcome to ",
                        React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400" }, "FEBS")),
                    React.createElement("p", { className: "text-xl md:text-2xl mb-8 text-gray-200" }, "Fostering Excellence in Business and Science through Innovation and Leadership"),
                    React.createElement("div", { className: "flex gap-4" },
                        React.createElement(Button, { size: "lg", className: "bg-white text-blue-600 hover:bg-gray-100" }, "Get Started"),
                        React.createElement(Button, { variant: "outline", size: "lg", className: "border-white text-white hover:bg-white/10" }, "Learn More"))))),
        React.createElement("section", { className: "container mx-auto px-4 py-16" },
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                {
                    title: "Innovation",
                    description: "Discover cutting-edge technologies and innovative solutions.",
                    icon: "🚀"
                },
                {
                    title: "Entrepreneurship",
                    description: "Fostering an entrepreneurial spirit through bootcamps and mentorship.",
                    icon: "💡"
                },
                {
                    title: "Financial Literacy",
                    description: "Promoting financial literacy with expert sessions and workshops.",
                    icon: "📈"
                }
            ].map((feature, index) => (React.createElement(Card, { key: index, className: "group hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500" },
                React.createElement(CardHeader, null,
                    React.createElement("div", { className: "text-4xl mb-4" }, feature.icon),
                    React.createElement(CardTitle, { className: "text-2xl group-hover:text-blue-600 transition-colors" }, feature.title)),
                React.createElement(CardContent, null,
                    React.createElement("p", { className: "text-gray-600 mb-6" }, feature.description),
                    React.createElement(Button, { variant: "outline", className: "group-hover:bg-blue-500 group-hover:text-white transition-all" }, "Learn More"))))))),
        React.createElement("section", { className: "bg-gray-50 py-20" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-4xl mx-auto text-center mb-16" },
                    React.createElement("h2", { className: "text-4xl font-bold mb-6" }, "About Us"),
                    React.createElement("p", { className: "text-xl text-gray-600" }, "Bridging the gap between business and science, fostering innovation and collaboration across disciplines.")),
                React.createElement("div", { className: "grid md:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", { className: "space-y-8" },
                        React.createElement("div", { className: "grid grid-cols-2 gap-6" }, [
                            { number: "100+", label: "Events Organized" },
                            { number: "2000+", label: "Active Members" },
                            { number: "50+", label: "Industry Partners" },
                            { number: "95%", label: "Success Rate" }
                        ].map((stat, index) => (React.createElement("div", { key: index, className: "p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow" },
                            React.createElement("h4", { className: "text-3xl font-bold text-blue-600 mb-2" }, stat.number),
                            React.createElement("p", { className: "text-gray-600" }, stat.label)))))),
                    React.createElement("div", { className: "relative" },
                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3" }),
                        React.createElement("img", { src: "assets/images/hero-bg.jpeg", alt: "About FEBS", className: "relative rounded-2xl shadow-xl" }))))),
        React.createElement("section", { className: "py-20" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("h2", { className: "text-4xl font-bold text-center mb-16" }, "Upcoming Events"),
                React.createElement("div", { className: "flex justify-center gap-4 mb-8" }, ['all', 'workshop', 'networking'].map((tab) => (React.createElement(Button, { key: tab, variant: activeTab === tab ? "default" : "outline", onClick: () => setActiveTab(tab), className: "capitalize" }, tab)))),
                React.createElement("div", { className: "grid md:grid-cols-2 gap-8" }, upcomingEvents
                    .filter(event => activeTab === 'all' || event.category === activeTab)
                    .map((event, index) => (React.createElement(Card, { key: index, className: "group hover:shadow-xl transition-all duration-300" },
                    React.createElement(CardHeader, null,
                        React.createElement(CardTitle, { className: "text-2xl group-hover:text-blue-600 transition-colors" }, event.title)),
                    React.createElement(CardContent, null,
                        React.createElement("div", { className: "flex flex-col gap-4" },
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement(CalendarIcon, { className: "w-5 h-5 text-blue-500" }),
                                React.createElement("span", { className: "text-gray-600" }, event.date)),
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement(MapPinIcon, { className: "w-5 h-5 text-blue-500" }),
                                React.createElement("span", { className: "text-gray-600" }, event.location)),
                            React.createElement("p", { className: "text-gray-600 mt-2" }, event.description),
                            React.createElement(Button, { className: "mt-4 w-full group-hover:bg-blue-600 transition-colors" }, "Register Now"))))))))),
        React.createElement("section", { className: "bg-gradient-to-b from-gray-50 to-white py-20" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("h2", { className: "text-4xl font-bold text-center mb-16" }, "Our Achievements"),
                React.createElement("div", { className: "grid md:grid-cols-3 gap-8" }, pastAchievements.map((achievement, index) => (React.createElement(Card, { key: index, className: "group hover:shadow-xl transition-all duration-300 overflow-hidden" },
                    React.createElement("div", { className: "h-2 bg-gradient-to-r from-blue-500 to-purple-500" }),
                    React.createElement(CardHeader, null,
                        React.createElement(CardTitle, { className: "group-hover:text-blue-600 transition-colors" }, achievement.title)),
                    React.createElement(CardContent, null,
                        React.createElement("p", { className: "text-gray-600 mb-6" }, achievement.description),
                        React.createElement("div", { className: "flex items-center justify-between text-sm text-gray-500" },
                            React.createElement("div", { className: "flex items-center gap-2" },
                                React.createElement(CalendarIcon, { className: "w-4 h-4" }),
                                React.createElement("span", null, achievement.date)),
                            React.createElement("div", { className: "flex items-center gap-2" },
                                React.createElement(UsersIcon, { className: "w-4 h-4" }),
                                React.createElement("span", null,
                                    achievement.participants,
                                    " Participants"))))))))))));
};
export default Home;
