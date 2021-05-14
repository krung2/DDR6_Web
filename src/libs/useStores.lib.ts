import { MobXProviderContext } from "mobx-react"
import { useContext } from "react"

export const useStores = () => {

  return useContext(MobXProviderContext);
}