import './User.component.scss';

interface UserComponentProps {
  uplayId: string
  generation: string;
  name: string;
  userName: string;
  profileImage: string;
  level: number;
  rank: string;
  rankImage: string;
  wl: number;
  wins: number;
  losses: number;
  kd: number;
}

export const UserComponent = ({
  uplayId,
  generation,
  name,
  userName,
  profileImage,
  level,
  rank,
  rankImage,
  wl,
  wins,
  losses,
  kd
}: UserComponentProps) => {

  return (
    <div className='hover' >
      <div className='userContainer' onClick={() => window.open(`https://r6stats.com/stats/${uplayId}`)}>
        <div className='userContainer-img' >
          <img src={profileImage} className='userCenter-profile' alt='profile' />
        </div>

        <div className='userContainer-name'>
          {userName}
        </div>

        <div className='userContainer-generation' >
          {name}({generation})
      </div>

        <div className='userContainer-level' >
          Lv.{level}
        </div>

        <div className='userContainer-rank' >
          <img src={rankImage} className='userContainer-rank-img' alt='rank' />
        </div>

        <div className='usercontainer-rank-text' >
          {rank}
        </div>

        <div className='usercontainer-kd' >
          KD : {kd}
        </div>

        <div className='usercontainer-con' >
          <div className='usercontainer-con-graph'>
            <div className='usercontainer-con-graph-okay' >
              {wins}
            </div>
            <div className='usercontainer-con-graph-okay-loose'>
              {losses}
            </div>
          </div>
        </div>

        <div>
          {wl}%
      </div>
      </div>
    </div>
  )
}