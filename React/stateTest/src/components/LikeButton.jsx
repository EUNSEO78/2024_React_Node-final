// 좋아요 버튼 (토글 기능 추가)
// 버튼을 누르면 좋아요와 좋아요 취소가 번갈아가면서 변경

import { useState } from "react";

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <button
      onClick={() => setIsLike((prev) => (isLike ? "좋아요" : "좋아요 취소"))}
    >
      {isLike}
    </button>
  );
};

export default LikeButton;
