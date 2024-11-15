import React, { useState } from 'react';

const Teamgallery = () => {
  const teamMembers = [
    {
        name: "Shourya Wadhwa",
        image: "https://media.licdn.com/dms/image/v2/D5603AQF1G9aW5wLgyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731620835404?e=2147483647&v=beta&t=Evt1hScWSj_twzJFE2HB6HV8ti3Y3yAaHHVNo_FIVgE",
        link: "https://github.com/coderlogy"
    },
    {
        name: "Elijah Dumaquita",
        image: "https://media.licdn.com/dms/image/v2/D5603AQHJHAsk1UlDrw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730149173531?e=2147483647&v=beta&t=s9nZg5rmyV_wXqb28l7x5ldE8Yq3ayhDp6LAaWtVpiI",
        link: "https://www.linkedin.com/in/elijah-dumaquita-b13011310/?originalSubdomain=ca"
    },
    {
      name: "YeJoon",
      image: "https://avatars.githubusercontent.com/u/63943594?v=4",
      link: "https://github.com/unsignd"
    },
    {
      name: "Tanish Shah",
      image: "https://cdn.discordapp.com/attachments/1288908235838980207/1306831636918439936/AP1GczNP4EdlzqCYIQfYyYm8aKqyIsAFgycRBTTD69RFgXY8CosxvjwHDYsKVAw960-h1280-s-no.png?ex=6738194d&is=6736c7cd&hm=1f183e1cef5c3a4bbb2a14f7ea3858f60698a11b9fc7c999ae43f10221df5daf&",
      link: "https://www.instagram.com/incognitton"
    },
  ];

  const ProfileCard = ({ name, image, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="group relative p-4 bg-pink neuebit w-[200px] transition-all duration-300 hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative block mb-3 overflow-hidden"
          >
            {image ? (
              <div className="relative">
                <img 
                  src={image} 
                  alt={`${name}'s profile`} 
                  className="w-32 h-32 rounded-full bg-white object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`
                  absolute inset-0 bg-pink bg-opacity-20 rounded-full 
                  transition-opacity duration-300
                  flex items-center justify-center
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}>
                  <span className="text-white text-sm font-bold">View Profile</span>
                </div>
              </div>
            ) : (
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="relative">
                  <span className="text-pink text-4xl font-bold">{name[0]}</span>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-pink rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">+</span>
                  </div>
                </div>
              </div>
            )}
          </a>
          <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-white">
            {name}
          </h3>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className={`
            absolute top-2 right-2 w-2 h-2 rounded-full bg-white
            transition-all duration-300
            ${isHovered ? 'scale-150 opacity-70' : 'scale-100 opacity-30'}
          `}/>
          <div className={`
            absolute bottom-2 left-2 w-2 h-2 rounded-full bg-white
            transition-all duration-300
            ${isHovered ? 'scale-150 opacity-70' : 'scale-100 opacity-30'}
          `}/>
        </div>
      </div>
    );
  };

  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <p className="py-10 mx-6 text-3xl uppercase retro">
          Meet Our <span className="text-pink">Team</span>
        </p>
        <div className="flex justify-center mx-12 my-6">
          <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
            {teamMembers.map((member, index) => (
              <ProfileCard 
                key={index}
                name={member.name}
                image={member.image}
                link={member.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamgallery;