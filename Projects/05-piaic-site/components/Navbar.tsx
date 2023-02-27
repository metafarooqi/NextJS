"use client";
import { ReactNode, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  HStack,
  IconButton
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import {usePathname} from 'next/navigation';
const NavLink = ({ children,url }: { children: ReactNode,url:string }) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg:'#02645f',
      color:'white'
    }}
    // color={`${navItem.href === path ? "red.500" : "black"}`}
    href={url}>
    {children}
  </Link>
);

const Links = [{title:'Apply',url:'https://portal.piaic.org/signup'}, {title:'Programs',url:'/programs'},{title:'About',url:'/about'}];

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const path = usePathname();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        boxShadow="0px 20px 25px -5px rgba(0,0,0,0.1),0px 10px 10px -5px rgba(0,0,0,0.4)"
        position="sticky"
        top="0"
        zIndex="9999"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <Box mt={30} ml={2}>
            
              <Link href={'/'} as={NextLink}><Image src="/piaic-logo.svg" w={"50%"}></Image></Link>
            
          </Box>
          <HStack
            spacing={8}
            alignItems={"center"}
            display={{ lg: "initial", base: "none" }}
          >
            <motion.div
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <Link
                  as={NextLink}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg:'#02645f',
                    color:'white'
                  }}
                  //color={`${link.url === path ? "red.500" : "black"}`}
                  bgColor={`${link.url === path ? "#02645f" : "none"}`}
                  href={link.url}>
                  {link.title}
                </Link>
                  // <NavLink key={link.url} url={link.url}>{link.title}</NavLink>
                ))}
              </HStack>
            </motion.div>
          </HStack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={2}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Box display={{ base: "initial", lg: "none" }}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    float={"right"}
                  />
                  <MenuList>
                    <MenuItem>Apply</MenuItem>
                    <MenuItem>Programs</MenuItem>
                    <MenuItem>About</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
