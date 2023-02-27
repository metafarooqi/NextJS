'use client';
import { Box,Flex,Heading,Text,Stack,Container,Avatar,useColorModeValue,Card, CardHeader, CardBody, Image, SimpleGrid, Center, VStack} from '@chakra-ui/react';
import {motion} from 'framer-motion'
import { courses } from '@/constants';
import Link from 'next/link';


export default function Courses() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Available Programs</Heading>
          {/* <Text>We have been working with clients around the world</Text> */}
        </Stack>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{once:true}}
        >
          <SimpleGrid
            minChildWidth="282px"
            placeItems="center"
            spacing="30px"
            mb={4}
          >
            {courses.map((c) => (
              <Box
                key={c.id}
                maxH="190px"
                overflow="hidden"
                textAlign={"center"}
              >
                <VStack>
                  <Box position={"relative"} cursor={"pointer"}>
                    <Link href={c.d_url}>
                      <Text>{c.title}</Text>
                      <Image src={c.img_url} mt="10px" />
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        whileHover={{
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                      >
                        <Center
                          position={"absolute"}
                          zIndex={"999"}
                          minW="282px"
                          top="32px"
                          minH="190px"
                          bg={c.bg_color}
                          color={"white"}
                        >
                          {c.description}
                        </Center>
                      </motion.div>
                    </Link>
                  </Box>
                </VStack>
              </Box>

              // <Box key={c.id} maxH={"150px"} overflow="hidden" textAlign={'center'}>
              //   <motion.div
              //     initial={{
              //       opacity: 0,
              //     }}
              //     whileHover={{
              //       opacity: 1,
              //       y:10
              //     }}
              //   >
              //     {/* <Box
              //       position={"absolute"}
              //       zIndex={"99"}
              //       bg={"teal.400"}
              //       color={"white"}
              //     > */}
              //     <Center
              //       position="absolute"
              //       h="150px"
              //       zIndex="99"
              //       bg="teal.400"
              //       color="white"
              //       minW={'282px'}

              //     >
              //       {c.title}
              //     </Center>
              //     {/* </Box> */}
              //   </motion.div>
              //   <Image src={c.img_url} />
              // </Box>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
}
