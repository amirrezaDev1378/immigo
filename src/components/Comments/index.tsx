import React, {FC, useRef} from 'react';
import {Button, Stack, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {actions, select} from "../../redux/reducers/news";
import ShowComments from "../ShowComments";
import {toast} from "react-toastify";

const Comments: FC<{ id: string }> = ({id}) => {
    const commentRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const {comments} = useAppSelector(select)
    const postsComments = comments.filter((item) => item.newsId === id)
    const {addComment} = actions
    const clickHandler = () => {
        const comment = commentRef.current?.value;
        if (!!comments.filter((item: any) => item.body === comment).length) {
            toast("Duplicate comment", {type: "error"})
        }
        if (comment) {
            dispatch(addComment({newsId: id, body: comment}))
            commentRef.current.value = '';
            toast("Comment added successfully", {
                type: "success",
            })
        } else {
            toast("Please Enter a comment", {
                type: "error",
            })
        }
    }

    return (
        <Stack mt={5}>

            <TextField inputRef={commentRef} variant={"outlined"} placeholder={"write down your ideas!"} label={"comment"} multiline rows={4}/>
            <Button onClick={clickHandler} variant={"contained"} color={"primary"}>Send</Button>
            <ShowComments comments={postsComments}/>

        </Stack>
    );
};

export default Comments;
