import AppHeader from "./AppHeader";
import AppNavigation from "./AppNavigation/AppNavigation";
import AppBody from "./AppBody";

export const lessLayout = (page) => {
  return page;
};

export const webLayout = (page) => {
  return (
    <>
      <AppHeader />
      <AppNavigation />
      <AppBody>{page}</AppBody>
    </>
  );
};

export const mobileLayout = (page) => {
  return page;
};
