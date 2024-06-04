import { useEffect, useState } from "react";
import useFirestore from "../firebase/useFirestore";

function useBoard(){
    const {readFirestoreWithSort} = useFirestore();
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        getBoardList();
        // eslint-disable-next-line
    }, [])

    const getBoardList = async() => {
        const board_list = await readFirestoreWithSort("Inquiry", {name:"register_at", direction:"desc"}).then(res => {
            console.log(res.size);
            const list = [];
            for(let i = 0; i < res.size; i++){
                list.push({id:res.docs[i].id, ...res.docs[i].data()});
            }
            return list;
        })
        setBoardList(board_list);
    }

    return {boardList}
}

export default useBoard;