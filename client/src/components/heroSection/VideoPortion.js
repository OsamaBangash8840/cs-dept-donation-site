import React from "react";
import video from '../assest/donationvideo.mp4'
import DonateBtn from '../DonateBtn';
import { TokenProvider } from '../context/TokenSecret';

function VideoPortion() {
  return (
    <>
      <div className="mx-auto ml-3 container">
        <div className="grid grid-cols-1 mx-auto gap-5 lg:grid-cols-2 lg:gap-14 mt-9 xl:gap-x-[399px] ml-6">
          {/* card 1 */}
          <div className=" flex justify-center items-center rounded-2xl w-[330px] h-[300px] sm:w-[490px] sm:ml-16 md:w-[540px] md:ml-28 lg:w-[550px] lg:h-[500px] lg:mt-14 lg:ml-2 xl:mr-24 xl:w-[829px]">
            <video className="w-full h-[600] rounded-2xl border-none" controls>
              <source
                src={video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* card 2 */}
          <div className="bg-slate-200 rounded-md w-[330px] h-[430px] sm:w-[490px] sm:ml-16 md:w-[540px] md:ml-16 lg:w-[380px] lg:h-[460px] lg:mt-14 xl:w-[420px] xl:h-[460px] xl:mt-20">
            <div className="ml-5">
              <h1 className="text-2xl md:text-3xl font-bold mt-6">Sponsor a Student's Success
              </h1>
              <p className="text-gray-700 mb-4 text-base md:text-lg tracking-wide font-sans mt-6">
                Your sponsorship can unlock a student's potential by providing crucial resources and opportunities. Many students face significant obstacles that hinder their academic progress, such as lack of access to textbooks, technology, and tutoring. Your donation helps bridge this gap, ensuring that every student has the tools they need to succeed.
              </p>
              <TokenProvider>
                <DonateBtn />
              </TokenProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPortion;
