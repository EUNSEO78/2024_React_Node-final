import MatchInfoAll from "../molecules/MatchInfoAll";

const MatchInfo = () => {
  const data = [
    {
      date: "03.01",
      day: "(토)",
      time: "14:00",
      teamLogo: "https://image.toast.com/aaaaab/ticketlink/TKL_3/Incheon.png",
      opposingTeamLogo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_10/Suwon.png",
      teamName: "인천",
      oppTeamName: "수원",
      place: "인천축구전용경기장",
      buttonTop: "2025.02.25 (화)",
      buttonBottom: "14:00",
    },
    {
      date: "03.15",
      day: "(토)",
      time: "14:00",
      teamLogo: "https://image.toast.com/aaaaab/ticketlink/TKL_3/Incheon.png",
      opposingTeamLogo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_1/SeoulE.png",
      teamName: "인천",
      oppTeamName: "서울E",
      place: "인천축구전용경기장",
      buttonTop: "2025.03.11 (화)",
      buttonBottom: "14:00",
    },
    {
      date: "03.29",
      day: "(토)",
      time: "16:30",
      teamLogo: "https://image.toast.com/aaaaab/ticketlink/TKL_3/Incheon.png",
      opposingTeamLogo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_8/Busan.png",
      teamName: "인천",
      oppTeamName: "부산",
      place: "인천축구전용경기장",
      buttonTop: "2025.03.25 (화)",
      buttonBottom: "14:00",
    },
    {
      date: "04.13",
      day: "(일)",
      time: "14:00",
      teamLogo: "https://image.toast.com/aaaaab/ticketlink/TKL_3/Incheon.png",
      opposingTeamLogo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_1/cj_em.png",
      teamName: "인천",
      oppTeamName: "충북청주",
      place: "인천축구전용경기장",
      buttonTop: "2025.04.09 (수)",
      buttonBottom: "14:00",
    },
    {
      date: "04.19",
      day: "(토)",
      time: "14:00",
      teamLogo: "https://image.toast.com/aaaaab/ticketlink/TKL_3/Incheon.png",
      opposingTeamLogo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_1/Cheonan.png",
      teamName: "인천",
      oppTeamName: "천안",
      place: "인천축구전용경기장",
      buttonTop: "2025.04.15 (화)",
      buttonBottom: "14:00",
    },
    {
      date: "05.04",
      day: "(일일)",
      time: "16:30",
      teamLogo: "https://image.toast.com/aaaaab/ticketlink/TKL_3/Incheon.png",
      opposingTeamLogo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_5/Gimpo.png",
      teamName: "인천",
      oppTeamName: "김포",
      place: "인천축구전용경기장",
      buttonTop: "2025.04.30 (수)",
      buttonBottom: "14:00",
    },
  ];
  return (
    <>
      {data.map((v) => (
        <MatchInfoAll {...v} />
      ))}
    </>
  );
};

export default MatchInfo;
