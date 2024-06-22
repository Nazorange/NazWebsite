import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingAnimation = () => {
  return (
    <span className="text-accent text-xl">
      <Typewriter
        words={['Software Engineer.', 'Data Analyst.', 'Web Developer.', 'UI/UX Designer.']}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default TypingAnimation;
