'use client';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

import {motion} from 'framer-motion'
const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const courses = [
  {
    title: "Artificial Intelligence",
    description:"A One Year AI Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Computing Enabled By The Rise Of AI.",
    id:"ai",
    img_url:"/images/AI.jpg"
  },
  {
    title: "Cloud Native & Mobile Web Computing",
    description:"A One Year Cloud Computing Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Microservices And Multi-Cloud Native Computing.",
    id:"cloud",
    img_url:"/images/cloud.jpg"
  },
  {
    title: "Block Chain",
    description:"A One Year Blockchain Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Blockchain, Fintech And Smart Contracts.",
    id:"bc",
    img_url:"/images/BC.png"
  },
  {
    title: "Internet of Things and AI Specialist",
    description:"A Fifteen Months IOT And AI Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Internet Of Things & AI.",
    id:"iot",
    img_url:"/images/IOT.jpg"
  },
  {
    title: "Web 3.0 And Metaverse",
    description:"A One Year Web3 & Metaverse Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era of Web 3.0 And Metaverse.",
    id:"web3",
    img_url:"/images/Metaverse.jpg"
  },
]

export default function WithSpeechBubbles() {
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
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Artifical Intelligence</TestimonialHeading>
                <TestimonialText>
                  A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING
                  PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE
                  RISE OF AI.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Jane Cooper"}
                title={"CEO at ABC Corporation"}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Intuitive Design</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Jane Cooper"}
                title={"CEO at ABC Corporation"}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Jane Cooper"}
                title={"CEO at ABC Corporation"}
              />
            </Testimonial>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
