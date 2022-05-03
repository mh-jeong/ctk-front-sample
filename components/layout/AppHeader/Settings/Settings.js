import { useTheme } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

import * as S from "./Settings.styled";

const Settings = () => {
  const theme = useTheme();

  const [active, setActive] = useState(false);

  const settingsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingsRef]);

  const handleClick = () => {
    setActive(true);
  };

  return (
    <S.Base ref={settingsRef}>
      <S.SettingsIconWrapper onClick={handleClick}>
        <IoSettingsOutline
          size={24}
          color={theme.colors.black}
        />
      </S.SettingsIconWrapper>
      <S.SettingsMenuList active={active}>
        <S.SettingsMenu>설정 메뉴</S.SettingsMenu>
        <S.SettingsMenu>설정 메뉴</S.SettingsMenu>
        <S.SettingsMenu>설정 메뉴</S.SettingsMenu>
        <S.SettingsMenu>설정 메뉴</S.SettingsMenu>
      </S.SettingsMenuList>
    </S.Base>
  );
};

export default Settings;
