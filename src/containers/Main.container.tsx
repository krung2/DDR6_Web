import { HeaderComponent } from "../components/Header/Header.component"
import { UserComponent } from "../components/User/User.component"

export const MainContainer = (): JSX.Element => {

  return (
    <>
      <HeaderComponent />
      <UserComponent />
    </>
  )
}