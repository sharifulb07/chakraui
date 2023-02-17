import { Image,Box, Badge } from "@chakra-ui/react"
 import React from "react"

import { StarIcon } from "@chakra-ui/icons"

export default function AirbnbCard(){
    const property={
        imageUrl:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imageAlt:"rear View of modern home with pool",
        beds:3,
        baths:2,
        title:'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount:34,
        rating:4,
    }


    return(
        <Box maxW="sm" borderWirdth='1px' ml="50" borderRadius='lg' bg="gray.700" overflow='hidden'>
            <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box p='6'>
                <Box display="flex" alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New 
                    </Badge>
                    <Box color='gray.400'
                    fontWeight='semibold'
                    fontSize='xs'
                    textTransform="uppercase"
                    ml='2'
                    >
                        {property.beds} beds &bull; {property.baths} baths 
                    </Box>
                </Box>

                <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                >
                    {property.title}
                </Box>
                <Box>
                    {property.formattedPrice}
                    <Box as="span" color='gray.600' fontSize='sm'>
                        /wk
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                    .fill('')
                    .map((_,i)=>(
                        <StarIcon
                        key={i}
                        color={i<property.rating ? "teal.500":'gray.300'}
                        />
                    ))}

                </Box>
                <Box  as='button' bg='tomato' color='white' mt={8} borderRadius={3} px={5} h={8}>
                    Book 
                </Box>

            </Box>
        </Box>
    )
}