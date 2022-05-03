import * as S from "./PageButtonPannel.styled";

const DUMMY_DATA = [
  {
    id: 0,
    name: "Receipt",
  },
  {
    id: 1,
    name: "WRO",
  },
  {
    id: 2,
    name: "Barcode",
  },
  {
    id: 3,
    name: "Delete",
  },
];

const PageButtonPannel = () => {
  const handleOnClick = (e) => {
    alert(`click ${e.currentTarget.dataset.name}`);
  };

  return (
    <S.Base>
      <S.ButtonList>
        {DUMMY_DATA.map((item) => (
          <S.StyledRipples key={item.id}>
            <S.ButtonWrapper
              onClick={handleOnClick}
              data-name={item.name}>
              <S.Button>{item.name}</S.Button>
            </S.ButtonWrapper>
          </S.StyledRipples>
        ))}
      </S.ButtonList>
    </S.Base>
  );
};

export default PageButtonPannel;
