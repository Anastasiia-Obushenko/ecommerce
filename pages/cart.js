import React, { useContext } from 'react';
import CartItem from '@/components/Cartitem';
import { CartContext } from '@/context/CartContext';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const CartPage = () => {
    const { cart } = useContext(CartContext);
    return (
        <Box
            maxW={{ base: '3xl', lg: '7xl' }}
            mx='auto'
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '4', md: '8', lg: '12' }}
        >
            {
                cart?.length === 0 ?
                    (
                        <Text fontSize='xl' fontWeight="bold">Your cart is empty</Text>
                    ) : (
                        <>
                            <Stack
                                as='section'
                                spacing={{ base: '8', lg: '14' }}
                                direction={{ base: 'column', lg: 'row' }}
                                align={{ lg: "flex-start" }}
                            >
                                <Stack flex="2" spacing={{ base: "6", lg: "18" }}>
                                    <Heading as='h1' size="2xl ">Shopping Cart</Heading>

                                    <Stack spacing={'6'}>
                                        {cart?.length > 0 && cart.map((item) => (
                                            <CartItem key={item.id} item={item} />
                                        ))}
                                    </Stack>
                                </Stack>
                                <Flex direction="column" align="center" flex="1">
                                            <OrderSummary />
                                </Flex>
                            </Stack>
                        </>
                    )
            }
        </Box>
    );
};

export default CartPage;