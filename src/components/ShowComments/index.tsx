import React, {FC, useRef, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography} from "@mui/material";
import {BsFillPenFill} from "react-icons/bs";
import {AiOutlineDelete} from "react-icons/ai";
import {useAppDispatch} from "../../redux/hooks";
import {actions} from "../../redux/reducers/news";
import {IoCloseCircleOutline} from "react-icons/io5";
import {toast} from "react-toastify";

const ShowComments: FC<{ comments: { newsId: string, body: string }[] | null, }> = ({comments}) => {

    const dispatch = useAppDispatch();
    const [CommentEdit, setCommentEdit] = useState({
        isOpen: false,
    });
    const {deleteComment, updateComment} = actions;
    const commentRef = useRef<HTMLInputElement>(null);

    if (!comments) {
        return <div>No comments yet, Be the first one!</div>
    }
    const deleteHandler = (id) => {
        dispatch(deleteComment(comments[id]))
        toast("Comment Deleted Successfully", {
            type: "info"
        })
    }
    const updateHandler = (id) => {
        dispatch(updateComment({newsId: id, newBody: commentRef.current?.value, oldBody: comments.filter((item) => item.newsId === id)[0].body}))
        toast("Comment Updated Successfully", {
            type: "info"
        })
    }
    return (
        <div>
            {comments.map((item, index) => {
                return <Typography variant={"body1"} key={index}>
                    <IconButton>
                        <AiOutlineDelete onClick={() => {
                            deleteHandler(comments?.indexOf(item))
                        }} size={20}/>
                    </IconButton>
                    <IconButton onClick={() => setCommentEdit({isOpen: true})}>
                        <BsFillPenFill size={20}/>

                    </IconButton>

                    {item.body}
                    <Dialog open={CommentEdit.isOpen} onClose={() => {
                        setCommentEdit({isOpen: false})
                    }
                    }>
                        <DialogActions>
                            <IconButton onClick={() => setCommentEdit({isOpen: false})}>
                                <IoCloseCircleOutline size={20}/>
                            </IconButton>
                        </DialogActions>
                        <DialogTitle>Edit Comment</DialogTitle>

                        <DialogContent>
                            <TextField
                                defaultValue={item.body}
                                inputRef={commentRef}
                                variant={"outlined"}
                                placeholder={"write down your ideas!"}
                                label={"comment"}
                                multiline
                                rows={4}>
                            </TextField>
                            <Button onClick={() => updateHandler(item.newsId)} variant={"contained"} color={"primary"}>Edit</Button>
                        </DialogContent>
                    </Dialog>

                </Typography>
            })}
        </div>
    );
};

export default ShowComments;
