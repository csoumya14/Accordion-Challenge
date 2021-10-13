import React from 'react';
import { MainHeading, HeadingContainer } from './MainTitle.css';

const HeadingText = ({ title }: { title: string }) => {
  return (
    <HeadingContainer>
      <MainHeading>{title}</MainHeading>
    </HeadingContainer>
  );
};

export default HeadingText;
