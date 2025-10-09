'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Div, Word, Span, AbsoluteContainer } from './styles';

const titleAnimation = {
  rest: { transition: { staggerChildren: 0.005 } },
  hover: { transition: { staggerChildren: 0.005 } },
};

const letterAnimation = {
  rest: { y: 0 },
  hover: { y: -6, transition: { duration: 0.3, ease: [0.6,0.01,0.05,0.95], type: 'tween' } },
};

const letterAnimationTwo = {
  rest: { y: 25 },
  hover: { y: 0, transition: { duration: 0.3, ease: [0.6,0.01,0.05,0.95], type: 'tween' } },
};

const AnimatedLink = ({ title, href }: { title: string; href?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternal = href?.startsWith('http');

  const content = (
    <>
      <Word initial="rest" animate={isHovered ? 'hover' : 'rest'} variants={titleAnimation}>
        {title.split('').map((char, i) =>
          char === ' ' ? <Span key={i}>&nbsp;</Span> : <Span key={i} variants={letterAnimation}>{char}</Span>
        )}
      </Word>
      {/* <AbsoluteContainer>
        <Word initial="rest" animate={isHovered ? 'hover' : 'rest'} variants={titleAnimation}>
          {title.split('').map((char, i) =>
            char === ' ' ? <Span key={i}>&nbsp;</Span> : <Span key={i} variants={letterAnimationTwo}>{char}</Span>
          )}
        </Word>
      </AbsoluteContainer> */}
    </>
  );

  if (!href) return (
    <Div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {content}
    </Div>
  );

  if (isExternal) return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: 'inline-block' }} // ensures hover works
    >
      {content}
    </a>
  );

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </Link>
  );
};

export default AnimatedLink;
