import React from 'react'
import {Box,Heading,Text} from '@chakra-ui/react'

function Header() {
  return (
    <Box pb='28' as='section' >
        <Box textAlign='center' color='gray.50' bg='purple.600' pt='90px' pb='198px' px='8'>
            <Heading fontWeight='extrabold' fontSize={["3xl","3xl","5xl"]} textAlign={['left','left','center']}>
                Simple Pricing for your business
            </Heading>
            <Text fontWeight='medium' textAlign={['left','left','center']} fontSize={['lg','lg','2xl']} pt='4'>Plans that are carefully crafted to suit your business.</Text>
        </Box>
    </Box>
  )
}

export default Header