import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './index'
import { fetchFromApi } from '../utils/FetchFromApi';


export default function ChannelDetail() {
    const { id } = useParams();

    const [channelDetail, setChannelDetail] = useState()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

            setChannelDetail(data?.items[0]);


            const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

            setVideos(videosData?.items);
        }

        fetchResults();
    }, [id]);


    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    height: '300px'
                }}>
                    <ChannelCard channelDetail={channelDetail} />
                </div>
            </Box>
            <Box
                display="flex"
                style={{
                    margin: '45px 0 0 0'
                }}
            >
                <Box>
                    <Videos videos={videos} />
                </Box>
            </Box>
        </Box>
    )
}
