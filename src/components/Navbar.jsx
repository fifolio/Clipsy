import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import { SearchBar } from './index'

export default function Navbar() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{
                position: 'sticky',
                top: '0',
                justifyContent: 'space-between'
            }}
        >
            <Link
                to='/'
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <img src={logo} alt="logo" height={65} style={{ marginLeft: '20px' }} />
            </Link>
            <SearchBar />
        </Stack>
    )
}
