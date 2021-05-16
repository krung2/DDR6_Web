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
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRequest, setIsRequest] = useState<boolean>(false);

  const [generation, setGeneration] = useState<string>();
  const [nickName, setNickName] = useState<string>();

  const { stores } = useStores();
  const {
    users,
    hadleGetUser,
    handleAddUser
  } = stores.MainStore;

  const requestAddUser: () => Promise<void> = useCallback(async () => {

    const token: string | null = await localStorage.getItem('access-token');

    if (token === null) {

      sweetAlerLib.Toast('error', '토큰이 없습니다');
      return;
    }

    if (generation === undefined) {

      sweetAlerLib.Toast('warning', '기수를 선택해주세요');
      return;
    }

    if (nickName === undefined || nickName === '') {

      sweetAlerLib.Toast('warning', '닉네임을 선택해주세요');
      return;
    }

    const data = {
      generation,
      userName: nickName,
    }

    try {

      setIsRequest(true);

      await handleAddUser(data, token);

      setIsRequest(false);
    } catch (err) {

      sweetAlerLib.Toast('warning', '잘못된 닉네임 입니다');
      return;
    }

    sweetAlerLib.Toast('success', '등록 성공');

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
        isRequest={isRequest}
        modalOpenGroup={GroupingState('isModalOpen', isModalOpen, setIsModalOpen)}
        generationGroup={GroupingState('generation', generation, setGeneration)}
        nickNameGroup={GroupingState('nickName', nickName, setNickName)}
        userInfo={userInfo}
        requestUser={requestAddUser}
      />
    </>
  )
}