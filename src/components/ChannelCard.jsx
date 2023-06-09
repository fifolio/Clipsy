import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

export default function ChannelCard({ channelDetail }) {
    return (

        <Card
            sx={{
                display: 'flex',
                margin: 'auto',
                justifyContent: 'center',
                height: '325px',
                background: 'white'
            }}
        >

            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '100%',
                            width: '150px',
                            height: '150px',
                            mx: 'auto',
                            mt: 9,
                            mb: 1,
                            // border: '1px solid #e3e3e3'
                        }}
                    />

                    <Typography
                        variant="h6"
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        {channelDetail?.snippet?.title}
                        <CheckCircle
                            sx={{
                                fontSize: 14,
                                color: 'gray',
                                ml: '5px'
                            }}
                        />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Card>
    )
}
