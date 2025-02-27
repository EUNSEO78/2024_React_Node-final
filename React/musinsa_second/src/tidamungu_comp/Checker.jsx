import { FaCheck } from "react-icons/fa";

const Checker = (props) => {
  const { text, isValid } = props;
  return (
    <div style={{ color: isValid ? "blue" : "black" }}>
      <FaCheck /> {text}
    </div>
  );
};

export default Checker;
