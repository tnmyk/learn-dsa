import { Checkbox, Tag } from "@chakra-ui/react";

const CheckItem = ({ name, isChecked, id, changeCheck, date,type }) => {
  
  var tagColor ='teal'
  switch(type){
    case 'Sorting':
      tagColor='red'
      break;
    case 'Searching':
      tagColor='purple'
      break;      
  }
  return (
    <div style={{ display: "flex", alignItems: "center",margin:'1rem 1rem' }}>
      <Checkbox
        isChecked={isChecked}
        onChange={() => {
          changeCheck(id);
        }}
        mr="1rem"
      ></Checkbox>{" "}
      {name}{" "}
      <Tag ml='1rem' fontSize='0.7rem' size='sm' variant="solid" colorScheme={tagColor}>
        {type}
      </Tag>
      <span style={{ color: "gray", fontSize: "0.8rem", marginLeft: "1rem" }}>
        {" "}
        {isChecked && "completed on - " + date}
      </span>
    </div>
  );
};

export default CheckItem;
