import { Flex, Heading, HStack } from "@chakra-ui/react";

const Circle = ({ bgc }) => {
  return (
    <div
      style={{
        marginRight: "0.5rem",
        width: "1.4rem",
        height: "1.4rem",
        borderRadius: "50%",
        backgroundColor: bgc,
      }}
    ></div>
  );
};

const VisualizeTimePage = () => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Heading mb="3rem">Visualize Time Complexity</Heading>
      <div style={{ margin: "0 auto", width: "80%" }}>
        <img src="/graph.svg" alt="" width="100%" />
        <Flex
          flexDir={["column", "column", "row", "row"]}
          alignItems={["", "", "center", "center"]}
          justifyContent="center"
          width="100%"
          marginTop="3rem"
        >
          <div
            style={{
              display: "flex",
              marginBottom: "0.5rem",
              marginRight: "1rem",
            }}
          >
            <Circle bgc="#38BBBF" /> O(1)
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "0.5rem",
              marginRight: "1rem",
            }}
          >
            <Circle bgc="#FA8B31" /> O(logn)
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "0.5rem",
              marginRight: "1rem",
            }}
          >
            <Circle bgc="#589462" /> O(n)
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "0.5rem",
              marginRight: "1rem",
            }}
          >
            <Circle bgc="#775DB3" /> O(nlogn)
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "0.5rem",
              marginRight: "1rem",
            }}
          >
            <Circle bgc="#427EBA" /> O(n
            <span
              style={{
                verticalAlign: "top",
                fontSize: "0.6rem",
                marginRight: "0.1rem",
              }}
            >
              2{" "}
            </span>{" "}
            )
          </div>
        </Flex>
        <div style={{ margin: "0.5rem auto", width: "max-content" }}>
          {" "}
          N {"->"} Number of Elements
        </div>
      </div>
    </div>
  );
};

export default VisualizeTimePage;
