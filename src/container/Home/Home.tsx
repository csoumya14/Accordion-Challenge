import React from 'react';
import Heading from '../../components/MainTitle/MainTitle';
import Accordion from '../../components/Accordion/Accordion';
import { Wrapper } from './Home.css';

const MainPage = () => {
  return (
    <Wrapper>
      <Heading title="Electronics" />
      <Accordion />
    </Wrapper>
  );
};

export default MainPage;
