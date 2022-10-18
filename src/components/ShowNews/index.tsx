import {Button, Grid, Typography} from '@mui/material';
import React, {FC} from 'react';
import styles from "./styles.module.scss"
import {Link} from "react-router-dom";
import LikeButton from "../LikeButton";

export interface newsTypes {
    id: string;
    title: string;
    url: string;
    content_html: string;
    summary: string;
    image: string;
    date_published: string;
    author: any;
    tags: any;

}

interface Types {
    data: newsTypes
}


const ShowNews: FC<Types> = ({data}) => {
    const {id, title, url, content_html, summary, image, date_published, author, tags} = data;
    return (
        <Grid justifyContent={"center"}  container item md={3} className={styles.newsItem}>
            <LikeButton id={id} />

            <Typography variant={"h6"}>{title}</Typography>
            <div className={styles.image}>
                <img src={image} alt={title}/>
            </div>
            <Typography variant={"body1"}>{summary}</Typography>
            <Link to={`/news/${id}`}>
                <Button variant={"contained"} color={"success"}>
                    Read More
                </Button>
            </Link>

        </Grid>
    );
};

export default ShowNews;
