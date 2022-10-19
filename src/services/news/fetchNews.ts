import useSWR from 'swr'
import {fetcher} from "../../helpers/fetcher";
import {savedNews, saveNews} from "../../helpers/localStorage";
import {isOffline} from "../../helpers/network";

export const FetchNews = () => {
    const {data, error} = useSWR(`https://${process.env.REACT_APP_NEWS_SERVER}`, fetcher, {
        refreshInterval: 30000,
        revalidateOnReconnect: true,
        errorRetryInterval: 30000,
    })

    if (isOffline) {
        return {
            isLoading: false,
            hasError: false,
            data: {
                items: savedNews
            }
        }
    }



    if (!!data?.items) {
        saveNews(data.items)
    }
    return {
        data,
        isLoading: !error && !data,
        hasError: !data && error,
    }
}
