/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { MainComponent } from "../components/Main.component"
import { UserComponent } from "../components/User/User.component";
import GroupingState from "../libs/groupingState.lib";
import sweetAlerLib from "../libs/sweetAler.lib";
import { useStores } from "../libs/useStores.lib"
import { DataEntity } from "../stores/Main/MainStore";

export type generationType = 'all' | '6기' | '5기' | '4기' | '3기' | '2기' | '1기';

export const MainContainer = (): JSX.Element => {


  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRequest, setIsRequest] = useState<boolean>(false);

  const [checkGeneration, setCheckGeneration] = useState<generationType>('all');
  const [generation, setGeneration] = useState<string>();
  const [name, setName] = useState<string>();
  const [nickName, setNickName] = useState<string>();

  const { stores } = useStores();
  const {
    users,
    hadleGetUser,
    handleAddUser,
    handleAddUserNot,
  } = stores.MainStore;

  const logout: () => Promise<void> = useCallback(async () => {

    await localStorage.removeItem('access-token');

    setIsLogin(false);
  }, [])

  const checkLogin: () => Promise<void> = useCallback(async () => {

    const token: string | null = await localStorage.getItem('access-token');

    if (token === null) {

      setIsLogin(false);
      return;
    }

    setIsLogin(true);
  }, [setIsLogin])

  const requestAddUser: () => Promise<void> = useCallback(async () => {

    // if (isRequest === true) {

    //   return;
    // }

    // const token: string | null = await localStorage.getItem('access-token');

    // if (token === null) {

    //   sweetAlerLib.Toast('error', '토큰이 없습니다');
    //   return;
    // }

    if (generation === undefined) {

      sweetAlerLib.Toast('warning', '기수를 선택해주세요');
      return;
    }

    if (name === undefined || name === '') {

      sweetAlerLib.Toast('warning', '이름을 입력해주세요');
      return;
    }

    if (nickName === undefined || nickName === '') {

      sweetAlerLib.Toast('warning', '닉네임을 입력해주세요');
      return;
    }

    // const data = {
    //   generation,
    //   userName: nickName,
    // }

    const data = {
      generation,
      name,
      userName: nickName,
    }

    try {

      setIsRequest(true);

      // await handleAddUser(data, token);
      await handleAddUserNot(data);

      setIsRequest(false);
    } catch (err) {

      if (err.response) {

        setIsRequest(false);

        switch (err.response.status) {

          case 401:
            sweetAlerLib.Toast('warning', '로그인 후 다시 이용해주세요');
            setIsModalOpen(true);
            return;

          case 403:
            sweetAlerLib.Toast('warning', '이미 가입되어 있습니다');
            setIsModalOpen(true);
            return;

          case 410:
            sweetAlerLib.Toast('warning', '잘못된 닉네임입니다');
            setIsModalOpen(true);
            return;

          default:
            sweetAlerLib.Toast('warning', '서버 오류');
            return;

        }
      } else {

        sweetAlerLib.Toast('warning', '연결 오류');
        return;

      }
    }

    sweetAlerLib.Toast('success', '등록 성공');

    setGeneration(undefined);
    setNickName(undefined);
    setName(undefined);
    setIsModalOpen(false);

    window.location.reload();

  }, [generation, nickName, handleAddUserNot, name])

  const request: () => Promise<void> = useCallback(async () => {

    setIsLoading(true);

    try {

      await checkLogin();
      await hadleGetUser();

      setIsLoading(false);
    } catch (err) {

    }
  }, [hadleGetUser, checkLogin])

  useEffect(() => {
    request();
  }, [request])

  const filterItem = (item: DataEntity) => {

    if (checkGeneration === 'all') {

      return true;
    }

    if (checkGeneration === item.generation) {

      return true;
    }

    return false;
  }

  const userInfo: JSX.Element[] = users
    .filter(filterItem)
    .map((data: DataEntity) => {
      const {
        uniqueId,
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
      } = data;

      return (
        <UserComponent
          key={uniqueId}
          uplayId={uplayId}
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
        checkGenerationGroup={GroupingState('checkGeneration', checkGeneration, setCheckGeneration)}
        modalOpenGroup={GroupingState('isModalOpen', isModalOpen, setIsModalOpen)}
        generationGroup={GroupingState('generation', generation, setGeneration)}
        nameGroup={GroupingState('name', name, setName)}
        nickNameGroup={GroupingState('nickName', nickName, setNickName)}
        userInfo={userInfo}
        requestUser={requestAddUser}
        logout={logout}
      />
    </>
  )
}