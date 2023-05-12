import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './index'


export default function Feed() {
    return (
        <Stack
            sx={{
                flexDirection: { sx: "column", md: "row" },
            }}
        >
            <Box sx={{
                height: { sx: 'auto', md: '92vh' },
                borderRight: '1px solid #E2E2E2',
                px: { sx: 0, md: 2 }
            }}>
                <Sidebar />
                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{
                        mt: 1.5,
                        color: 'gray'
                    }}
                >
                    Made with 💙 by <a href="https://github.com/fifolio" target="_blank">fifolio</a>
                </Typography>
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
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{
                        color: '#2d3436'
                    }}
                >
                    New
                    <span
                        style={{
                            marginLeft: '8px',
                            color: '#00cec9'
                        }}
                    >
                        clips
                    </span>
                </Typography>

                <Videos />
            </Box>
        </Stack >
    )
}
