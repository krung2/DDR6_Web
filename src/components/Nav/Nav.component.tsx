import { Dispatch, SetStateAction } from 'react';
import './Nav.comopnent.scss';

interface NavComopnentProps {

  isLogin: boolean;

  modalOpenGroup: {
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  }

  logout: () => void;
}

export const NavComopnent = ({
  isLogin,
  modalOpenGroup,
  logout,
}: NavComopnentProps): JSX.Element => {
  const { setIsModalOpen } = modalOpenGroup;

  const url =
    'http://dauth.b1nd.com/login?clientId=cd186f1597ce4365aa4067379ba91415fb75b926fb0b46bab1f247b4877cb9fb&redirectUrl=http://localhost:3000/redirect';

  return (
    <>
      <div className='navButtons'>

        {isLogin
          ? <>
            <div className='navButtons-login' onClick={() => logout()}>
              로그아웃
            </div>
            <div className='navButtons-login' onClick={() => setIsModalOpen(true)} >
              등록
            </div>

          </>
          : <a href={url}>
            <div className='navButtons-login'>
              로그인
            </div>

          </a>
        }

      </div>

      <div className='navContainer'>
        <div className='navContainer-profile'>
          프로필
        </div>

        <div className='navContainer-name'>
          이름(기수)
        </div>

        <div className='navContainer-level'>
          레벨
        </div>

        <div className='navContainer-rank'>
          랭크
        </div>

        <div className='navContainer-KD'>
          KD(킬/데스)
        </div>

        <div className='navContainer-WL'>
          WL (승률)
        </div>

      </div>
    </>
  )
}