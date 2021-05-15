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

  generationGroup: {
    generation: string,
    setGeneration: Dispatch<SetStateAction<string>>,
  }

  nickNameGroup: {
    nickName: string,
    setNickName: Dispatch<SetStateAction<string>>,
  }

  userInfo: JSX.Element[];

}

export const MainComponent = ({
  isLogin,
  modalOpenGroup,
  generationGroup,
  nickNameGroup,
  userInfo,
}: MainComponentProps): JSX.Element => {
  const { isModalOpen, setIsModalOpen } = modalOpenGroup;

  return (
    <>
      {isModalOpen ? <ModalComponent setIsModalOpen={setIsModalOpen} generationGroup={generationGroup} nickNameGroup={nickNameGroup} /> : null}
      <HeaderComponent />
      <NavComopnent
        isLogin={isLogin}
        modalOpenGroup={modalOpenGroup}
      />
      {userInfo}
    </>
  )
}