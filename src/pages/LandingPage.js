import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import currentHeroPicture from '../img/landing-page/office-break.jpg';

const Container = styled.div`
  width: 1170px;
  height: auto;
  margin-top: 107px;
`;

const HeroBackground = styled.div`
  height: 500px;
  background: url(${currentHeroPicture}) no-repeat left/cover;
  background-size: 124%;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4rem;
`;

const HeroTitle = styled.div`
  font-family: var(--pannor-medium);
  color: #fff;
  font-size: 2.8rem;
  background-color: var(--main-color);
  padding: 10px 14px 0 14px;
  text-transform: uppercase;
  border-radius: 3px;
  margin-bottom: 1rem;
`;

const HeroContentWrapper = styled.div`
  flex-grow: 1;
`;

const HeroContent = styled.div`
  font-family: var(--pannor-medium);
  color: var(--main-color);
  font-size: 1.2rem;
  background-color: #fff;
  padding: 6px 8px 0 8px;
  text-transform: uppercase;
  border-radius: 3px;
  margin-bottom: 0.2rem;
  display: inline-flex;
`;

const HeroLink = styled(Link)`
  background-color: var(--pannor-color);
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  font-family: var(--pannor-medium);
  padding: 0.6rem 1.2rem 0.5rem 1.2rem;

  &:hover {
    background-color: var(--main-color);
  }
`;

const ContentTemporar = styled.div`
  height: 5000px;
  width: 100%;
  background-color: #fff;
`;

function LandingPage() {
  return (
    <Container>
      <HeroBackground>
        <HeroWrapper>
          <HeroTitle>
            JOIN US
          </HeroTitle>
          <HeroContentWrapper>
            <HeroContent>
              be part of the most exciting
            </HeroContent>
            <br/>
            <HeroContent>
              workplace in Amsterdam
            </HeroContent>
          </HeroContentWrapper>
          <HeroLink to="/career">Find jobs</HeroLink>
        </HeroWrapper>
      </HeroBackground>
      <ContentTemporar>
        {/* * long content placeholder * */}
      </ContentTemporar>
    </Container>
  );
}

export default LandingPage;
