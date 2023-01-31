import { Box,Button,ButtonGroup,Card,CardBody,CardFooter,Divider,Heading,Image, ScaleFade, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

function CoursesCard({url,title}) {
    const ref = useRef(null);
    const {inViewport} = useInViewport(
      ref,
      {rootMargin:"-100px"},
      {disconnectOnLeave:false}
    );
    console.log(inViewport);
  return (
    <Box w="100%">
      <ScaleFade
        delay={0.5}
        initialScale={0.9}
        in={inViewport}
        whileHover={{ scale: 1.1 }}
      >
        <Box w="full" ref={ref}>
          <Image src={url}></Image>
          <Box>
            <Heading>{title}</Heading>
          </Box>
        </Box>
      </ScaleFade>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={url}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default CoursesCard