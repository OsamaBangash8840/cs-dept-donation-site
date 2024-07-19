import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FaHandsHelping } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";


function WhatWeDo() {
    return (
        <>
        <div className='container mx-auto'>
            <h1 className='text-4xl font-sans font-bold mt-20 flex justify-center items-center'>What we do</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2'>

                <div className='flex flex-col bg-slate-100 rounded mb-4 h-[450px] w-full mx-auto lg:mt-14 mt-5'>
                    <h2 className='px-16 mt-14 tracking-widest text-yellow-500 font-sans font-medium'>SAVE THE STUDENT</h2>
                    <span className='text-2xl font-bold font-sans px-16 mt-8'>Support Our Future Innovators
                    </span>
                    <span className='px-16 mt-4 font-sans tracking-wider'>Your contribution can make a significant difference in the lives of students. By donating, you help provide essential resources, financial support, and opportunities for students to succeed. </span>
                    {/* <FontAwesomeIcon icon={faUserGraduate } size='5x' className='mt-6 flex justify-center items-center ml-16 xl:mr-80' /> */}
                    <FaUserGraduate size='5x' className='mt-6 flex xl:mr-80 ' />

                </div>

                <div className='flex flex-col bg-slate-100 rounded mb-4 h-[450px] w-full mx-auto lg:mt-14 mt-5'>
                    <h2 className='px-16 mt-14 tracking-widest text-yellow-500 font-sans font-medium'>HELP THE HELPLESS STUDENT</h2>
                    <span className='text-2xl font-bold font-sans px-16 mt-8'>Invest in Tomorrow's Leaders
                    </span>
                    <span className='px-16 mt-4 font-sans tracking-wider'>Your donation can transform the lives of students. By contributing, you provide critical support, resources, and opportunities that enable students to overcome challenges and achieve academic success. </span>
                    {/* <FontAwesomeIcon icon={faUserGraduate} size='5x' className='mt-6 flex xl:mr-80' /> */}
                    <FaHandsHelping size='5x' className='mt-6  flex  xl:mr-80'  />
</div>

                <div className='flex flex-col bg-slate-100 rounded mb-4 h-[450px] w-full mx-auto lg:mt-14 mt-5'>
                    <h2 className='px-16 mt-14 tracking-widest text-yellow-500 font-sans font-medium'>DONATE FOR THE POOR STUDENT</h2>
                    <span className='text-2xl font-bold font-sans px-16 mt-8'>Empower Education
                    </span>
                    <span className='px-16 mt-4 font-sans tracking-wider'>Your generous donation can change the life of a student in need. By supporting this cause, you help provide essential resources, financial aid, and opportunities for underprivileged students to pursue their education and dreams.</span>
                    {/* <FontAwesomeIcon icon={faUserGraduate } size='5x' className='mt-6 flex xl:mr-80' /> */}
                    <FaDonate size='5x' className='mt-6 flex xl:mr-80' />

                </div>
            </div>
        </div>
        </>
    );
}

export default WhatWeDo;
