import React, {FC} from 'react';
import {IconButton} from "@mui/material";
import {AiFillHeart} from "react-icons/ai";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {actions, select} from "../../redux/reducers/news";

const LikeButton: FC<{ id: string }> = ({id}) => {
    const {favorites} = useAppSelector(select)
    const dispatch = useAppDispatch()
    const {toggleFavorite} = actions
    let Icon;
    if (favorites && favorites.includes(id)) {
        Icon = <AiFillHeart color={"red"} size={30}/>
    } else {
        Icon = <AiFillHeart size={30}/>
    }
    const clickHandler = () => {
        dispatch(toggleFavorite(id))
    }
    return (
        <IconButton onClick={clickHandler}>
            {Icon}
        </IconButton>
    );
};

export default LikeButton;
