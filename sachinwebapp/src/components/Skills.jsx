import React from 'react';
import python from '../assets/Python.png';
import opencv from '../assets/opencv.png';
import django from '../assets/django.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/React.png';
import unity from '../assets/unity.png';
import tailwind from '../assets/tailwind.png';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 border-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 border-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500 border-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600 border-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 border-sky-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-white border-white",
    },
    {
      id: 7,
      src: opencv,
      title: "OpenCV",
      style: "shadow-red-400 border-red-400",
    },
    {
      id: 8,
      src: django,
      title: "Django",
      style: "shadow-green-600 border-green-600",
    },
    {
      id: 9,
      src: unity,
      title: "Unity",
      style: "shadow-gray-400 border-gray-400",
    },

  ];

  return (
    <div
      name="Skills"
      className="w-full my-20 p-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-[#00FFFF] p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-8 text-center py-8 px-15 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md border-2 hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-xs sm:text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills