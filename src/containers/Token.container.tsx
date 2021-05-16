/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router"
import { useStores } from "../libs/useStores.lib";

export const TokenContainer = (): JSX.Element => {

  const useQuery = () => {

    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

  const { stores } = useStores();
  const {
    handleToken,
  } = stores.TokenStore;

  const request = useCallback(async () => {

    const code = String(query.get('code'));

    if (code === null) {
      window.location.replace('/');
    }

    try {
      const token: string = await handleToken(code);

      await localStorage.setItem('access-token', token);

      window.location.replace('/');


    } catch (err) {
      window.location.replace('/');
    }
  }, [])

  useEffect(() => {
    request()
  }, [request])

  return (
    <>
    </>
  )
}