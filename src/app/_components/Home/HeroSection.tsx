import { Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { Button } from "@/app/_components";

export const HeroSection: FC = () => (
  <Grid templateColumns="repeat(2, 1fr)" paddingBottom={185}>
    <Flex direction="column" pl={100} pt={33} gap={111}>
      <Image src="/images/logo.svg" alt="logo" width="107" height="83" />
      <Flex direction="column" gap={41}>
        <Flex direction="column" gap={26}>
          <Text fontSize="62px" color="primary" width={400} fontWeight={700}>
            Discover the{" "}
            <Text as="span" fontSize="62px" color="secondary" fontWeight={700}>
              Best
            </Text>{" "}
            Food and Drinks
          </Text>
          <Text color="body" width="345px" fontSize={16}>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>
        </Flex>
        <Button variant="primary">Explore Now!</Button>
      </Flex>
    </Flex>
    <Flex position="relative" direction="column">
      <Image
        src="/images/cover.png"
        width={735}
        height={804}
        layout="responsive"
        alt="cover"
      />
      <Image
        src="/images/red-vector.svg"
        style={{
          position: "absolute",
          right: 0,
        }}
        width={752}
        height={839}
        layout="responsive"
        alt="red-vector"
      />
      <Button variant="secondary" position="absolute" right={5} top={6}>
        Get in Touch
      </Button>
    </Flex>
  </Grid>
);
