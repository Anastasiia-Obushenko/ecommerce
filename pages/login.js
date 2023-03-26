import { Box, Button, Container, FormControl, FormLabel, Heading, HStack, Input, Stack, useBreakpointValue, useColorModeValue, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Link from 'next/link';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail('');
        setPassword('');
    };
    return (
        <Container
            maxW='lg'
            py={{ base: '12', md: '24' }}
            px={{ base: '0', sm: '8' }}
        >
            <Stack spacing='8'>
                <Stack spacing='6' textAlign='center'>
                    <Heading>Log in to your account</Heading>
                    <HStack spacing='1' justify='center'>
                        <Text>
                            Don&apos;t have an account?
                        </Text>
                        <Link href='/signup' passHref>
                            <Button variant="link" colorScheme="pink">Sign Up</Button>
                        </Link>
                    </HStack>
                </Stack>
            </Stack>
            <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
                boxShadow={{ base: "none", sm: useColorModeValue('md', 'md-dark') }}
                borderRadius={{ base: 'none', sm: 'xl' }}
            >
                <form onSubmit={handleSubmit}>
                    <Stack spacing='6'>
                        <Stack spacing='5'>
                            <FormControl>
                                <FormLabel htmlFor='email'>Email address</FormLabel>
                                <Input id='email' type='email' onChange={(e) => setEmail(e.target.value)}></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='password'>Password</FormLabel>
                                <Input id='password' type='password' onChange={(e) => setPassword(e.target.value)}></Input>
                            </FormControl>
                            <HStack justify='space-between'>
                                <Button variant='link' colorScheme='pink' size='sm'>
                                    Forgot password?
                                </Button>
                            </HStack>
                            <Stack>
                                <Button colorScheme='pink' type='submit'>Sign In</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </form>
            </Box>
        </Container>
    );
}

export default LoginPage;