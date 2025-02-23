import BaseButton from "./BaseButton";

const ReservationButton = (props) => {
  const { buttonTop, buttonBottom } = props;
  return <BaseButton buttonTop={buttonTop} buttonBottom={buttonBottom} />;
};

export default ReservationButton;
