import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const selectedCategory = "Home";

export default function Sidebar() {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    key={category.name}
                    style={{
                        background: category.name === selectedCategory && '#81ecec',
                        color: '#2d3436',
                    }}
                >
                    <span
                        style={{
                            marginRight: '25px',
                        }}
                    >{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}
