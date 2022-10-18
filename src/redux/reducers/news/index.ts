import {createSlice} from '@reduxjs/toolkit';
import {comments, likedNewses, updateComment, updateLikedNewses} from "../../../helpers/localStorage";

interface states {
    favorites: string[] | null,
    comments: { newsId: string, body: string }[] | null,
}

const initialState: states = {
    favorites: likedNewses,
    comments: comments
}
export const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            if (!state.favorites) {
                state.favorites = []
            }
            if (state.favorites.includes(action.payload)) {
                const index = state.favorites.indexOf(action.payload);
                state.favorites.splice(index, 1)
            } else {
                state.favorites.push(action.payload)
            }
            updateLikedNewses(state.favorites)
        },
        addComment: (state, action) => {

            if (!state.comments) {
                state.comments = []
            }
            state.comments.push(action.payload)
            updateComment(state.comments)
        },
        deleteComment: (state, action) => {
            if (state.comments) {
                const index = state.comments.findIndex(comment => comment.newsId === action.payload.newsId && comment.body === action.payload.body);
                state.comments.splice(index, 1)
                updateComment(state.comments)

            }
        },
        updateComment: (state, action) => {
            if (state.comments) {
                console.log("moimo")
                const index = state.comments.findIndex(comment => comment.newsId === action.payload.newsId && comment.body === action.payload.oldBody);
                state.comments[index].body = action.payload.newBody
                updateComment(state.comments)

            }
        }


    }
})

export const {reducer} = newsSlice;
export const select = (state) => state.news
export const actions = newsSlice.actions

