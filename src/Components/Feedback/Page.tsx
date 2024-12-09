// import React, { useEffect, useState } from 'react';
// // import img from "../../assets/Svg/choose.svg";
// import 'keen-slider/keen-slider.min.css';
// import { useKeenSlider } from 'keen-slider/react';
// import Image from 'next/image';

// const Page:React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [perView, setPerView] = useState(1);


//   const feedbackData = [
//     {
//       name: "Emma K.",
//       title: "Beginner Language Learner",
//       feedback:
//         "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
//       image:
//         "https://images.unsplash.com/photo-1464961968964-a80a9b51f3d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       name: "Jacob J.",
//       title: "Intermediate Language Learner",
//       feedback:
//         "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
//       image:
//         "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzJTIwbWVufGVufDB8fDB8fHww",
//     },
//     {
//       name: "Sophia T.",
//       title: "Advanced Learner",
//       feedback:
//         "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
//       image:
//         "https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       name: "Lucas M.",
//       title: "Business Language Learner",
//       feedback:
//         "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
//       image:
//         "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       name: "Olivia P.",
//       title: "Travel Language Learner",
//       feedback:
//         "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
//       image:
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//   ];

//   return (
//     <div className='bg-[#F9F9F9]'>
//       <div className="relative">
//         <h1 className="text-[35px] font-semibold font-publicSans">
//           Student<span className="text-[#00A3E0]"> Feedback</span>
//           <Image src={img} alt="Choose" className="absolute left-0" />
//         </h1>
//         <p className="text-[#737373] text-[16px] pt-5 font-publicSans">
//           Hear How We’ve Made a Difference.
//         </p>
//       </div>

//       <div className="relative  py-6">
//         <div ref={sliderRef} className="keen-slider">
//           {feedbackData.map((feedback, index) => (
//             <div className="keen-slider__slide keen-slider__slide1   " key={index}>
//               <div className="p-4 justify-between">
//                 <div className="p-6   rounded-xl shadow-md">
//                   <span className="flex gap-6">
//                     <Image
//                       src={feedback.image}
//                       alt="User profile"
//                       className="w-12 h-12 object-cover rounded-full border-2 shadow-lg"
//                     />
//                     <span className="flex flex-col">
//                       <h1 className="text-[#363A3D] font-publicSans font-medium text-[16px]">{feedback.name}</h1>
//                       <p className="text-[#363A3D] font-publicSans font-medium text-[16px]">{feedback.title}</p>
//                     </span>
//                   </span>
//                   <p className="pt-4 text-[#363A3D] font-publicSans font-medium text-[16px]">{feedback.feedback}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center pt-6">
//           {[...Array(instanceRef.current?.track.details.slides.length || 0)].map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => instanceRef.current?.moveToIdx(idx)}
//               className={`w-3 h-3 mx-1 rounded-full ${
//                 currentSlide === idx
//                   ? "bg-[#00A3E0]" // Active slide color
//                   : idx % 2 === 0
//                   ? "bg-[#D3D3D3]" // Even index color
//                   : "bg-[#B0B0B0]" // Odd index color (change to your desired color)
//               }`}
//             ></button>
//           ))}
//         </div>

//         <div className="flex justify-end gap-4 mr-6 pt-6">
//           <button onClick={handlePrev} className="bg-[#00A3E0] text-white px-4 py-2 rounded-md">
//             ←
//           </button>
//           <button onClick={handleNext} className="bg-[#00A3E0] text-white px-4 py-2 rounded-md">
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbackData = [
  {
    name: "Emma K.",
    title: "Beginner Language Learner",
    feedback:
      "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
    image:
      "https://images.unsplash.com/photo-1464961968964-a80a9b51f3d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Jacob J.",
    title: "Intermediate Language Learner",
    feedback:
      "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzJTIwbWVufGVufDB8fDB8fHww",
  },
  {
    name: "Sophia T.",
    title: "Advanced Learner",
    feedback:
      "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
    image:
      "https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Lucas M.",
    title: "Business Language Learner",
    feedback:
      "I’ve tried many language courses, but this one stands out. The progress tracking and interactive exercises kept me motivated. The instructors are knowledgeable, and the curriculum is well-organized. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Olivia P.",
    title: "Travel Language Learner",
    feedback:
      "This platform has completely transformed the way I learn Luxembourgish. The lessons are engaging, and the AI-powered assistant made it so much easier to grasp difficult concepts. I feel more confident in my conversations!",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {feedbackData.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.name}
                className="max-w-[30px] max-h-[30px] rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="mt-4 text-gray-700">{item.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Page;