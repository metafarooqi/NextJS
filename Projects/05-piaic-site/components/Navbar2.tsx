'use client'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import logo from "../public/piaic-logo.svg";

function Navbar2() {
  return (
    <Box boxShadow={"lg"}>
      <Container maxW="1400">
        <SimpleGrid templateColumns={{lg:"repeat(3,1fr)",base:"repeat(2,1fr)"}}>
          <Box>
            <Image src={logo} alt="PIAIC" height={"100"} />
          </Box>
          <Flex
            placeItems={"center"}
            display={{ lg: "flex", base: "none" }}
            gap={10}
            fontSize={18}
          >
            <Link href="">Home</Link>
            <Link href="">Programs</Link>
            <Link href="">Explore</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </Flex>
          <Box display={{ lg: "initial", base: "none" }}>
            <Button mt={"10px"} colorScheme={"teal"} float={"right"}>
              Apply
            </Button>
          </Box>
          <Box display={{ base: "initial", lg: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                float={'right'}
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Programs</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuItem>About</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Navbar2