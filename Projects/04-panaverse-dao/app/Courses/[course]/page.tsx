"use client";

import { Box, chakra, Divider, Heading, List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs,Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react'
import { MdCheckCircle,MdSettings } from "react-icons/md";
import{motion} from 'framer-motion';

export async function generateStaticParams() {
  const courses: string[] = ["web3", "ai", "cloud"];

  return courses.map((course) => ({
    course: course,
  }));
}



function course({ params }: {
  params: { course: string }
}) {
  const cdata = getCourses(params.course);
  //console.log(cdata);
  const colors = useColorModeValue(
    ['red.100', 'yellow.100', 'blue.100','purple.100','green.100'],
    ['red.900', 'yellow.900', 'blue.900','purple.900','green.900'],
  )
  const [tabIndex, setTabIndex] = useState(0)
  const bg = colors[tabIndex]
  return (
    <Box margin="0px 50px 0px 50px">
      {/* <CourseBanner /> */}
      <Box mt="50px !important" margin="auto" minH="100vh">
        <Heading textAlign="center" mb="4">
          {cdata?.title}
        </Heading>
        <Text mt="2" mb="2" textAlign={'justify'}>
          {cdata?.description}
        </Text>
        <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
          <TabList>
            <Tab>Q-I (Core)</Tab>
            <Tab>Q-II (Core)</Tab>
            <Tab>Q-III (Core)</Tab>
            <Tab>Q-IV</Tab>
            <Tab>Q-V</Tab>
          </TabList>
          <TabPanels p="2rem">
            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Heading mb="4" fontSize="1lg">
                  CS-101: Object-Oriented Programming using TypeScript (Duration
                  13 Weeks)
                </Heading>
                <Text>
                  We will start the program by learning the fundamentals of
                  Object-Oriented programming using JavaScript and TypeScript.
                  We will also understand the latest Web trends i.e. Web 3.0 and
                  Metaverse concepts and try to understand their working from
                  the perspective of the users.
                </Text>
                <Divider orientation="horizontal" />
                <Heading mt="4" fontSize="1lg" mb="4">
                  Course Outline
                </Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    HTML & CSS
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Web 3.0 and Metaverse Theory
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Fundamentals of JavaScript (ECMAScript 2022 Language
                    Specification)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Object-Oriented Programming with TypeScript
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    TypeScript for React
                  </ListItem>
                </List>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Heading mb="4" fontSize="1lg">
                  W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps
                  and APIs using Next.js 13 and Cloud Development Kit (CDK) for
                  Terraform (Duration 13 Weeks)
                </Heading>
                <Text>
                  We will start the program by learning the fundamentals of
                  Object-Oriented programming using JavaScript and TypeScript.
                  We will also understand the latest Web trends i.e. Web 3.0 and
                  Metaverse concepts and try to understand their working from
                  the perspective of the users.The objective of this course is
                  to teach participants to develop customer-facing planet-scale
                  Websites, Full-Stack Apps and templates, Dashboards, and
                  Muti-Cloud Serverless APIs. By the end of the quarter, the
                  participants will be able to develop and deploy web platforms
                  like Facebook, Shopify, etc. The technologies covered in this
                  course will include Next.js 13, Figma, Tailwind CSS, Chakra
                  UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
                  Compatible), AWS Serverless Technologies, and Cloud
                  Development Kit for Terraform (CDKTF).
                </Text>
                <Divider orientation="horizontal" />
                <Heading mt="4" fontSize="1lg" mb="4">
                  Course Outline
                </Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Next.js 13 Web Development
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Next.js 13 using Chakra UI (Remote Zoom Class)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                    Zoom Class)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    API Routes with Next.js
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    SQL and Prisma
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Next.js 13 using TailwindCSS (Remote Zoom Class)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    AWS Application Composer (Remote Zoom Class)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Multi-Cloud GraphQL Serverless API Development with Cloud
                    Development Kit for Terraform (CDKTF) (Remote Zoom Class)
                  </ListItem>
                </List>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Heading mb="4" fontSize="1lg">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development (Duration 13 Weeks)
                </Heading>
                <Text>Earn While You Learn Projects</Text>
                <Divider orientation="horizontal" />
                <Heading mt="4" fontSize="1lg" mb="4">
                  Projects
                </Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Build Full-Stack Next.js 13 Jamstack Templates
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Build QraphQL APIs
                  </ListItem>
                </List>
              </motion.div>
            </TabPanel>
            {cdata?.quarters.map((c) => (
              <TabPanel key={c.title}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Heading mb="4" fontSize="1lg">
                    {c.title} (Duration {c.duration})
                  </Heading>
                  <Text>{c.description}</Text>
                  <Divider orientation="horizontal" />
                  <Heading mt="4" fontSize="1lg" mb="4">
                    Course Outline
                  </Heading>
                  <List spacing={3}>
                    {c.courseOutline.map((cl) => (
                      <ListItem key={cl.title}>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        {cl.title}
                      </ListItem>
                    ))}
                  </List>
                </motion.div>
              </TabPanel>
            ))}
            {/* <TabPanel>
              <Heading mb="4" fontSize="1lg">
                {cdata.quarters[0].title}
              </Heading>
            </TabPanel>
            <TabPanel>Red, yellow and blue.</TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

interface ICourseProjectAttributes{
  title:string,
  description:string,
  url:string
}

interface IQuarter{
  title:string;
  description:string;
  duration:number;
  courseOutline:ICourseProjectAttributes[];
  projects:ICourseProjectAttributes[];
}


type courseData = {
   title : string;
   description:string;
   quarters:IQuarter[]
}

const getCourses = (course : string): courseData => {
  const courses:{[course:string]:courseData} = {
    web3:{
      title:"Web 3 and Metaverse Specialization",
      description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      quarters:[
        {
          title : "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
          description : "In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.",
          duration : 13,
          courseOutline:[
            {
              title : "Blockchain and Metaverse Theory",
              description:"",
              url:"",
            },
            {
              title:"Smart Contract Development in Solidity",
              description:"",
              url:"",
            },
            {
              title:"Dapp Development using Ethers.js and Next.js 13",
              description:"",
              url:"",
            },
            {
              title:"Tokennomics",
              description:"",
              url:"",
            },
            {
              title:"Understand the difference between IDO vs. IEO vs. ICO",
              description:"",
              url:"",
            }
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
            {
              title : "How to Launch a IDO on Polkastarter",
              description:"Review the [list of top fundraising platforms https://cryptorank.io/fundraising-platforms, Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter https://polkastarter.com/",
              url : ""
            },
            {
              title : "Create a Pako Token",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
            {
              title : "Develop Crowd Sale Contract",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            }
          ]
        },
        {
          title : "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
          description : "The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It’s unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.",
          duration : 13,
          courseOutline:[
            {
              title : "Open Metaverse Web Development",
              description:"",
              url:"",
            },
            {
              title:"Blender 3D asset Creation for the Metaverse",
              description:"",
              url:"",
            },
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
            {
              title : "How to Launch a IDO on Polkastarter",
              description:"Review the [list of top fundraising platforms https://cryptorank.io/fundraising-platforms, Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter https://polkastarter.com/",
              url : ""
            },
            {
              title : "Create a Pako Token",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
            {
              title : "Develop Crowd Sale Contract",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            }
          ]
        },
      ]
    },
    ai:{
      title:"Artificial Intelligence (AI) and Deep Learning Specialization",
      description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      quarters:[
        {
          title : "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
          description : "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology. We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13. We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.",
          duration : 13,
          courseOutline:[
            {
              title : "Introduction to Machine Learning, Data Science, and AI",
              description:"",
              url:"",
            },
            {
              title:"Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models We will cover GPT-4, ChatGPT, etc. and Next.js 13",
              description:"",
              url:"",
            },
            {
              title:"Python Crash Course  for TypeScript Developers",
              description:"",
              url:"",
            },
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
        {
          title : "AI-361: Deep Learning and MLOps",
          description : "This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.",
          duration : 13,
          courseOutline:[
            {
              title : "Deep Learning with Tensorflow",
              description:"",
              url:"",
            },
            {
              title:"Machine Learning Engineering for Production (MLOps) using Terraform for CDK",
              description:"",
              url:"",
            },
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
      ]
    },
    cloud:{
      title:"Cloud-Native Computing Specialization",
      description:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
      quarters:[
        {
          title : "CN-351: Certified Kubernetes Application Developer (CKAD)",
          description : "Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach. These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.",
          duration : 13,
          courseOutline:[
            {
              title : "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
              description:"",
              url:"",
            },
            {
              title:"Cloud Development Kit for Kubernetes",
              description:"",
              url:"",
            },
            
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
        {
          title : "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
          description : "Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures. Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.",
          duration : 13,
          courseOutline:[
            {
              title : "CDK for Terraform",
              description:"",
              url:"",
            },
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
      ]
    },
    iot:{
      title:"Ambient Computing and IoT Specialization",
      description:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
      quarters:[
        {
          title : "AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices",
          description : "Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more. If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected. Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices. In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.",
          duration : 13,
          courseOutline:[
            {
              title : "Alexa Skill Developement",
              description:"",
              url:"",
            },
            {
              title:"Alexa with Matter Protocol",
              description:"",
              url:"",
            },
            
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
        {
          title : "AC-361: Embedded Programming using C and Rust",
          description : "This is an introductory course about using the C and Rust Programming Languages on Bare Metal embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.",
          duration : 13,
          courseOutline:[
            {
              title : "Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2)",
              description:"",
              url:"",
            },
            {
              title : "The C Reference Book: The C programming language Embedded Programming book: Internet of things with ESP8266",
              description:"",
              url:"",
            },
            {
              title : "Introduction to C Part 1 (Weeks 3B, 4, and 5)",
              description:"",
              url:"",
            },
            {
              title : "C Programming Part 2 (Weeks 6 and 7)",
              description:"",
              url:"",
            },
            {
              title : "Introduction to Embedded systems Part 1 (Weeks 8)",
              description:"",
              url:"",
            },
            {
              title : "Introduction to Embedded systems Part 2 (Weeks 9-12)",
              description:"",
              url:"",
            },
            {
              title:"Embedded Programming using Rust (Extra Weeks in the Course)",
              description:"",
              url:"",
            }
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
      ]
    },
    bio:{
      title:"Genomics and Bioinformatics Specialization",
      description:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
      quarters:[
        {
          title : "Bio-351: Python for Biologists",
          description : "This course will focus on learning the basics of the Python programming language through genomics examples.",
          duration : 13,
          courseOutline:[
            {
              title : "Text Book : https://www.pythonforbiologists.org/",
              description:"",
              url:"",
            },
            
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
        {
          title : "Bio-361: Bioinformatics with Python",
          description : "In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.",
          duration : 13,
          courseOutline:[
            {
              title : "Textbook: https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1",
              description:"",
              url:"",
            },
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
      ]
    },
    nw:{
      title:"Network Programmability and Automation Specialization",
      description:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
      quarters:[
        {
          title : "NPA-351: CCNA 200-301 Certification",
          description : "This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.",
          duration : 13,
          courseOutline:[
            {
              title : "Textbook: https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1",
              description:"",
              url:"",
            },
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
        {
          title : "NPA-361: Network Programmability and Automation",
          description : "Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.",
          duration : 13,
          courseOutline:[
            {
              title : "Textbook: https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3 ",
              description:"",
              url:"",
            },
           
          ],
          projects:[
            {
              title : "How to Launch a IEO on Binance Launchpad",
              description:"Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo, Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04, Also document the alternatives to Binance Launchpad.",
              url : ""
            },
          ]
        },
      ]
    },
  };

  return courses[course];
}



export default course