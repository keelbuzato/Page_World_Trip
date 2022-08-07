import React from 'react';
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import Image from '../../../node_modules/next/image';
import Drink from '../../../public/Menu/cocktail.svg';
import Surf from '../../../public/Menu/surf.svg';
import Museum from '../../../public/Menu/museum.svg';
import Building from '../../../public/Menu/building.svg';
import World from '../../../public/Menu/earth.svg';
import { Theme } from '../../styles/theme';
export default function Menu() {
  const styles = Theme;
  return (
    <>
      <SimpleGrid
        columns={{ base: '5', md: '5' }}
        gap={6}
        w={{ base: '500px', md: '700px', lg: '900px' }}
      >
        <Box align="center" w={{ base: '50px', md: '60px', lg: '120px' }}>
          <Link href="/europe">
            <Image src={Drink} alt="logo" />
            <Text
              fontSize={{ base: '10px', lg: '20px' }}
              align={{ lg: 'center' }}
            >
              Vida Noturna
            </Text>
          </Link>
        </Box>
        <Box align="center" w={{ base: '50px', md: '60px', lg: '120px' }}>
          <Link href="/europe">
            <Image src={Surf} alt="logo" />
            <Text fontSize={{ base: '10px', lg: '20px' }}>Praia</Text>
          </Link>
        </Box>
        <Box align="center" w={{ base: '50px', md: '60px', lg: '90px' }}>
          <Link href="/europe">
            <Image src={Building} alt="logo" />
            <Text fontSize={{ base: '10px', lg: '20px' }}> Moderno</Text>
          </Link>
        </Box>
        <Box align="center" w={{ base: '50px', md: '60px', lg: '90px' }}>
          <Link href="/europe">
            <Image src={Museum} alt="logo" />
            <Text fontSize={{ base: '10px', lg: '20px' }}>Clássico</Text>
          </Link>
        </Box>
        <Box
          align={{ lg: 'center' }}
          w={{ base: '50px', md: '60px', lg: '90px' }}
        >
          <Link href="/europe">
            <Image src={World} alt="logo" />
            <Text fontSize={{ base: '10px', lg: '20px' }}>e mais...</Text>
          </Link>
        </Box>
      </SimpleGrid>
    </>
  );
}
