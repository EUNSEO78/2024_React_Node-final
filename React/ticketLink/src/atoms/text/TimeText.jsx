import BaseText from "./BaseText";

const TimeText = (props) => {
  return <BaseText style={{ fontSize: "17px" }} time={props.time} />;
};

export default TimeText;
