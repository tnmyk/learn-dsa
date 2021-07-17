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
      <Box zIndex="1" opacity="1" w="100%" h="100vh" position="fixed">
       
      </Box>
      <Flex
        position="relative"
        alignItems="center"
        flexDir="column"
        zIndex="10"
      >
        <Heading size="3xl" w="max-content" mt="8rem">
          Data Structure and Algorithms
        </Heading>
        <Heading size="md" w="max-content" my="2rem">
          Snippets and More
        </Heading>
        <Grid
          mt="4rem"
          gap={12}
          w="90%"
          justifyContent="center"
          gridAutoRows="minmax(min-content,max-content)"
          templateColumns="repeat(auto-fit,minmax(200px,300px))"
          mx="auto"
        >
          {cards.map((card)=>{
            return <Card title={card.title} snippet={card.snippet} link={card.link} key={Math.random()} />
          })}
        </Grid>
      </Flex>
    </>
  );
}
