import React, { useState } from 'react';
import { Image, Grid, SimpleGrid, Box, GridItem } from '@chakra-ui/react';
import { OPTIONS_COUNTRIES } from './options';
export default function OptionCity() {
  const [infoCountries, setInfoCountries] = useState(OPTIONS_COUNTRIES);

  return (
    <>
      <SimpleGrid
        columns={{ base: '1', md: '1' }}
        w={{
          base: '450px',
          md: '700px',
          lg: '940px',
          xl: '1200px',
        }}
        ml={{ base: '50px' }}
      >
        <Box
          as="h1"
          fontWeight="500"
          lineHeight="54px"
          fontSize="36px"
          color="#47585B"
          m="20px"
        >
          Cidades +100
        </Box>
        <SimpleGrid
          columns={{ md: '3', base: '2', lg: '4', '2xl': '5' }}
          gap={6}
        >
          {infoCountries.map((countries, index) => (
            <>
              <Box
                maxW="256px"
                maxH="279px"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image src={countries.imgTop} alt="Londes" />

                <Box p="6">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {countries.title}
                  </Box>

                  <Box display="flex" justifyContent="space-between">
                    <Box as="h4" mt="1">
                      {countries.subtitle}
                    </Box>
                    <Box>
                      <Image
                        src={countries.flag}
                        alt="bandeira"
                        borderRadius="full"
                        boxSize="35px"
                        display="flex"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}
