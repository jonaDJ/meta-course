import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
   return (
    <VStack 
      color="black" 
      backgroundColor="white"
      borderRadius="xl"
     >
      <Image src={imageSrc} alt={title} borderRadius="xl" />
      <VStack spacing={4} alignItems="flex-start" p={5}>
        <Heading as="h4" size="md">{title}</Heading>
        <Text color="grey" fontSize="lg">{description}</Text>
        <HStack fontSize="md" fontWeight="medium">
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
