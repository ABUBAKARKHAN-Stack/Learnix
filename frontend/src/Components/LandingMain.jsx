import React from 'react';
import img from '../assets/imgs/Team.jpg';
import abubakar from '../assets/imgs/abubakar.webp';
import mansoor from '../assets/imgs/mansoor.webp';
import awais from '../assets/imgs/awais.webp';
import ubaid from '../assets/imgs/ubaid.webp';

import Card from './Card';

function LandingMain() {
  const teamMembers = [
    {
      name: 'Awais',
      role: 'Frontend Developer',
      img: awais,
      social: {
        github: 'https://github.com/iawais-dev',
        linkedin: 'https://www.linkedin.com/in/awais-tahir-6a2898333',
        instagram: 'https://www.instagram.com/its.awais.tahir',
      },
    },
    {
      name: 'Mansoor',
      role: 'Frontend Developer',
      img: mansoor,
      social: {
        github: 'https://github.com/iammansoor007',
        linkedin: 'https://www.linkedin.com/in/themansoorshah',
        instagram: 'https://www.instagram.com/wassup_mansoor/',
      },
    },
    {
      name: 'Abubakar',
      role: 'Full Stack Developer',
      img: abubakar,
      social: {
        github: 'https://github.com/ABUBAKARKHAN-Stack',
        linkedin: 'https://linkedin.com/in/abubakar-aijaz-dev',
        instagram: 'https://www.instagram.com/abubakarxd7/',
      },
    },
    {
      name: 'Ubaidullah',
      role: 'Backend Developer',
      img: ubaid,
      social: {
        github: 'https://github.com/sardarubaidullah',
        linkedin: 'https://pk.linkedin.com/in/sardar-ubaidullah-karlal',
        instagram: 'https://www.instagram.com/sardar._.ubaid/',
      },
    },
  ];

  return (
    <div className="pt-12">
      {/* What Sets Us Apart Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 px-6 sm:px-12">
        {/* Image */}
        <img
          src={img}
          className="hidden lg:block rounded-3xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
          alt="Team"
        />

        {/* Text Content */}
        <div className="mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-800 dark:text-gray-50">
            What Sets Us Apart
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-50 max-w-lg">
            Our e-learning platform is designed to offer a seamless and personalized learning journey. With expert instructors, interactive content, and flexible schedules, we make it easy for you to gain new skills and advance your career.
          </p>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-50 max-w-lg">
            From industry-relevant courses to hands-on projects, we equip you with the skills and confidence to excel in a competitive world. Start your journey with us and turn your aspirations into achievements.
          </p>
        </div>

        {/* Mobile Image */}
        <img
          src={img}
          className="lg:hidden rounded-3xl shadow-lg w-full max-w-sm mx-auto mt-8"
          alt="Team"
        />
      </div>

      <hr className="mt-12 h-[2px] bg-gray-300 rounded-full mx-6" />

      {/* Our Team Section */}
      <div className="mt-12 px-6 sm:px-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-50">
          Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              role={member.role}
              img={member.img}
              social={member.social}
            />

          ))}
        </div>
      </div>

      <hr className="mt-12 h-[2px] bg-gray-300 rounded-full mx-6" />
    </div>
  );
}

export default LandingMain;
