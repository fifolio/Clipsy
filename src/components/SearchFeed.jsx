import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Videos } from './index'
import { fetchFromApi } from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

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
            {(!videos) ? (<Loading />) : ''}

            <Videos videos={videos} />
        </Box >
    )
}
