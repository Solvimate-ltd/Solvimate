'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
// import raft_logo from '../../../../public/svgs/raft_logo.svg';
// import Solvimate_logo from '../../../../public/svgs/Solvimate_logo.svg';
import aakaash1 from '../../../../public/images/aakaash1.jpg';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={aakaash1} width={125} height={60} alt="aakaash1" priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={mounted && isOpen ? 'active' : ''}>

          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} href={link.href}/>
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          {/* <AnimatedLink title="Login" /> */}
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
