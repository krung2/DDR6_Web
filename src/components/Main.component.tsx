import { Dispatch, SetStateAction } from "react"
import { HeaderComponent } from "./Header/Header.component"
import { ModalComponent } from "./Modal/Modal.component";
import { NavComopnent } from "./Nav/Nav.component"

interface MainComponentProps {

  isLogin: boolean;

  modalOpenGroup: {
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  }

  userInfo: JSX.Element[];

}

export const MainComponent = ({
  isLogin,
  modalOpenGroup,
  userInfo,
}: MainComponentProps): JSX.Element => {
  const { isModalOpen } = modalOpenGroup;

  return (
    <>
      {isModalOpen ? <ModalComponent /> : null}
      <HeaderComponent />
      <NavComopnent
        isLogin={isLogin}
        modalOpenGroup={modalOpenGroup}
      />
      {userInfo}
    </>
  )
}