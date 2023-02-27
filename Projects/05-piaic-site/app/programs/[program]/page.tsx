'use client'
import { Box,Center,Heading,Image,Text,SimpleGrid,VStack } from '@chakra-ui/react'
import getPrograms from '@/constants'
import { CompulsoryInovationTracks } from '@/constants'
import {motion} from 'framer-motion'

export async function generateStaticParams() {
  const programs: string[] = ["ai", "cloud", "bc","iot","web3"];

  return programs.map((program) => ({
    program: program,
  }));
}

function page({params} :{params:{program : string}}) {
  const p = getPrograms(params.program);
  const compTrack = CompulsoryInovationTracks;
  return (
    <>
      <Box>
        <Box
          bgImage={p?.img_url}
          bgSize={"cover"}
          opacity={"0.3"}
          h="680px"
        ></Box>
        <Center>
          {/* <motion.div
            initial={{
              opacity:0,
              x:-500,
              scale:0.5
            }}
            animate={{
              opacity:1,
              x:0,
              scale:1
            }}
            transition={{
              duration:0.5
            }}
          > */}
          <Heading position={"absolute"} top={"150px"}>
            {p?.title}
          </Heading>
          {/* </motion.div> */}
        </Center>
        <Center>
          <Text position={"absolute"} top={"200px"} fontSize={"1xl"}>
            {p?.description}
          </Text>
        </Center>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{once:true}}
        >
          <Center mt={"20px"}>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Technical Track
            </Text>
          </Center>
        </motion.div>
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
            {p?.technicalQuarters.map((c) => (
              <Box
                key={c.title}
                minH="150px"
                minW={'282px'} maxW={'282px'}
                overflow="hidden"
                textAlign={"center"}
                marginTop={"20px"}
                border={"1px solid white"}
                borderRadius={'md'}
                bgColor={c.color}
              >
                <VStack>
                  <Box position={"relative"} cursor={"pointer"} paddingTop={'10px'}>
                    <Heading fontSize={'1xl'} color={'black'}>{c.title}</Heading>
                    <Text mt={'15px'} color={'black'}>
                      {c.description}
                    </Text>
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
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{once:true}}
        >
          <Center mt={"25px"} mb={"20px"}>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
            Compulsory Innovation Track
            </Text>
          </Center>
        </motion.div>
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
            {CompulsoryInovationTracks.map((comp) => (
              <Box
              key={comp.title}
              minH="150px"
              minW={'282px'} maxW={'282px'}
              overflow="hidden"
              textAlign={"center"}
              marginTop={"20px"}
              border={"1px solid white"}
              borderRadius={'md'}
              bgColor={comp.color}
            >
               <VStack>
                  <Box position={"relative"} cursor={"pointer"} paddingTop={'10px'}>
                    <Heading fontSize={'1xl'} color={'black'}>{comp.title}</Heading>
                    <Text mt={'15px'} color={'black'}>
                      {comp.description}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </motion.div>
      </Box>
    </>
  );
}

export default page