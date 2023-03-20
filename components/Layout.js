import React from 'react';
import Head from 'next/head';
import { Box, Flex, Text, Stack, Button, useColorModeValue, useColorMode, Container } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import CartIcon from './Carticon';


function Layout({ children }) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div><Head><title>E-commerce App</title></Head>
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}
                >
                    <Flex
                        flex={{ base: 1 }}
                        justify={{ base: 'start', md: 'start' }}
                    >
                        <Link href={'/'} passHref>
                            <Text
                                fontFamily={'heading'}
                                color={useColorModeValue('gray.800', 'white')}
                            >
                                Logo
                            </Text>
                        </Link>
                    </Flex>
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                    >
                        <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
                        <CartIcon />
                        <Button
                            as={'a'}
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={'#'}
                        >
                            Sign In
                        </Button>
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            bg={'pink.400'}
                            href={'#'}
                            _hover={{ bg: 'pink.300' }}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </Flex>
            </Box>
            {children}
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.600')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderTop={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}

                >
                    <Flex
                        flex={{ base: 1 }}
                        justify={{ base: 'center' }}
                        alignItems={{ base: 'center' }}
                    >
                        <Text
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.600', 'white')}
                        >
                            Copyright 2023. Example.
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </div>
    );
}

export default Layout;