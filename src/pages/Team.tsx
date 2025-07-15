import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card.js';
import { Button } from '@/components/ui/button.js';
import { LinkedinIcon, TwitterIcon, MailIcon, ExternalLinkIcon } from 'lucide-react';
import { LucideProps } from 'lucide-react';

type TeamMember = {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
};

type Advisor = {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
};

type Team = {
    executiveTeam: TeamMember[];
    managerialTeam: TeamMember[];
    advisory: Advisor[];
    societyMembers: TeamMember[];
};

const Team: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('executive team');

    const team: Team = {
        executiveTeam: [
            {
                name: "Aryush Tripathi",
                role: "Secretary",
                image: "assets/images/Aryush Bhaiya.png",
                bio: "Secretary of Finance Economics and Business Society(FEBS) @ IIT BBS | Business Consulting | Data Science",
                linkedin: "https://www.linkedin.com/in/aryush-tripathi-780a28262/",
                // twitter: "https://twitter.com/janesmith",
                // email: "jane@febs.org"
            }
        ],
        managerialTeam: [
            
              {
                "name": "Aman gupta",
                "role": "Public Relation and Outreach Head",
                "image": "https://drive.google.com/open?id=13LiAVCW4JE45rDdlGSksSjmKqwuXpZr-",
                "bio": "Public Relation and Outreach Head | Year: 2nd year | IIT Bhubaneswar",
                "linkedin": "https://www.linkedin.com/in/aman-gupta-1a5622215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            {
                "name": "Shreyansh Choudhary",
                "role": "Content Head",
                "image": "https://drive.google.com/open?id=1XmeZ4qcINoB1i4HQBaltwnc1fnZADKWx",
                "bio": "Content Head | Year: 2nd | IIT Bhubaneswar",
                "linkedin": "https://www.linkedin.com/in/shreyansh-choudhary-lets-connect?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app\n\n(Shreyansh Choudhary)"
            },
            {
                "name": "Aditya kumar Giri",
                "role": "Team Coordinator",
                "image": "https://drive.google.com/open?id=1WgtMn815sI_5b6dfEoCGEw4NSaqcTQmg",
                "bio": "Team Coordinator  | Year: 2nd year | IIT Bhubaneswar",
                "linkedin": "https://www.linkedin.com/in/aditya-giri-79884a291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            {
                "name": "Divyanshu Dubey",
                "role": "Data Science Head",
                "image": "https://drive.google.com/open?id=1LP5cQ8zToA6kwgxFj6Oa7f2DPwcOcxcG",
                "bio": "Data Science Head  | Year: 2nd Year | IIT Bhubaneswar",
                "linkedin": "https://www.linkedin.com/in/divyanshu-dubey-121261290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            {
                "name": "Arshad Amaan",
                "role": "Governor",
                "image": "https://drive.google.com/open?id=1CQf0t4tbLCbQTQd2_1PWlSzycP7E86F0",
                "bio": "Governor | Year: 3rd year | IIT Bhubaneswar",
                "linkedin": "https://www.linkedin.com/in/arshad-amaan-818669288/"
            },
            {
                "name": "Sumit Chaudhary",
                "role": "Technical Head",
                "image": "https://drive.google.com/open?id=1boohsttPmeeahc26lB_0P8rzphGhGLar",
                "bio": "Technical Head  | Year: Second  | IIT Bhubaneswar",
                "linkedin": "https://www.linkedin.com/in/sumit-chaudhary-34b0a7296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            {
                "name": "Aum vyas",
                "role": "Team Coordinator",
                "image": "https://drive.google.com/open?id=1Ix8qt6D8aU7fV-68zAqnvk9nJ8Y9-o1V",
                "bio": "Team Coordinator  | Year: 2nd | IIT Bhubaneswar",
                "linkedin": "https://www.linkedin.com/in/aum-vyas-90a94128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },
            {
                "name": "Shriya Jain",
                "role": "Business Head",
                "image": "https://drive.google.com/open?id=1V7Y0GOLgzVmvVbhmoNW46hTkPZNENeB-",
                "bio": "Business Head | Year: 2 nd | IIT Bhubaneswar",
                "linkedin": "https://www.linkedin.com/in/shriya-jain-b87706296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            },
            {
              "name": "Adarsh Raj",
              "role": "Economics head",
              "image": "https://drive.google.com/open?id=1CEJCYWBcPzHmk_F3Ed4DD6529_yb3508",
              "bio": "Economics head | Year: 2024-25 | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/adarsh-raj-1868a52a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
            "name": "kushagra tiwari",
            "role": "Finance head",
            "image": "https://drive.google.com/open?id=1TMmAulzsROPRcIK7jnd3qEK_3zKcEfSC",
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
              "image": "https://drive.google.com/open?id=1d_G6GmmoM2ubArMXE0-Gu2ok3gmFFApW",
              "bio": "Member  | Year: 2023 | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/anubhav-mishra-52724a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Debtanu Das",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1e5sbtZZhNPF561soUXrXJuuVh1dcsBIi",
              "bio": "Member  | Year: 2nd  | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/debtanu-das-585048296/"
          },
          {
              "name": "Sai Tejaswini Karengla",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1h0RD72mBhuN-axRxjGmz0f18DPcxcRQc",
              "bio": "Member  | Year: 2023 | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/karengla-s-sai-tejaswini-178ba0298\n\nKARENGLA S SAI TEJASWINI"
          },
          {
              "name": "Ansh Saini",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1DEjHhhJd9GBXIT--KK37EOs3_c4q-6qb",
              "bio": "Member  | Year: 2023 | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/ansh-saini-50b204280"
          },
          {
              "name": "Divyal Patil",
              "role": "Member",
              "image": "/Users/himanshusharma/Documents/febs-web/public/assets/images/Picture  (File responses)/1691039689917 - DIVYAL DAYANAND PATIL.jpg",
              "bio": "Member  | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/divyal-patil-4803282a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Mokshya sahu",
              "role": "Member of FEBS society ,  Operational manager at economics conclave .",
              "image": "https://drive.google.com/open?id=1ZvxKb3kpaySbgW8_PGI-lQ6auaIbmPob",
              "bio": "Member of FEBS society ,  Operational manager at economics conclave . | Year: 2nd year | IIT Bhubaneswar",
              "linkedin": "http://linkedin.com/in/mokshya-sahu-162a07281"
          },
          
          {
              "name": "Het Sarsava",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1VPnOUFUh-yVeBbweJkU2_xyscomuUy4U",
              "bio": "Member | Year: 2022 | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/het-sarsava/"
          },
          {
              "name": "Poonam Kiran Patil",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1xsYvoXZwxeGATLkRcw1BYc-vR5PeJKeb",
              "bio": "Member | Year: Second  | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/poonam-patil-a72875242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Arihant Garg",
              "role": "Quant Club Member",
              "image": "/Users/himanshusharma/Documents/febs-web/public/assets/images/Picture  (File responses)/Arihant_Photo - arihant garg.jpg",
              "bio": "Quant Club Member | Year: 4th | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/arihant-garg-22a535247/"
          },
          {
              "name": "Ashish Kumar Singh",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1ZE8m3yZPwF97lYDqkN_TKRLK599bZ83S",
              "bio": "Member | Year: Third Year | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/ashish-kumar-singh-a8a954262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Sohan Bhattacharjya",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1Ggns_EOLOmSVSmycenW8Kvyc1MtGW87u",
              "bio": "Member  | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/sohan-bhattacharjya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Mohammad Ateeq Ahmad",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1tg6L-vCVLPDtF6ZNvuiUYUsLhoHtZJZb",
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
              "image": "/Users/himanshusharma/Documents/febs-web/public/assets/images/Picture  (File responses)/farewell photo - ARCHIT SHARMA.jpg",
              "bio": "Events head | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/archit-sharma-16ba5127b/"
          },
          {
              "name": "Arya Bhardwaj",
              "role": "Member",
              "image": "https://drive.google.com/open?id=16RkZDsvMBBvgWRIAFGljQV8FzasARIG6",
              "bio": "Member | Year: 2023-2027 | IIT Bhubaneswar",
              "linkedin": "Arya Bhardwaj"
          },
          {
              "name": "Alfi L R",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1qeUqT0iFyDUevrcx2uJclO2_e5Yl7aLD",
              "bio": "Member | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "alfi-l-r-77b96b319"
          },
          {
              "name": "Matru Prasad Mohanty",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1CDI_AV5EoDSg5VlDZQeF0akIt5a5rxw4",
              "bio": "Member | Year: 2024 | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/matru-prasad-mohanty-758a82293?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Ba6vN9F3HQSKY3RMAOuiXSA%3D%3D"
          },
          {
              "name": "PRINCE KUMAR",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1KY3soduUywScNDVzqEAneDCxogjmmSmF",
              "bio": "Member | Year: Second | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/prince-kumar-163704293"
          },
          {
              "name": "Harsh Pratap Singh",
              "role": "Member",
              "image": "/Users/himanshusharma/Documents/febs-web/public/assets/images/Picture  (File responses)/20240628_201828 - HARSH PRATAP SINGH.jpg",
              "bio": "Member | Year: Second | IIT Bhubaneswar",
              "linkedin": "Harsh Pratap Singh"
          },
          {
              "name": "Hirendra Basantani",
              "role": "Member",
              "image": "/Users/himanshusharma/Documents/febs-web/public/assets/images/Picture  (File responses)/Hirendra_PIC - Hirendra Basantani.jpg",
              "bio": "Member | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/hirendra-basantani-45a0a52a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Aaditya Sharma",
              "role": "Member",
              "image": "../public/assets/images/Picture  (File responses)/febs pic - Aaditya Sharma.jpeg",
              "bio": "Member | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/aaditya-sharma-061bb2255/"
          },
          {
              "name": "SHASHANK JHA",
              "role": "Member",
              "image": "https://drive.google.com/open?id=16hcfad4X1MlsY__marPYEagrkuJLfWNY",
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
              "image": "",
              "bio": "Member | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "Gitanjali"
          },
          {
              "name": "Mohit Shukla",
              "role": "Member",
              "image": "https://drive.google.com/open?id=14cAKM5LuPBzUddpHIrC32yF2dE3B1VAw",
              "bio": "Member | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/mohit-shukla-74b055296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          },
          {
              "name": "Ashis Vikram Prusty",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1RRtwEggwoIyqOLcfMQXB26u_5Ap4japH",
              "bio": "Member | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/ashis-vikram-prusty-00958a280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Surya Dipto Basu",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1odVnxk2MVRj3Ug-OfBKYDBF7pd4mOmJq",
              "bio": "Member | Year: Second | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/surya-dipto-basu-iit-bbs?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Gagan Gupta",
              "role": "Member",
              "image": "https://drive.google.com/open?id=13HXYRBA0jyzNosakCBImSrGsXykwg3ol",
              "bio": "Member  | Year: 2nd | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/gagan-gupta-949a252a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Spandan Satpathy",
              "role": "Member",
              "image": "https://drive.google.com/open?id=1IqMk58jsgpHDBqYBC7-HoiFRGf_-8Viv",
              "bio": "Member | Year: 2 | IIT Bhubaneswar",
              "linkedin": "https://www.linkedin.com/in/spandan-satpathy-785620250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          },
          {
              "name": "Aditya Raj",
              "role": "Member",
              "image": "",
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

    

    
    
    const SocialLink: React.FC<{ href: string; icon: React.FC<LucideProps>; label: string }> = ({ href, icon: Icon, label }) => (
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

    const MemberCard: React.FC<{ member: TeamMember; type: string }> = ({ member, type }) => (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-emerald-400 to-blue-500">
            <CardHeader className="p-0 relative">
                <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${type === 'executive team' ? 'h-72' : 'h-48'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardHeader>
            <CardContent className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-emerald-200 font-semibold mb-3">{member.role}</p>
                <p className="mb-6">{member.bio}</p>
                <div className="flex gap-4">
                    {member.linkedin && <SocialLink href={member.linkedin} icon={LinkedinIcon} label="LinkedIn Profile" />}
                    {member.twitter && <SocialLink href={member.twitter} icon={TwitterIcon} label="Twitter Profile" />}
                    {member.email && <SocialLink href={`mailto:${member.email}`} icon={MailIcon} label="Email" />}
                </div>
            </CardContent>
        </Card>
    );

    const AdvisorCard: React.FC<{ advisor: Advisor }> = ({ advisor }) => (
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-teal-400 to-blue-500">
            <CardContent className="p-8 flex gap-6 items-start text-white">
                <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    className="w-24 h-24 rounded-full object-cover ring-2 ring-offset-2 ring-emerald-200 transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                    <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
                    <p className="text-emerald-200 font-semibold mb-3">{advisor.role}</p>
                    <p className="mb-4">{advisor.bio}</p>
                    {advisor.linkedin && (
                        <a 
                            href={advisor.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white"
                        >
                            <LinkedinIcon size={20} />
                            <span>View Profile</span>
                            <ExternalLinkIcon size={16} />
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="min-h-screen bg-black">
            <header className="py-24 text-center relative">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6 text-white">Meet Our Team</h1>
                    <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-300">
                        A diverse group of professionals dedicated to fostering excellence in business and science
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 mb-12">
                <div className="flex justify-center gap-4 flex-wrap">
                    {['executive team', 'managerial team', 'advisory', 'society members'].map((filter) => (
                        <Button
                            key={filter}
                            variant={activeFilter === filter ? "default" : "outline"}
                            onClick={() => setActiveFilter(filter)}
                            className={`capitalize ${
                                activeFilter === filter 
                                    ? 'bg-gradient-to-r from-emerald-400 to-blue-500 text-white border-none' 
                                    : 'text-white border-emerald-400 hover:bg-emerald-400/20'
                            }`}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">
                {activeFilter === 'executive team' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Executive Team</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {team.executiveTeam.map((member) => (
                                <MemberCard key={member.name} member={member} type="executive team" />
                            ))}
                        </div>
                    </section>
                )}

                {activeFilter === 'managerial team' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Managerial Team</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {team.managerialTeam.map((member) => (
                                <MemberCard key={member.name} member={member} type="managerial team" />
                            ))}
                        </div>
                    </section>
                )}

                {activeFilter === 'advisory' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Advisory</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {team.advisory.map((advisor) => (
                                <AdvisorCard key={advisor.name} advisor={advisor} />
                            ))}
                        </div>
                    </section>
                )}

                {activeFilter === 'society members' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Society Members</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {team.societyMembers.map((member) => (
                                <MemberCard key={member.name} member={member} type="society members" />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default Team;
