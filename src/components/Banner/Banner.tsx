import { Box, Text } from '@chakra-ui/react';
import '../../../public/Banner.jpg';
import Image from 'next/image';
export default function Banner({ imageUrl }) {
  return (
    <>
      <Box
        w={{ base: '460px', sm: '100%', md: '100%', lg: '100%', xl: '100%' }}
      >
        <Image
          boxSize={{ sm: 375, xl: 3263 }}
          src={imageUrl}
          alt="backgoundBanner"
          width="3263"
          height="674"
        />
      </Box>
    </>
  );
}
