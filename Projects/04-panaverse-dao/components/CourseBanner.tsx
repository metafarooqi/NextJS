import { Box,Image } from '@chakra-ui/react';
import React from 'react'

function CourseBanner() {
  return (
    <Box backgroundImage="url('/images/ai.jpg')" backgroundPosition='center'>
      <Image src="/images/ai.jpg" alt="Course Banner"></Image>
    </Box>
  );
}

export default CourseBanner