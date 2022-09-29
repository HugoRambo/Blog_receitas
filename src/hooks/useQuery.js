import { useLocation } from "react-router-dom";
import { useMemo } from "react";

//performace da aplicação.

//Esse pqueno hook, vai servir para pegar parametro da nossa URL
export function useQuery(){
    const {search} =useLocation()
    return useMemo(() => new URLSearchParams(search), [search] )
}