import { Box, ChevronLeftIcon } from '@chakra-ui/react';
import '../../../public/Logo.jpg';
import Image from 'next/image';

export default function PageHeader() {
  return (
    <>
      <Box height="100%" diplay={'flex'} width="100%" align="center" p={5}>
        <Image src="/Logo.jpg" alt="Logo" width={184.06} height={45.92} />
      </Box>
    </>
  );
}
