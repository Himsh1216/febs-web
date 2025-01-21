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

  return (
    <div className="flex flex-col gap-8">
      {/* Enhanced Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">FEBS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Fostering Excellence in Business and Science through Innovation and Leadership
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Button variant="outline" className="group-hover:bg-blue-500 group-hover:text-white transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-xl text-gray-600">
              Bridging the gap between business and science, fostering innovation 
              and collaboration across disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "100+", label: "Events Organized" },
                  { number: "2000+", label: "Active Members" },
                  { number: "50+", label: "Industry Partners" },
                  { number: "95%", label: "Success Rate" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <h4 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h4>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3"></div>
              <img 
                src="assets/images/hero-bg.jpeg" 
                alt="About FEBS"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Upcoming Events</h2>
          <div className="flex justify-center gap-4 mb-8">
            {['all', 'workshop', 'networking'].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className="capitalize"
              >
                {tab}
              </Button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents
              .filter(event => activeTab === 'all' || event.category === activeTab)
              .map((event, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">{event.location}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{event.description}</p>
                      <Button className="mt-4 w-full group-hover:bg-blue-600 transition-colors">
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastAchievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{achievement.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{achievement.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-4 h-4" />
                      <span>{achievement.participants} Participants</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;