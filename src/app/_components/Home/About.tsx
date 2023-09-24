import { Flex, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/app/_components";

export const About: FC = () => {
  const theme = useTheme();
  return (
    <Flex
      backgroundImage={theme.colors.gradient.primary}
      direction="row"
      px={205}
      gap={200}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex>
        <Image
          src="/images/food-serving.png"
          width={384}
          height={468}
          style={{
            flexShrink: 0,
          }}
          alt="serving-food"
        />
      </Flex>
      <Flex direction="column" gap={21.59}>
        <Flex direction="column" gap={27.41}>
          <Text fontSize="45px" fontWeight="600" color="primary">
            About Us
          </Text>
          <Text maxWidth="md" fontSize="15px" fontWeight="400" color="body">
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
