import { PropsWithChildren } from 'react';
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
  TextProps
} from '@chakra-ui/react';
import {motion} from 'framer-motion';

const MissionSection = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center">
          <chakra.h3
            color={"red.600"}
            fontSize="2xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            The Program in a Nutshell: Earn While You Learn
          </chakra.h3>
          <Box>
            <Content textAlign={"justify"}>
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program’s beginning. It resembles a
              cross between a corporate venture and an educational project.
            </Content>
            <Content mt={4} textAlign={"justify"}>
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first two quarters
              are shared by all specialities and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a year-long hybrid programme that
              includes both onsite and online classes and is divided into four
              quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </Content>
          </Box>
          {/* <Link href="#" fontSize="sm" color="blue.400">
            See how people are using our components →
          </Link> */}
        </Stack>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <Box mr={{ base: 0, md: 5 }} pos="relative">
            <DottedBox />
            <Image
              boxShadow="lg"
              w="100%"
              h="100%"
              minW={{ base: "auto", md: "25rem" }}
              maxH="15rem"
              objectFit="cover"
              src={`https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80`}
              rounded="md"
              fallback={<Skeleton />}
            />
          </Box>
        </motion.div>
      </Stack>
    </Container>
  );
};

const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" right="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default MissionSection;