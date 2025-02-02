import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LinkedinIcon, TwitterIcon, MailIcon, GithubIcon, ExternalLinkIcon } from 'lucide-react';

const Team = () => {
    const [activeFilter, setActiveFilter] = useState('managerial team');
    const team = {
        
            managerialTeam: [
                
                  {
                    name: "Aryush Tripathi",
                    role: "Secretary",
                    image: "/assets/images/Aryush Bhaiya.png",
                    bio: "Secretary of Finance Economics and Business Society(FEBS) @ IIT BBS | Business Consulting | Data Science",
                    linkedin: "https://www.linkedin.com/in/aryush-tripathi-780a28262/",
                  },
                  {
                    "name": "Aman gupta",
                    "role": " Relation and Outreach Head",
                    "image": "/assets/images/Picture  (File responses)/IMG_5397 - AMAN GUPTA.JPG",
                    "bio": " Relation and Outreach Head | Year: 2nd year | IIT Bhubaneswar",
                    "linkedin": "https://www.linkedin.com/in/aman-gupta-1a5622215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                {
                    "name": "Shreyansh Choudhary",
                    "role": "Content Head",
                    "image": "/assets/images/Picture  (File responses)/IMG_9474 - SHREYANSH CHOUDHARY.jpeg",
                    "bio": "Content Head | Year: 2nd | IIT Bhubaneswar",
                    "linkedin": "https://www.linkedin.com/in/shreyansh-choudhary-lets-connect?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app\n\n(Shreyansh Choudhary)"
                },
                {
                    "name": "Aditya kumar Giri",
                    "role": "Team Coordinator",
                    "image": "/assets/images/Picture  (File responses)/IMG20240127183055 - ADITYA KUMAR GIRI.jpg",
                    "bio": "Team Coordinator  | Year: 2nd year | IIT Bhubaneswar",
                    "linkedin": "https://www.linkedin.com/in/aditya-giri-79884a291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                {
                    "name": "Divyanshu Dubey",
                    "role": "Data Science Head",
                    "image": "/assets/images/Picture  (File responses)/IMG-20231011-WA0007 - Divyanshu Dubey.jpg",
                    "bio": "Data Science Head  | Year: 2nd Year | IIT Bhubaneswar",
                    "linkedin": "https://www.linkedin.com/in/divyanshu-dubey-121261290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                {
                    "name": "Arshad Amaan",
                    "role": "Governor",
                    "image": "/assets/images/Picture  (File responses)/WhatsApp Image 2024-07-13 at 12.15.14 AM - ARSHAD AMAAN.jpeg",
                    "bio": "Governor | Year: 3rd year | IIT Bhubaneswar",
                    "linkedin": "https://www.linkedin.com/in/arshad-amaan-818669288/"
                },
                {
                    "name": "Sumit Chaudhary",
                    "role": "Technical Head",
                    "image": "/assets/images/Picture  (File responses)/IMG_20240401_105033 - Sumit Chaudhary.jpg",
                    "bio": "Technical Head  | Year: Second  | IIT Bhubaneswar",
                    "linkedin": "https://www.linkedin.com/in/sumit-chaudhary-34b0a7296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                {
                    "name": "Aum vyas",
                    "role": "Team Coordinator",
                    "image": "/assets/images/Picture  (File responses)/IMG-20240718-WA0002 - AUM VYAS.jpg",
                    "bio": "Team Coordinator  | Year: 2nd | IIT Bhubaneswar",
                    "linkedin": "https://www.linkedin.com/in/aum-vyas-90a94128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                {
                    "name": "Shriya Jain",
                    "role": "Business Head",
                    "image": "/assets/images/Picture  (File responses)/IMG_0321 - SHRIYA JAIN.jpeg",
                    "bio": "Business Head | Year: 2 nd | IIT Bhubaneswar",
                    "linkedin": "https://www.linkedin.com/in/shriya-jain-b87706296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                },
                {
                  "name": "Adarsh Raj",
                  "role": "Economics head",
                  "image": "/assets/images/Picture  (File responses)/InShot_20240128_231839504 - ADARSH RAJ.jpeg",
                  "bio": "Economics head | Year: 2024-25 | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/adarsh-raj-1868a52a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                "name": "kushagra tiwari",
                "role": "Finance head",
                "image": "/assets/images/Picture  (File responses)/WhatsApp Image 2024-07-16 at 23.19.44_163fca05 - Kushagra Tiwari.jpg",
                "bio": "Finance head | Year: Dual 2nd year | IIT Bhubaneswar",
                "linkedin": "https://www.linkedin.com/in/kushagra-tiwari-28a989291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            ],
            advisory: [
                {
                    name: "Kumar Saurabh",
                    role: "Society Advisor",
                    image: "assets/images/Kumar Saurabh Bhaiya.png",
                    bio: "CSE'26 @IIT Bhubaneswar | Contingent Leader @Inter IIT Tech Meet 13.0 | Internship Coordinator @Career Development Cell | Ex-Secretary, FEBS",
                    linkedin: "https://www.linkedin.com/in/india-kumar-saurabh/"
                }
            ],
            societyMembers: [
                {
                  "name": "Anubhav Mishra",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/Screenshot_20240611-144840 - ANUBHAV MISHRA.png",
                  "bio": "Member  | Year: 2023 | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/anubhav-mishra-52724a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Debtanu Das",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG-20240530-WA0005 - DEBTANU DAS.jpg",
                  "bio": "Member  | Year: 2nd  | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/debtanu-das-585048296/"
              },
              {
                  "name": "Sai Tejaswini Karengla",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG_20240714_124419 - Tejaswini Karengla.jpg",
                  "bio": "Member  | Year: 2023 | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/karengla-s-sai-tejaswini-178ba0298\n\nKARENGLA S SAI TEJASWINI"
              },
              {
                  "name": "Ansh Saini",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG-20231212-WA0015 - Ansh Saini.jpg",
                  "bio": "Member  | Year: 2023 | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/ansh-saini-50b204280"
              },
              {
                  "name": "Divyal Patil",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/1691039689917 - DIVYAL DAYANAND PATIL.jpg",
                  "bio": "Member  | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/divyal-patil-4803282a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Mokshya sahu",
                  "role": "Member of FEBS society ,  Operational manager at economics conclave .",
                  "image": "/assets/images/Picture  (File responses)/IMG_0669 - MOKSHYA SAHU.jpeg",
                  "bio": "Member of FEBS society ,  Operational manager at economics conclave . | Year: 2nd year | IIT Bhubaneswar",
                  "linkedin": "http://linkedin.com/in/mokshya-sahu-162a07281"
              },
              
              {
                  "name": "Het Sarsava",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/New_DP_pic - SARSAVA HET PRAVINBHAI.jpg",
                  "bio": "Member | Year: 2022 | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/het-sarsava/"
              },
              {
                  "name": "Poonam Kiran Patil",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG_20230930_131008 - Poonam Patil.jpg",
                  "bio": "Member | Year: Second  | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/poonam-patil-a72875242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Arihant Garg",
                  "role": "Quant Club Member",
                  "image": "/assets/images/Picture  (File responses)/Arihant_Photo - arihant garg.jpg",
                  "bio": "Quant Club Member | Year: 4th | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/arihant-garg-22a535247/"
              },
              {
                  "name": "Ashish Kumar Singh",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/SAVE_20231228_202222 - ASHISH KUMAR SINGH.jpg",
                  "bio": "Member | Year: Third Year | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/ashish-kumar-singh-a8a954262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Sohan Bhattacharjya",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/PSX_20240603_164133 - Sohan Bhattacharjya.jpg",
                  "bio": "Member  | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/sohan-bhattacharjya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Mohammad Ateeq Ahmad",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG_20240717_210900 - Ateeq Ahmad.jpg",
                  "bio": "Member | Year: Second  | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/ateeq-ahmad-8b4012285"
              },
              {
                  "name": "Priyanshu Gupta",
                  "role": "Member",
                  "image": "https://drive.google.com/open?id=1YjK0LiKrCuOu87fpCOcALouqDE9OT1yw",
                  "bio": "Member | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/priyanshu-gupta-64b354292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appq"
              },
              {
                  "name": "Archit Sharma",
                  "role": "Events head",
                  "image": "/assets/images/Picture  (File responses)/farewell photo - ARCHIT SHARMA.jpg",
                  "bio": "Events head | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/archit-sharma-16ba5127b/"
              },
              {
                  "name": "Arya Bhardwaj",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG_20240530_012610_310 - arya Bhardwaj.jpg",
                  "bio": "Member | Year: 2023-2027 | IIT Bhubaneswar",
                  "linkedin": "Arya Bhardwaj"
              },
              {
                  "name": "Alfi L R",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/Image123 - ALFI L R.jpg",
                  "bio": "Member | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "alfi-l-r-77b96b319"
              },
              {
                  "name": "Matru Prasad Mohanty",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/my photo - MATRU PRASAD MOHANTY.jpg",
                  "bio": "Member | Year: 2024 | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/matru-prasad-mohanty-758a82293?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Ba6vN9F3HQSKY3RMAOuiXSA%3D%3D"
              },
              {
                  "name": "PRINCE KUMAR",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/Screenshot_20240718_030816_Gallery - PRINCE KR..jpg",
                  "bio": "Member | Year: Second | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/prince-kumar-163704293"
              },
              {
                  "name": "Harsh Pratap Singh",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/20240628_201828 - HARSH PRATAP SINGH.jpg",
                  "bio": "Member | Year: Second | IIT Bhubaneswar",
                  "linkedin": "Harsh Pratap Singh"
              },
              {
                  "name": "Hirendra Basantani",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/Hirendra_PIC - Hirendra Basantani.jpg",
                  "bio": "Member | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/hirendra-basantani-45a0a52a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Aaditya Sharma",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/febs pic - Aaditya Sharma.jpeg",
                  "bio": "Member | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/aaditya-sharma-061bb2255/"
              },
              {
                  "name": "SHASHANK JHA",
                  "role": "Member",
                  "image": "",
                  "bio": "Member | Year: 2nd year | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/shashank-jha-b4418128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Dhruvi Ladvaiya",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/20240128_010348 - LADVAIYA DHRUVIBEN RAJESHBHAI.jpg",
                  "bio": "Member | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/dhruvi-ladvaiya-064009296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Gitanjali Suar",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/Screenshot_2024_0413_225324 - GITANJALI SUAR.jpg",
                  "bio": "Member | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "Gitanjali"
              },
              {
                  "name": "Mohit Shukla",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG_2628 - MOHIT SHUKLA.png",
                  "bio": "Member | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/mohit-shukla-74b055296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              },
              {
                  "name": "Ashis Vikram Prusty",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG_20240718_224307 - ASHIS VIKRAM PRUSTY.jpg",
                  "bio": "Member | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/ashis-vikram-prusty-00958a280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Surya Dipto Basu",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG-20240718-WA0075 - SURYA DIPTO BASU.jpg",
                  "bio": "Member | Year: Second | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/surya-dipto-basu-iit-bbs?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Gagan Gupta",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG-20230802-WA0018 - gagan gupta.jpg",
                  "bio": "Member  | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/gagan-gupta-949a252a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Spandan Satpathy",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG-20231112-WA0024 - Spandan Satpathy.jpg",
                  "bio": "Member | Year: 2 | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/spandan-satpathy-785620250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                  "name": "Aditya Raj",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/IMG_20240211_102940_999 - ADITYA RAJ.jpg",
                  "bio": "Member | Year: 2nd | IIT Bhubaneswar",
                  "linkedin": "https://www.linkedin.com/in/aditya-raj-b13b491b7"
              },
              {
                  "name": "MEYSAKTHIVELAN T",
                  "role": "Member",
                  "image": "/assets/images/Picture  (File responses)/105948-1PP - Meysakthivelan Thanga Prakash.JPG",
                  "bio": "Member | Year: 3rd | IIT Bhubaneswar",
                  "linkedin": "meysakthivelan"
              }
            ]
        };
    

    // Updated color palette to match the FEBS poster
    

    const SocialLink = ({ href, icon: Icon, label }) => (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            aria-label={label}
        >
            <Icon size={20} />
        </a>
    );

    const MemberCard = ({ member, type }) => (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 max-w-xs md:max-w-sm mx-auto flex flex-col rounded-xl">
            <CardHeader className="p-0 relative">
                <div className="overflow-hidden">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-105 h-48 md:h-72"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6 text-white flex flex-col justify-between h-48 md:h-64">
                <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{member.name}</h3>
                    <p className="text-sm md:text-base text-emerald-200 font-semibold mb-2 md:mb-3">{member.role}</p>
                    <p className="text-xs md:text-sm text-gray-100 line-clamp-3">{member.bio}</p>
                </div>
                <div className="flex gap-2 md:gap-4 mt-2 md:mt-4">
                    {member.linkedin && <SocialLink href={member.linkedin} icon={LinkedinIcon} label="LinkedIn Profile" />}
                    {member.twitter && <SocialLink href={member.twitter} icon={TwitterIcon} label="Twitter Profile" />}
                    {member.email && <SocialLink href={`mailto:${member.email}`} icon={MailIcon} label="Email" />}
                </div>
            </CardContent>
        </Card>
    );

    const GridLayout = ({ items, type }) => {
        if (items.length === 1) {
            return (
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-start-2">
                        <MemberCard member={items[0]} type={type} />
                    </div>
                </div>
            );
        }

        if (items.length === 2) {
            return (
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-start-1 md:col-start-2">
                        <MemberCard member={items[0]} type={type} />
                    </div>
                    <div>
                        <MemberCard member={items[1]} type={type} />
                    </div>
                </div>
            );
        }

        return (
            <div className="grid md:grid-cols-3 gap-8">
                {items.map((member) => (
                    <MemberCard key={member.name} member={member} type={type} />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-blue-50 to-teal-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(46,204,113,0.15),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(52,152,219,0.15),transparent_70%),radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />
            
            <header className="py-24 text-center relative">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-transparent bg-clip-text">Meet Our Team</h1>
                    <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-700">
                        A diverse group of professionals dedicated to fostering excellence in business and science
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 mb-12">
                <div className="flex justify-center gap-4 flex-wrap">
                    {['managerial team', 'advisory', 'society members'].map((filter) => (
                        <Button
                            key={filter}
                            variant={activeFilter === filter ? "default" : "outline"}
                            onClick={() => setActiveFilter(filter)}
                            className={`capitalize ${
                                activeFilter === filter 
                                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white border-none shadow-lg' 
                                    : 'text-gray-700 border-emerald-400 hover:bg-emerald-100/50'
                            }`}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24 relative">
                {activeFilter === 'managerial team' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-blue-600 text-transparent bg-clip-text">Managerial Team</h2>
                        <div className="space-y-12">
                            <GridLayout items={[team.managerialTeam[0]]} type="managerial team" />
                            <GridLayout items={team.managerialTeam.slice(1)} type="managerial team" />
                        </div>
                    </section>
                )}

                {activeFilter === 'advisory' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-blue-600 text-transparent bg-clip-text">Advisory</h2>
                        <GridLayout items={team.advisory} type="advisory" />
                    </section>
                )}

                {activeFilter === 'society members' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-blue-600 text-transparent bg-clip-text">Society Members</h2>
                        <GridLayout items={team.societyMembers} type="society members" />
                    </section>
                )}
            </div>
        </div>
    );
};

export default Team;