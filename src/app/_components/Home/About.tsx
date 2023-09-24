import { Flex, Text, useMediaQuery, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/app/_components";

export const About: FC = () => {
  const theme = useTheme();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      backgroundImage={theme.colors.gradient.primary}
      direction="row"
      px={{ base: 10, md: 205 }}
      gap={200}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems="center"
    >
      <Flex hidden={!isLargerThan768}>
        <Image
          src="/images/food-serving.png"
          width={600}
          height={800}
          style={{
            flexShrink: 0,
          }}
          alt="serving-food"
        />
      </Flex>
      <Flex
        alignItems={{ base: "center", md: "flex-start" }}
        direction="column"
        gap={21.59}
        py={12}
      >
        <Flex
          direction="column"
          alignItems={{ base: "center", md: "flex-start" }}
          gap={27.41}
        >
          <Text
            textAlign={{ base: "center", md: "left" }}
            fontSize="45px"
            fontWeight="600"
            color="primary"
          >
            About Us
          </Text>
          <Text
            textAlign={{ base: "center", md: "left" }}
            maxWidth="md"
            fontSize="15px"
            fontWeight="400"
            color="body"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. t has survived
            not only five centuries.
          </Text>
        </Flex>
        <Button variant="primary">Read More</Button>
      </Flex>
    </Flex>
  );
};
