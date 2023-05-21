import { Link } from 'react-router-dom'
import {
    Typography,
    Card,
    CardContent,
    CardMedia
} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle
} from '../utils/constants'

export default function VideoCard({
    video: {
        id: { videoId },
        snippet
    }
}) {

    return (
        <Card
            sx={{
                width: '358px',
                height: '290px'
            }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        height: 180
                    }}
                />
                <CardContent
                    sx={{
                        background: 'white',
                        height: '50px'
                    }}
                >
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                        >
                            {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}...
                        </Typography>
                    </Link>

                    <Link to={snippet?.channelId ? `/channel/${videoId}` : demoChannelUrl}>
                        <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            color="gray"
                        >
                            {snippet?.channelTitle || demoChannelTitle}...

                            <CheckCircle
                                sx={{
                                    fontSize: 12,
                                    color: 'gray',
                                    ml: '5px'
                                }}
                            />
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    )
}
