import { HeaderComponent } from "./Header/Header.component"
import { UserComponent } from "./User/User.component"


export const MainComponent = (): JSX.Element => {

  return (
    <>
      <HeaderComponent />
      <div className='mainCenter' >
        <UserComponent />
      </div>
    </>
  )
}