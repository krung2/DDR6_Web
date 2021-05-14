import './User.component.scss';

export const UserComponent = () => {

  return (
    <div className='userContainer'>
      <div className='userContainer-img'>
        <img src='https://ubisoft-avatars.akamaized.net/909b47b7-57b7-46e3-ba78-f2971e06ae57/default_256_256.png' className='userCenter-profile' />
      </div>

      <div className='userContainer-name'>
        나는 민재
      </div>

      <div className='userContainer-generation' >
        손민재(5기)
      </div>

      <div className='userContainer-level' >
        Lv.1
      </div>

      <div className='userContainer-rank' >
        <img src='https://cdn.r6stats.com/seasons/ranks/unranked.svg' className='userContainer-rank-img' />
      </div>

      <div className='usercontainer-rank-text' >
        Unranked
      </div>

      <div className='usercontainer-kd' >
        KD : 0.75
      </div>

      <div className='usercontainer-con' >
        <div className='usercontainer-con-graph'>
          <div className='usercontainer-con-graph-okay' >
            321
          </div>
          <div className='usercontainer-con-graph-okay-loose'>
            348
          </div>
        </div>
      </div>

      <div>
        WL : 47%
      </div>
    </div>
  )
}