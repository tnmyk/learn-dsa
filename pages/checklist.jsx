import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import CheckItem from "../components/CheckItem";
import topics from "../data/topics";
import { useEffect, useState } from "react";
const CheckList = () => {
  const [checkData, setCheckData] = useState({});
  const [dates, setDates] = useState({});
  const changeCheck = (id) => {
    setDates({ ...dates, [id]: new Date().toLocaleDateString("en-GB") });
    setCheckData({ ...checkData, [id]: !checkData[id] });
  };
  useEffect(() => {
    if (JSON.stringify(checkData) == "{}") return;
    localStorage.setItem(["checklist"], JSON.stringify(checkData));
    localStorage.setItem(["dates"], JSON.stringify(dates));
  }, [checkData]);
  useEffect(() => {
    const local = localStorage.getItem("checklist");
    const dates = localStorage.getItem("dates");
    if (local && local !== "{}") {
      setCheckData(JSON.parse(local));
      setDates(JSON.parse(dates));
    }
  }, []);
  return (
    <div style={{ margin: "0 auto", width: "80%" }}>
      {/* <Head>
        <title>Checklist</title>
      </Head> */}
      <Heading size="2xlg" mb="3rem">
        CheckList
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Algorithms
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {topics.algorithms.map((topic, index) => {
              return (
                <CheckItem
                  type={topic.type}
                  changeCheck={changeCheck}
                  id={topic.id}
                  isChecked={checkData[topic.id]}
                  name={topic.name}
                  key={index}
                  date={dates[topic.id]}
                />
              );
            })}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Algorithms (advanced)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {topics.algorithmsAdv.map((topic, index) => {
              return (
                <CheckItem
                  type={topic.type}
                  changeCheck={changeCheck}
                  id={topic.id}
                  isChecked={checkData[topic.id]}
                  name={topic.name}
                  key={index}
                  date={dates[topic.id]}
                />
              );
            })}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Data Structures
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {topics.dataStructures.map((topic, index) => {
              return (
                <CheckItem
                  type={topic.type}
                  changeCheck={changeCheck}
                  id={topic.id}
                  isChecked={checkData[topic.id]}
                  name={topic.name}
                  key={index}
                  date={dates[topic.id]}
                />
              );
            })}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Data Structures (advanced)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {topics.dataStructuresAdv.map((topic, index) => {
              return (
                <CheckItem
                  type={topic.type}
                  changeCheck={changeCheck}
                  id={topic.id}
                  isChecked={checkData[topic.id]}
                  name={topic.name}
                  key={index}
                  date={dates[topic.id]}
                />
              );
            })}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                More Advanced Topics
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {topics.Adv.map((topic, index) => {
              return (
                <CheckItem
                  type={topic.type}
                  changeCheck={changeCheck}
                  id={topic.id}
                  isChecked={checkData[topic.id]}
                  name={topic.name}
                  key={index}
                  date={dates[topic.id]}
                />
              );
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CheckList;
