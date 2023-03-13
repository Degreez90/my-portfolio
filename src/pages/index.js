import * as React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import SectionC from '../components/SectionC';

export default function Home() {
  return (
    <>
      <Hero />
      <Section />
      <SectionA />
      <SectionB />
      <SectionC />
    </>
  );
}
