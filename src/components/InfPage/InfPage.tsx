import React from 'react';
import { Text, Grid, SimpleGrid, Box, GridItem } from '@chakra-ui/react';

export default function InfPage() {
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  };

  return (
    <SimpleGrid columns={{ base: '1', md: '1', lg: '2' }}>
      <Box
        w={{
          base: '500px',
          md: '700px',
          lg: '550px',
          xl: '700px',
          '2xl': '1100px',
        }}
        h={{
          base: '350px',
          md: '210px',
          lg: '350px',
          xl: '400',
          '2xl': '80px',
        }}
        textAlign="justify"
      >
        <Text
          fontSize={{
            base: '30px',
            md: '25px',
            lg: '26px',
            xl: '26px',
          }}
          fontWeight="400"
          pt="80px"
          pl="60px"
          lineHeight="36px"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Box>

      <Box display="flex" align="center" pt="80px" pl="70px">
        <Box
          p={{ base: '5', '2xl': '0px' }}
          h={{ base: '120px', md: '100px', lg: '200px', '2xl': '150px' }}
        >
          <Text
            fontFamily="Poppins"
            fontSize={{ base: '40px', md: '40px', lg: '50px' }}
            fontWeight="600"
            textAlign="center"
            color="#FFBA08"
            ml={{ lg: '10px', xl: '30px', '2xl': '190px' }}
          >
            50
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize={{ base: '15px', md: '20px', lg: '25px' }}
            fontWeight="600"
            textAlign="center"
            color="#47585B"
            ml={{ lg: '10px', xl: '30px', '2xl': '190px' }}
          >
            países
          </Text>
        </Box>
        <Box p={{ base: '5', '2xl': '0px' }}>
          <Text
            fontFamily="Poppins"
            fontSize={{ base: '40px', md: '40px', lg: '50px' }}
            fontWeight="600"
            textAlign="center"
            color="#FFBA08"
            ml={{ lg: '10px', xl: '20px', '2xl': '80px' }}
          >
            60
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize={{ base: '15px', md: '20px', lg: '25px' }}
            fontWeight="600"
            textAlign="center"
            color="#47585B"
            ml={{ lg: '10px', xl: '10px', '2xl': '80px' }}
          >
            línguas
          </Text>
        </Box>
        <Box p={{ base: '5', '2xl': '0px' }}>
          <Text
            fontFamily="Poppins"
            fontSize={{ base: '40px', md: '40px', lg: '50px' }}
            fontWeight="600"
            textAlign="center"
            color="#FFBA08"
            ml={{ lg: '10px', xl: '10px', '2xl': '60px' }}
          >
            27
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize={{ base: '15px', md: '20px', lg: '25px' }}
            fontWeight="600"
            textAlign="center"
            color="#47585B"
            ml={{ lg: '10px', xl: '10px', '2xl': '70px' }}
          >
            cidades +100
          </Text>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
