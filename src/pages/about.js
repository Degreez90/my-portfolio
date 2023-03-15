import React from 'react';
import Documentation from '../components/Documentation';
import HeroB from '../components/HeroB';
import Layout from '../components/Layout';

const about = () => {
  return (
    <>
      <Layout>
        <HeroB />
        <Documentation />
      </Layout>
    </>
  );
};

export default about;
