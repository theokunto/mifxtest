import { Box } from "@chakra-ui/react";

const ReviewsCount = ({ reviewCount }) => {
    return (
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {`(${reviewCount} reviews)`} 
        </Box>
    )
}

export default ReviewsCount;