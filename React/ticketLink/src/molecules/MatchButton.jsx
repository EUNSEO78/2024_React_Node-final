import ReservationButton from "../atoms/button/ReservationButton";

const MatchButton = (props) => {
  const { buttonTop, buttonBottom } = props;
  return (
    <ReservationButton buttonTop={buttonTop} buttonBottom={buttonBottom} />
  );
};

export default MatchButton;
