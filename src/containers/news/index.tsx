import React, {FC} from 'react';
import {FetchNews} from "../../services/news/fetchNews";
import ShowNews from "../../components/ShowNews";
import {Show} from 'react-haiku';
import {Stack} from '@mui/material';
import NetworkStatus from "../../components/NetworkStatus";


const News: FC = () => {
    const {isLoading, hasError, data} = FetchNews();
    let LatestItems;
    if (data) {
        LatestItems = data.items.slice(0, 5)
        console.log(LatestItems)
    }
    return (
        <>
            <NetworkStatus/>
            <Show>
                <Show.When isTrue={isLoading}>
                    <div>Loading...</div>
                </Show.When>
                <Show.When isTrue={hasError}>
                    <div>Something went wrong</div>
                </Show.When>
                <Show.Else>
                    <Stack justifyContent={"center"} direction={"row"} flexWrap={"wrap"} spacing={5}>
                        {

                            LatestItems && LatestItems.map((item: any, i) => {
                                return <ShowNews data={item} key={i}/>
                            })
                        }
                    </Stack>

                </Show.Else>
            </Show>
        </>

    );
};

export default News;
