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
                    background: 'linear-gradient(90deg, rgba(1, 238, 147, 1) 0%, rgba(206, 3, 284, 1) 100%, rgba(0,212,255,1) 100%)',
                    zIndex: 10,
                    height: '300px'
                }}>
                    <ChannelCard channelDetail={channelDetail} />
                </div>
            </Box>
            <Box p={2} display="flex">
                <Box sx={{ mr: { sm: '100px' } }}>
                    <Videos videos={videos} />
                </Box>
            </Box>
        </Box>
    )
}
