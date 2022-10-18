import {newsTypes} from "../../components/ShowNews";

const hasSavedNews = !!window.localStorage.getItem('savedNews');
const savedNews: newsTypes[] = hasSavedNews ? JSON.parse(window.localStorage.getItem('savedNews') as string) : [];
const saveNews = (items) => {
    window.localStorage.setItem('savedNews', JSON.stringify(items));
}
const likedNewses = window.localStorage.getItem('likedNewses') ? JSON.parse(window.localStorage.getItem('likedNewses') as string) : [];
const updateLikedNewses = (items) => {
    window.localStorage.setItem('likedNewses', JSON.stringify(items));
}
const comments = window.localStorage.getItem('comments') ? JSON.parse(window.localStorage.getItem('comments') as string) : [];
const updateComment = (items) => {
    window.localStorage.setItem('comments', JSON.stringify(items));
}


export {hasSavedNews, savedNews, saveNews, likedNewses , updateLikedNewses , updateComment , comments}
