import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Videos } from './index'
import { fetchFromApi } from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'

export default function SearchFeed() {

    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams()

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))

    }, [searchTerm])

    return (
        <Box
            mt={'65px'}
            p={2}
            sx={{
                overflowY: 'auto',
                height: '92vh',
                flex: 2
            }
            }
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

            < Videos videos={videos} />
        </Box >
    )
}
