import { Dispatch, SetStateAction } from "react"
import { generationType } from "../containers/Main.container";
import { HeaderComponent } from "./Header/Header.component"
import { ModalComponent } from "./Modal/Modal.component";
import { NavComopnent } from "./Nav/Nav.component"

interface MainComponentProps {

  isLogin: boolean;
  isRequest: boolean;

  checkGenerationGroup: {
    isModalOpen: generationType,
    setIsModalOpen: Dispatch<SetStateAction<generationType>>,
  }

  modalOpenGroup: {
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  }

  generationGroup: {
    generation: string,
    setGeneration: Dispatch<SetStateAction<string>>,
  }

  nameGroup: {
    name: string,
    setName: Dispatch<SetStateAction<string>>,
  }

  nickNameGroup: {
    nickName: string,
    setNickName: Dispatch<SetStateAction<string>>,
  }

  userInfo: JSX.Element[];

  requestUser: () => void;
  logout: () => void;
}

export const MainComponent = ({
  isLogin,
  isRequest,
  modalOpenGroup,
  generationGroup,
  nameGroup,
  nickNameGroup,
  userInfo,
  requestUser,
  logout,
}: MainComponentProps): JSX.Element => {
  const { isModalOpen, setIsModalOpen } = modalOpenGroup;

  return (
    <>
      {isModalOpen ? <ModalComponent
        isRequest={isRequest}
        setIsModalOpen={setIsModalOpen}
        generationGroup={generationGroup}
        nameGroup={nameGroup}
        nickNameGroup={nickNameGroup}
        requestUser={requestUser}
      /> : null}
      <HeaderComponent />
      <NavComopnent
        isLogin={isLogin}
        modalOpenGroup={modalOpenGroup}
        logout={logout}
      />
      {userInfo}
    </>
  )
}