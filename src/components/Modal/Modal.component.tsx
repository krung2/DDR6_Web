import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import './Modal.component.scss';

interface ModalComponentProps {

  setIsModalOpen: Dispatch<SetStateAction<boolean>>;

  generationGroup: {
    generation: string,
    setGeneration: Dispatch<SetStateAction<string>>,
  }

  nickNameGroup: {
    nickName: string,
    setNickName: Dispatch<SetStateAction<string>>,
  }

  requestUser: () => void;
}

export const ModalComponent = ({
  setIsModalOpen,
  generationGroup,
  nickNameGroup,
  requestUser,
}: ModalComponentProps): JSX.Element => {
  const { setGeneration } = generationGroup;
  const { nickName, setNickName } = nickNameGroup;

  return (
    <>
      <div className='modal' />

      <div className='modal-container'>
        <div className='modal-container-close' onClick={() => setIsModalOpen(false)}>
          x
        </div>

        <div className='modal-container-dropbox'>
          기수를 선택해주세요 <br />
          <select className='modal-container-dropbox-box' onChange={(e) => setGeneration(e.target.value)}>
            <option selected disabled hidden>기수를 선택해주세요</option>
            <option value='1기'>1기</option>
            <option value='2기'>2기</option>
            <option value='3기'>3기</option>
            <option value='4기'>4기</option>
            <option value='5기'>5기</option>
            <option value='6기'>6기</option>
          </select>
        </div>

        <div className='modal-container-dropbox'>
          닉네임을 입력해주세요  <br />
          <input type="text" placeholder='R6 닉네임이름을 입력해주세요' value={nickName} onChange={
            (e: ChangeEvent<HTMLInputElement>) => setNickName(e.target.value)
          } className='modal-container-dropbox-box'
          />
        </div>

        <div className='modal-containter-button' onClick={() => requestUser()}>
          등록
        </div>
      </div>
    </>
  )
}