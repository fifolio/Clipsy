import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Video } from './'
import { fetchFromApi } from '../utils/FetchFromApi'


export default function VideoDetail() {
    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <ReactPlayer />
                </Box>
            </Stack>
        </Box>
    )
}
