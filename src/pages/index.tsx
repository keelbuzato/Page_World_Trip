import Banner from '../components/Banner/Banner';
import PageHeader from '../components/Header/pageHeader';
import Menu from '../components/Menu/Menu';
import Carrossel from '../components/Carrosel/Carrossel';
import { Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <PageHeader />
      <Banner imageUrl={'/Banner.jpg'} />
      <Container centerContent>
        <Menu />
        <Carrossel />
      </Container>
    </>
  );
}
