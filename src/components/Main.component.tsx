import { Dispatch, SetStateAction } from "react"
import { HeaderComponent } from "./Header/Header.component"
import { NavComopnent } from "./Nav/Nav.component"

interface MainComponentProps {

  isLogin: boolean;

  modalOpenGroup: {
    isModalOpen: boolean,
    setIsMoalOpen: Dispatch<SetStateAction<boolean>>,
  }

  userInfo: JSX.Element[];

}

export const MainComponent = ({
  isLogin,
  modalOpenGroup,
  userInfo,
}: MainComponentProps): JSX.Element => {

  return (
    <>
      <HeaderComponent />
      <NavComopnent
        isLogin={isLogin}
        modalOpenGroup={modalOpenGroup}
      />
      {userInfo}
    </>
  )
}