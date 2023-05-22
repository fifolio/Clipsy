import { useState, useEffect } from 'react'
// import axios from 'axios'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './index'
import { fetchFromApi } from '../utils/FetchFromApi'
import Loading from './Loading'

export default function Feed() {

    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))

    }, [selectedCategory])

    return (
        <Stack
            sx={{
                flexDirection: {
                    sx: "column",
                    md: "row",
                },
                marginTop: '60px',
                paddingTop: '15px'
            }}
        >
            <Box sx={{
                height: { sx: 'auto', md: '100%' },
                borderRight: '1px solid #E2E2E2',
                // px: { sx: 0, md: 2 }
            }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                {/* <Typography
                    className="copyright"
                    variant="body2"
                    sx={{
                        mt: 1.5,
                        color: 'gray'
                    }}
                >
                    Made with 💙 by <a href="https://github.com/fifolio" target="_blank">fifolio</a>
                </Typography> */}
            </Box>

            <Box
                mt={'-10px'}
                p={2}
                sx={{
                    overflowY: 'auto',
                    height: '92vh',
                    flex: 2
                }}
            >
                {/* <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{
                        color: '#2d3436'
                    }}
                >
                    {selectedCategory}
                    <span
                        style={{
                            marginLeft: '8px',
                            color: '#00cec9'
                        }}
                    >
                        clips
                    </span>
                </Typography> */}

                {(!videos) ? <Loading /> : ''}
                <Videos videos={videos} />
            </Box>
        </Stack >
    )
}
