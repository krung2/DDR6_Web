/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { MainComponent } from "../components/Main.component"
import { UserComponent } from "../components/User/User.component";
import GroupingState from "../libs/groupingState.lib";
import { useStores } from "../libs/useStores.lib"
import { DataEntity } from "../stores/Main/MainStore";

export const MainContainer = (): JSX.Element => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { stores } = useStores();
  const {
    users,
    hadleGetUser,
  } = stores.MainStore;


  const request: () => Promise<void> = useCallback(async () => {

    setIsLoading(true);

    try {

      await hadleGetUser();

      setIsLoading(false);
    } catch (err) {

    }
  }, [hadleGetUser])

  useEffect(() => {
    request();
  }, [hadleGetUser, users, request])

  const userInfo: JSX.Element[] = users.map((data: DataEntity) => {
    const {
      uniqueId,
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
    } = data;

    return (
      <UserComponent
        key={uniqueId}
        generation={generation}
        name={name}
        userName={userName}
        profileImage={profileImage}
        level={level}
        rank={rank}
        rankImage={rankImage}
        wl={wl}
        wins={wins}
        losses={losses}
        kd={kd}
      />
    )
  })

  return (
    <>
      <MainComponent
        isLogin={isLogin}
        modalOpenGroup={GroupingState('modalOpen', isModalOpen, setIsModalOpen)}
        userInfo={userInfo}
      />
    </>
  )
}