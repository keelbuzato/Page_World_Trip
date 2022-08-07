import React from 'react';
import Banner from '../components/Banner/Banner';
import PageHeader from '../components/Header/pageHeader';
import InfPage from '../components/InfPage/InfPage';
import OptionCity from '../components/OptionCity/optionCity';

export default function Europe() {
  return (
    <>
      <PageHeader />;
      <Banner imageUrl={'/europe.jpg'} />
      <InfPage />
      <OptionCity />
    </>
  );
}
