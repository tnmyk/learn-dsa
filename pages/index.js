import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Card from "../components/Card";

import cards from "../data/cards";
export default function Home() {
  return (
    <>
      <Head>
        <title>Learn DSA</title>
      </Head>
      <Flex
        position="relative"
        alignItems="center"
        flexDir="column"
        zIndex="10"
      >
        <Box
          zIndex="-1"
          backgroundImage="url('/background.png')"
          backgroundSize="contain"
          opacity="0.4"
          w="100%"
          h="100%"
          position="absolute"
        ></Box>
        <Heading
          fontSize={["2xl", "4xl", "5xl", "6xl"]}
          w="max-content"
          mt="8rem"
        >
          Data Structure and Algorithms
        </Heading>
        <Heading size="md" w="max-content" my="2rem">
          Snippets and More
        </Heading>
        <Grid
          mt="4rem"
          rowGap={12}
          columnGap={"2.8rem"}
          w="92%"
          justifyContent="space-between"
          gridAutoRows="1fr"
          // templateColumns="repeat(auto-fit,minmax(200px,310px))"
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          mx="auto"
        >
          {cards.map((card) => {
            return (
              <Card
                title={card.title}
                snippet={card.snippet}
                link={card.link}
                key={Math.random()}
              />
            );
          })}
        </Grid>
      </Flex>
    </>
  );
}
