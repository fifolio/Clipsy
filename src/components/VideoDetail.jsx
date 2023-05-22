import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Videos } from '.'
import { fetchFromApi } from '../utils/FetchFromApi'
import Loading from './Loading'


export default function VideoDetail() {

    const { id } = useParams();
    const [videoDetails, setVideoDetails] = useState(null)
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        fetchFromApi(`videos?part=snippet,statistic&id=${id}`)
            .then((data) =>
                setVideoDetails(data.items[0])
            )

        fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))
    }, [id])

    if (!videoDetails?.snippet) return 'Loading ...';

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;


    return (
        <Box minHeight="95vh" mt={'70px'}>

            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box
                    flex={1}
                    sx={{
                        width: '96.5%',
                    }}
                >
                    <ReactPlayer
                        className="react-player"
                        controls
                        url={`https://www.youtube.com/watch?v=${id}`}
                    />
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        p={2}
                    >
                        {title}
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        style={{
                            textTransform: 'capitalize'
                        }}
                    >
                        <Link to={`/channel/${channelId}`}>
                            <Typography
                                variant={{
                                    sm: 'subtitle1',
                                    md: 'h6',
                                }}
                                sx={{
                                    background: 'white',
                                    boxShadow: '0px 3px 5px rgba(0,0,0, .25)',
                                    padding: '10px',
                                    borderRadius: '15px',
                                    fontWeight: 'bold',
                                    ml: '15px'
                                }}
                            >
                                {channelTitle}
                                <CheckCircle
                                    sx={{
                                        fontSize: '12px',
                                        color: 'gray',
                                        ml: '5px'
                                    }}
                                />
                            </Typography>
                        </Link>
                        <Stack
                            direction="row"
                            gap="20px"
                            alignItems="center"
                            style={{
                                marginRight: '10px'
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    opacity: 0.7
                                }}>
                                {parseInt(viewCount).toLocaleString()} Views
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    opacity: 0.7
                                }}>
                                {parseInt(likeCount).toLocaleString()} Likes
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    px={2}
                    py={{
                        md: 1,
                        xs: 5
                    }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* {(!videoDetails?.snippet) ? (<Loading />) : ''} */}
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}
