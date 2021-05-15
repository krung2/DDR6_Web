/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { MainComponent } from "../components/Main.component"
import { UserComponent } from "../components/User/User.component";
import GroupingState from "../libs/groupingState.lib";
import sweetAlerLib from "../libs/sweetAler.lib";
import { useStores } from "../libs/useStores.lib"
import { DataEntity } from "../stores/Main/MainStore";

export const MainContainer = (): JSX.Element => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [generation, setGeneration] = useState<string>();
  const [nickName, setNickName] = useState<string>();

  const { stores } = useStores();
  const {
    users,
    hadleGetUser,
  } = stores.MainStore;

  const requestAddUser: () => Promise<void> = useCallback(async () => {

    // const token: string = await

    if (generation === undefined) {

      sweetAlerLib.Toast('warning', '기수를 선택해주세요');
      return;
    }

    if (nickName === undefined || nickName === '') {

      sweetAlerLib.Toast('warning', '닉네임을 선택해주세요');
      return;
    }

    setGeneration(undefined);
    setNickName(undefined);
    setIsModalOpen(false);

  }, [generation, nickName, setIsLoading])

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
        modalOpenGroup={GroupingState('isModalOpen', isModalOpen, setIsModalOpen)}
        generationGroup={GroupingState('generation', generation, setGeneration)}
        nickNameGroup={GroupingState('nickName', nickName, setNickName)}
        userInfo={userInfo}
        requestUser={requestAddUser}
      />
    </>
  )
}