'use client';
import Image from 'next/image';
import file from '../../../../public/images/file.png';

import { Wrapper, Inner, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const word = ['S', 'O', 'L', 'V', 'I', 'M', 'A', 'T', 'E'];

  // Refs
  const spans = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const secondOverlayRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (imageRef.current && spans.current.length && wrapperRef.current && secondOverlayRef.current) {
      // Animate image
      tl.to(imageRef.current, {
        rotate: 360,
        ease: 'back.out(1.7)',
        duration: 1.4,
      });

      tl.to(imageRef.current, {
        y: '-100%',
        ease: 'back.out(1.7)',
      });

      // Animate letters
      tl.to(spans.current, {
        y: '-100%',
        ease: 'back.out(1.7)',
        duration: 1.4,
        stagger: 0.07,
      });

      // Animate overlay and wrapper
      tl.to([wrapperRef.current, secondOverlayRef.current], {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'back.out(1.7)',
        duration: 1,
        stagger: 0.2,
        onComplete: () => setComplete(true),
      });

      // Small delay for second overlay
      tl.to(secondOverlayRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        ease: [0.83, 0, 0.17, 1] as any,
        duration: 1,
        delay: -0.9,
      });
    }
  }, [setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          {/* Wrap Image in div for ref */}
          <div ref={imageRef} style={{ display: 'inline-block' }}>
            <Image src={file} alt="import icon" />
          </div>

          <div>
            {word.map((t, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) spans.current[i] = el;
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
    </>
  );
};

export default Preloader;
