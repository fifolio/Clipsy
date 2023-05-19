import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './index'

export default function Videos({ videos, direction }) {

    if (!videos?.length) return 'Loading...'

    return (
        <Stack
            direction={direction || 'row'}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
        >
            {/* <div style={{ display: 'block', width: '100%' }}>
                {videos.map((item, index) => (
                    <Box key={index}>
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                ))}
            </div> */}

            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                </Box>
            ))}
        </Stack>
    )
}
