'use client'
import React, {useState, useTransition} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [

  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    ),
  },

  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className='list-disc pl-2'>
        <li>Software Engineer at XYZ Corp</li>
        <li>Frontend Developer at ABC Inc</li>
      </ul>
    ),
  },

  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Bachelor's in Computer Science</li>
        <li>Master's in Software Engineering</li>
      </ul>
    ),
  },
]


const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }
  return (
    <section>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        <Image src="/image/about.png" alt="Avatar" width={500} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I'm a passionate developer with experience in building 
            web applications using modern technologies. sjhagdhcsdcuhsdiuhc
            ksdhciushdcioswjhcdiowjhdc
            akdshcksdhnciksdncbuis
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>
              Experience
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              Education
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find(item => item.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
