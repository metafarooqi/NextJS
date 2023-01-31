import { ElementType, SVGProps } from 'react';
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue,
  ScaleFade,
  Icon,
  StackProps
} from '@chakra-ui/react';
import {BsFillCpuFill} from 'react-icons/bs';
import {AiOutlineGlobal,AiFillRobot,AiOutlineCloudServer,AiFillExperiment} from 'react-icons/ai';
import {FaNetworkWired} from 'react-icons/fa';
import {motion} from 'framer-motion';
import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { IconType } from 'react-icons/lib';

const variants = {
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.3,
    }
  }
};

const images = {
  hidden:{
    opacity:0,
    y:30,
  },
  show:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
    }
  }
};


// import { useRef } from 'react';
// import { useInViewport } from 'react-in-viewport';
interface IFeature {
  heading: string;
  content: string;
  icon: IconType;
  link:string;
}

const features: IFeature[] = [
  {
    heading: 'Web 3 & Metaverse',
    content: 'Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences...',
    icon: AiOutlineGlobal,
    link:'/Courses/web3'
  },
  {
    heading: 'AI & Deep Learning',
    content: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs...',
    icon: AiFillRobot,
    link:'/Courses/ai'
  },
  {
    heading: 'Ambient Comput & IOT',
    content: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories...',
    icon: BsFillCpuFill,
    link:'/Courses/iot'
  },
  {
    heading: 'Cloud Computing',
    content: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes...',
    icon: AiOutlineCloudServer,
    link:'/Courses/cloud'
  },
  {
    heading: 'Genomics & Bioinfo',
    content: 'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic info...',
    icon: AiFillExperiment,
    link:'/Courses/bio'
  },
  {
    heading: 'Network Automation',
    content: 'More than ever, network engineers are finding it challenging to complete their duties entirely manually...',
    icon: FaNetworkWired,
    link:'/Courses/nw'
  }
];

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function CourseIcon(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
      <Icon as={icon} boxSize="12" />
  );
}

function GetIcon({icon}){
  return icon;
}

const Courses = () => {
  // const ref = useRef(null);
  // const {inViewport} = useInViewport(
  //   ref,
  //   // {rootMargin:"-25px"},
  //   // {disconnectOnLeave:false}
  // );
  return (
    <motion.div variants={variants} initial="hidden" animate="show">
      <Container maxW="6xl" p={{ base: 5, md: 10 }}>
        <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
          Specialization Tracks
        </chakra.h3>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          placeItems="center"
          spacing={10}
          mb={4}
        >
          {features.map((feature, index) => (
            // <ScaleFade
            //   delay={0.1}
            //   initialScale={0.5}
            //   in={inViewport}
            //   whileHover={{ scale: 1.1 }}
            //   key={index}
            // >
            <motion.div
              variants={images}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.1 }}
              key={index}
            >
              <Link style={{textDecoration:'none'}} href={feature.link}>
                <Box
                  key={index}
                  bg={"white.100"}
                  p={6}
                  rounded="lg"
                  textAlign="center"
                  pos="relative"
                  border="1px solid #f44336"
                  boxShadow="0px 20px 25px -5px rgba(0,0,0,0.1),0px 10px 10px -5px rgba(0,0,0,0.4)"
                  // ref={ref}
                >
                  <Flex
                    p={2}
                    w="max-content"
                    color="white"
                    //   bgGradient="linear(to-br, #228be6, #15aabf)"
                    bgGradient="linear(to-br, #f44336, #9c27b0)"
                    rounded="md"
                    marginInline="auto"
                    pos="absolute"
                    left={0}
                    right={0}
                    top="-1.5rem"
                    boxShadow="lg"
                  >
                    {/* <img src='/images/web3.svg' color='white' /> */}
                    {/* {feature.icon} */}
                    <Icon as={feature.icon} height='3em' width='3em' />
                  </Flex>
                  <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
                    {feature.heading}
                  </chakra.h3>
                  <Text fontSize="md" mt={4}>
                    {feature.content}
                  </Text>
                  {/* <Link
                  href={feature.link}
                  mt={4}
                  fontSize="sm"
                  fontWeight={700}
                  color="red.500"
                >
                  Learn more →
                </Link> */}
                </Box>
              </Link>
            </motion.div>
            // </ScaleFade>
          ))}
        </SimpleGrid>
      </Container>
    </motion.div>
  );
};

export default Courses;