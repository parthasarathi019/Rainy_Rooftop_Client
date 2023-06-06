import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useMenu = () => {
    // const [MenuS, SetMenuS] = useState([])
    // const [loading, Setloading] = useState(true)
   

    // useEffect(() => {
    //     fetch(`http://localhost:11000/rooftop_menu`)

    //         .then(res => res.json())
    //         .then((data) =>  {
    //             SetMenuS(data);
    //             Setloading(false);
    //         })
    // }, [])
    // console.log(MenuS);
    const {data: MenuS = [] , isLoading: loading , refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:11000/rooftop_menu')
            return res.json()
        }

    })
    return [MenuS , loading , refetch]
}

export default useMenu;