import useSWR from 'swr'
import {fetcher} from "../../helpers/fetcher";
import {saveNews} from "../../helpers/localStorage";

export const FetchNews = () => {
    const {data, error} = useSWR(`http://${process.env.REACT_APP_NEWS_SERVER}`, fetcher, {
        refreshInterval: 30000,
        revalidateOnReconnect: true,
        errorRetryInterval: 30000,
    })

    if (!!data?.items) {
        saveNews(data.items)
    }
    return {
        data,
        isLoading: !error && !data,
        hasError: !data && error,
    }
}
