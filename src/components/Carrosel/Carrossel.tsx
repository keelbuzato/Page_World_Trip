import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';
import { Parallax, Zoom, Navigation, Pagination, History } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carrossel() {
  const imgs = ['/img.png', '/londres.jpeg', '/roma.jpeg'];

  return (
    <div>
      <Box align="center" w={{ base: '100%' }}>
        <Text
          fontSize={{
            base: '30px',
            md: '30px',
            lg: '35px',
            xl: '40px',
          }}
          fontWeight="500"
          lineHeight="54px"
          textAlign="center"
          color="#47585B"
          align="center"
          mt="50px"
        >
          Vamos nessa?
        </Text>
        <Text
          fontSize={{
            base: '30px',
            md: '30px',
            lg: '35px',
            xl: '40px',
          }}
          fontWeight="500"
          lineHeight="54px"
          textAlign="center"
          color="#47585B"
          align="center"
          mb="20px"
        >
          Então escolha seu continente
        </Text>
      </Box>

      <Swiper
        style={{
          '--swiper-navigation-color': '#060606',
          '--swiper-pagination-color': '#060606',
          'background-color': '#fff',

          width: '90vw',
          height: '450px',
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {imgs.map((img) => (
          <SwiperSlide style={{ objectFit: 'cover' }}>
            <img src={img} style={{ width: 'inherit' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
