import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Tag,
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
    setCompletedNo({
      algo: topics.algorithms.filter((x) => checkData[x.id] == true).length,
      algoAdv: topics.algorithmsAdv.filter((x) => checkData[x.id] == true).length,
      ds: topics.dataStructures.filter((x) => checkData[x.id] == true).length,
      dsAdv: topics.dataStructuresAdv.filter((x) => checkData[x.id] == true).length,
      adv: topics.Adv.filter((x) => checkData[x.id] == true).length,
    });
  }, [checkData]);

  useEffect(() => {
    const local = localStorage.getItem("checklist");
    const dates = localStorage.getItem("dates");
    if (local && local !== "{}") {
      setCheckData(JSON.parse(local));
      setDates(JSON.parse(dates));
    }
    
  }, []);
  const [completedNo, setCompletedNo] = useState({
    algo: 0,
    algoAdv: 0,
    ds: 0,
    dsAdv: 0,
    adv: 0,
  });
  
  return (
    <div style={{ margin: "0 auto", width: "90%", paddingBottom: "5rem" }}>
      <Heading
        ml="0.8rem"
        fontSize={["2rem", "3rem", "3rem", "3rem"]}
        mb="3rem"
      >
        Topic-wise Checklist
      </Heading>
      <Tag ml="1rem" mb="1rem" size="md" colorScheme="teal">
        Total topics completed by you :{" "}
        {completedNo.algo +
          completedNo.algoAdv +
          completedNo.ds +
          completedNo.dsAdv +
          completedNo.adv +
          "/" +
          (topics.algorithms.length +
            topics.algorithmsAdv.length +
            topics.dataStructures.length +
            topics.dataStructuresAdv.length +
            topics.Adv.length)}
      </Tag>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Flex alignItems="center" flex="1" textAlign="left">
                Algorithms{" "}
                <Tag ml="1rem" size="sm" colorScheme="teal">
                  {completedNo.algo + "/" + topics.algorithms.length}
                </Tag>
              </Flex>
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
              <Flex alignItems="center" flex="1" textAlign="left">
                Algorithms (advanced){" "}
                <Tag ml="1rem" size="sm" colorScheme="teal">
                  {completedNo.algoAdv + "/" + topics.algorithmsAdv.length}
                </Tag>
              </Flex>
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
              <Flex alignItems="center" flex="1" textAlign="left">
                Data Structures{" "}
                <Tag ml="1rem" size="sm" colorScheme="teal">
                  {completedNo.ds + "/" + topics.dataStructures.length}
                </Tag>
              </Flex>
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
              <Flex alignItems="center" flex="1" textAlign="left">
                Data Structures (advanced){" "}
                <Tag ml="1rem" size="sm" colorScheme="teal">
                  {completedNo.dsAdv + "/" + topics.dataStructuresAdv.length}
                </Tag>
              </Flex>
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
              <Flex alignItems="center" flex="1" textAlign="left">
                More Advanced Topics{" "}
                <Tag ml="1rem" size="sm" colorScheme="teal">
                  {completedNo.adv + "/" + topics.Adv.length}
                </Tag>
              </Flex>
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
