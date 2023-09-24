import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { Button, Carousel, CarouselItem } from "@/app/_components";

export const Articles: FC = () => {
  const data = [
    {
      items: [
        {
          id: 1,
          title: "Grilled Tomatoes at Home",
          body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
          image: "/images/articles/grilled-tomatoes.png",
        },
        {
          id: 2,
          title: "Snacks for Travel",
          body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
          image: "/images/articles/snacks-for-travel.png",
        },
        {
          id: 3,
          title: "Post-workout Recipes",
          body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
          image: "/images/articles/post-workout.png",
        },
      ],
    },
    {
      items: [
        {
          id: 4,
          title: "How To Grill Corn",
          body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
          image: "/images/articles/how-to-grill.png",
        },
        {
          id: 5,
          title: "Crunchwrap Supreme",
          body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
          image: "/images/articles/crunchwrap-supreme.png",
        },
        {
          id: 6,
          title: "Broccoli Cheese Soup",
          body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...",
          image: "/images/articles/broccoli-cheese-soup.png",
        },
      ],
    },
  ];
  return (
    <Flex direction="column" px={{ base: 0, md: 108 }} py={158} gap={41}>
      <Text
        textAlign={{ base: "center", md: "left" }}
        color="primary"
        fontWeight={600}
        fontSize={{ base: 28, md: 56 }}
        letterSpacing={2.24}
      >
        Latest Articles
      </Text>
      <Flex direction="row">
        <Carousel>
          {data.map((_items, index) => (
            <CarouselItem key={`${index + 1}`}>
              <Stack
                direction={{ base: "column", md: "row" }}
                alignItems={{ base: "center", md: "flex-start" }}
                p={3}
                gap={41}
              >
                {_items.items.map((item) => (
                  <Card width={{ base: 330, md: 381 }} key={item.id}>
                    <CardBody>
                      <Image
                        src={item.image}
                        width={326}
                        height={257}
                        alt={item.title}
                      />
                      <Flex direction="column" mt={35.61} gap={14}>
                        <Text fontSize={21} fontWeight={700} color="primary">
                          {item.title}
                        </Text>
                        <Text
                          fontSize={15}
                          fontWeight={400}
                          color="body"
                          whiteSpace="normal"
                        >
                          {item.body}
                        </Text>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <Button variant="tertiary">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </Stack>
            </CarouselItem>
          ))}
        </Carousel>
      </Flex>
    </Flex>
  );
};
