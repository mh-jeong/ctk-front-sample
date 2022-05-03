import { useTheme } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

import * as S from "./Notification.styled";

const Notification = () => {
  const theme = useTheme();

  const [active, setActive] = useState(false);

  const notiRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notiRef.current && !notiRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notiRef]);

  const handleClick = () => {
    setActive(true);
  };

  return (
    <S.Base ref={notiRef}>
      <S.NotificationIconWrapper onClick={handleClick}>
        <IoNotificationsOutline
          size={24}
          color={theme.colors.black}
        />
      </S.NotificationIconWrapper>
      <S.NotificationInfoList active={active}>
        <S.NotificationInfo>알림 내용</S.NotificationInfo>
        <S.NotificationInfo>알림 내용</S.NotificationInfo>
        <S.NotificationInfo>알림 내용</S.NotificationInfo>
        <S.NotificationInfo>알림 내용</S.NotificationInfo>
        <S.NotificationInfo>알림 내용</S.NotificationInfo>
        <S.NotificationInfo>알림 내용</S.NotificationInfo>
        <S.NotificationInfo>알림 내용</S.NotificationInfo>
      </S.NotificationInfoList>
    </S.Base>
  );
};

export default Notification;
