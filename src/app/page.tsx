"use client";
import { Flex } from "@chakra-ui/react";
import { About, Articles, Footer, HeroSection } from "@/app/_components";

export default function Home() {
  return (
    <Flex direction="column" width="100%">
      <HeroSection />
      <About />
      <Articles />
      <Footer />
    </Flex>
  );
}
