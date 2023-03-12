import React from 'react';
import { data } from '@/utils/data';
import Image from 'next/image';

const Products = () => {
    return (
        <div>{data.products.map((product) => (
            <Image
                key={product.id}
                src={`/images${product.image}`}
                height={230}
                width={230}
                style={{ objectFit: 'cover', height: '230px' }}
                alt={product.title}
            />
        ))}</div>
    );
};

export default Products;