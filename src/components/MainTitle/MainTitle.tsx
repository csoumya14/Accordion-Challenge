import React from 'react';
import { MainHeading, HeadingContainer } from './MainTitle.css';

interface Title {
  title: string;
}

const HeadingText = (props: Title) => {
  return (
    <HeadingContainer>
      <MainHeading>{props.title}</MainHeading>
    </HeadingContainer>
  );
};

export default HeadingText;
