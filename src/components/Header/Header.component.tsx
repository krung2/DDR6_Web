import './Header.component.scss'

export const HeaderComponent = (): JSX.Element => {

  return (
    <div className='header'>
      <div className='header-title'>
        <div className='header-title-big'>
          DDR6
        </div>
        <div className='header-title-small'>
          Dgsw Dictionary R6S <br />
          대구소프트웨어고등학교의 레인보우 식스 시즈 유저 정보를 기록합니다
        </div>
      </div>
    </div>
  )
}