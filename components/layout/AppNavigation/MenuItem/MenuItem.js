import Link from "next/link";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const Base = styled.li`
  position: relative;
  min-width: 200px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Menu = styled.div`
  color: ${({ active }) => (active ? "#fff" : "#a4a4a4")};
  background-color: ${({ selected }) => (selected ? "rgba(255, 255, 255, 0.1)" : "")};
  padding-top: 22px;
  padding-bottom: 22px;
  text-align: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Container = styled.div`
  display: block;
  position: absolute;
  top: 60px;
  height: 0;
  min-width: 240px;
`;

const SubMenuWrapper = styled.ul`
  display: ${({ selected }) => (selected ? "block" : "none")};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px 0;
  margin-top: 4px;
  border-radius: 4px;
`;

const SubMenu = styled.li`
  height: 44px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? "#fff" : "#a4a4a4")};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const MenuItem = ({ menu }) => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const { pathname } = useRouter();

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSelectedMenu("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleClickMenu = (e) => {
    setSelectedMenu(e.target.dataset.name);
  };

  return (
    <>
      {!menu.sub.length > 0 ? (
        <Link href="/">
          <a>
            <Base>
              <Menu active={pathname === "/"}>Home</Menu>
            </Base>
          </a>
        </Link>
      ) : (
        <Base ref={menuRef}>
          <Menu
            active={pathname === menu.href}
            selected={selectedMenu === menu.name.toLowerCase()}
            onClick={handleClickMenu}
            data-name={menu.name.toLowerCase()}>
            {menu.name}
          </Menu>
          <Container>
            <SubMenuWrapper selected={selectedMenu === menu.name.toLowerCase()}>
              {menu.sub?.map((subMenu) => (
                <Link
                  href={subMenu.href}
                  key={subMenu.id}>
                  <a>
                    <SubMenu>{subMenu.name}</SubMenu>
                  </a>
                </Link>
              ))}
            </SubMenuWrapper>
          </Container>
        </Base>
      )}
    </>
  );
};

export default MenuItem;
