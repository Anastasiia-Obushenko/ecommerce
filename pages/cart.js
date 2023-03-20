import React, { useContext } from 'react';
import CartItem from '@/components/Cartitem';
import { CartContext } from '@/context/CartContext';
import { Box, Stack, Text } from '@chakra-ui/react';

const CartPage = () => {
    const { cart } = useContext(CartContext);
    return (
        <Box>
            {
                cart?.length === 0 ?
                    (
                        <Text fontSize='xl' fontWeight="bold">Your cart is empty</Text>
                    ) : (
                        <>
                            <Stack>
                                {cart?.length > 0 && cart.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </Stack>
                        </>
                    )
            }
        </Box>
    );
};

export default CartPage;