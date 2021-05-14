import './Nav.comopnent.scss';

export const NavComopnent = (): JSX.Element => {

  return (
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
  )
}