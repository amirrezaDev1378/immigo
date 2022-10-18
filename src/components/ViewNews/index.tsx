import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {savedNews} from "../../helpers/localStorage";
import {Button, Grid, Stack, Typography} from "@mui/material";
import {filterHtml} from "../../helpers/filterHtml";
import Comments from "../Comments";

const ViewNews: FC = () => {
    const {id} = useParams<{ id: string }>();
    const currentNews = savedNews.filter((item: any) => item.id === id)[0];
    if (!id || !currentNews) {
        return <div>Something went wrong</div>
    }
    const htmlData = filterHtml(currentNews.content_html)
    const date = new Date(currentNews.date_published).toDateString();

    return (
        <Grid flexDirection={"column"} container item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant={"h4"}>{currentNews.title}</Typography>
            <Typography variant={"body1"}>published at : {date}</Typography>
            <Typography variant={"body1"}>author : {currentNews.author.name}</Typography>

            <img src={currentNews.image} className="w-50" alt={currentNews.title}/>
            <div dangerouslySetInnerHTML={{__html: htmlData}}/>
            <Button variant={"contained"} color={"success"} href={currentNews.url}>View Original News</Button>

            <Comments id={id}/>
        </Grid>
    );
};

export default ViewNews;
