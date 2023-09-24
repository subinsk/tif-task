import { Flex, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";

export const Footer: FC = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Grid
      templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(1, 1fr)" }}
      gap={{ sm: 24, md: 180 }}
      p={{ base: 10, lg: 100 }}
      alignItems={{ base: "center", md: "flex-start" }}
    >
      <Image src="/images/logo.svg" alt="logo" width="107" height="83" />
      <Flex direction="column">
        <Text
          color="primary"
          fontSize={18.84}
          fontWeight={600}
          letterSpacing={0.56}
          gap={14}
        >
          Contact Us
        </Text>
        <Text fontSize={14.65} fontWeight={400} color="#646874">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </Text>
        <Text fontSize={14.65} fontWeight={400} color="#646874">
          example2020@gmail.com
        </Text>
        <Text fontSize={14.65} fontWeight={400} color="#646874">
          (904) 443-0343
        </Text>
      </Flex>
      <Flex direction="column" gap={10}>
        <Text
          color="primary"
          fontSize={18.84}
          fontWeight={600}
          letterSpacing={0.56}
        >
          More
        </Text>
        <Text fontSize={14.65} fontWeight={400} color="#646874">
          About Us
        </Text>
        <Text fontSize={14.65} fontWeight={400} color="#646874">
          Products
        </Text>
        <Text fontSize={14.65} fontWeight={400} color="#646874">
          Career
        </Text>
        <Text fontSize={14.65} fontWeight={400} color="#646874">
          Contact Us
        </Text>
      </Flex>
      <Flex
        alignItems={{ base: "center", md: "flex-start" }}
        direction="column"
        gap={102}
      >
        <Flex direction="column" gap={11}>
          <Text
            hidden={!isLargerThan768}
            color="primary"
            fontSize={18.84}
            fontWeight={600}
            letterSpacing={0.56}
          >
            Social Links
          </Text>
          <Flex alignItems="center" gap={12}>
            <Image
              src="/images/icons/instagram.svg"
              width={21}
              height={21}
              alt="instagram"
            />
            <Image
              src="/images/icons/twitter.svg"
              width={21}
              height={21}
              alt="twitter"
            />
            <Image
              src="/images/icons/facebook.svg"
              width={21}
              height={21}
              alt="facebook"
            />
          </Flex>
        </Flex>
        <Text fontSize={14.65} fontWeight={400} color="#828B9C">
          &copy; 2022 Food Truck Example
        </Text>
      </Flex>
    </Grid>
  );
};
