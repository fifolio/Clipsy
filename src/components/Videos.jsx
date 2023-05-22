import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './index'
import Loading from './Loading';

export default function Videos({ videos, direction }) {


    return (
        <Stack
            direction={direction || 'row'}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
        >

            {(!videos?.length) ? (<Loading />) : ''}


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
