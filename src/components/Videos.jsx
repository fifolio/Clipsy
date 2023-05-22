import { Stack, Box } from '@mui/material'
import { VideoCard } from './index'
// import Loading from './Loading';

export default function Videos({ videos, direction }) {


    return (
        <Stack
            direction={direction || 'row'}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
        >

            {/* {(!videos?.length) ? (<Loading />) : ''} */}

            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                </Box>
            ))}

        </Stack>
    )
}
