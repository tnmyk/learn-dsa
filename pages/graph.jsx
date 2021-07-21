import { DataSet, Network } from "vis";
import { useEffect, useRef } from "react";
import { data } from "../data/network";
const Graph = () => {
  const domNode = useRef(null);

  // A reference to the vis network instance
  const network = useRef(null);

  const options = {
    autoResize: true,
    height: "500px",
    width: "100%",
    nodes: {
      shape: "dot",
      size: 12,
      borderWidth: 1,
      borderWidthSelected: 2,
      brokenImage: undefined,
      chosen: true,
      font: {
        color: "white",
      },
      color: {
        border: "#909099",
        background: "#909099",
        highlight: {
          border: "#white",
          background: "#white",
        },
        hover: {
          border: "#white",
          background: "#white",
        },
      },
    },
    edges: {
      color: {
        color: "gray",
      },
    },
  };

  useEffect(() => {
    network.current = new Network(domNode.current, data, options);
  }, [domNode, network, data, options]);

  return (
    <>
      <p>Try dragging the nodes. Currently in BETA mode.</p>
      <div style={{ width: "100%", minHeight: "80vh" }} ref={domNode} />
    </>
  );
};

export default Graph;
