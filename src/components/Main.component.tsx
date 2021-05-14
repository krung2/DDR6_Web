import { HeaderComponent } from "./Header/Header.component"
import { NavComopnent } from "./Nav/Nav.component"
import { UserComponent } from "./User/User.component"


export const MainComponent = (): JSX.Element => {

  return (
    <>
      <HeaderComponent />
      <NavComopnent />
      <UserComponent />
    </>
  )
}