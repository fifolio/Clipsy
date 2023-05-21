import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const selectedCategoryColor = 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(69,189,252,0.6642254313834909) 100%)';

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
                backgroundColor: 'white',
                width: '100%',
                // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                marginTop: '-5px',
                paddingTop: '5px'
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    key={category.name}
                    style={{
                        background: category.name === selectedCategory && `#dcdde1`,
                        color: '#2d3436',
                        marginLeft: '30px',
                        marginRight: '30px',
                    }}
                >
                    <span
                        style={{
                            marginRight: '25px',
                        }}
                    >{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))
            }
        </Stack >
    )
}
