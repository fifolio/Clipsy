import { Stack, Box } from '@mui/material'
import { VideoCard } from './index'

export default function Videos({ videos, direction }) {

    if (!videos) return ''

    return (
        <Stack
            direction={direction || 'row'}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
        >


            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                </Box>
            ))}

        </Stack>
    )
}
