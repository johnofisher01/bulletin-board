import { createSlice } from "@reduxjs/toolkit" ;

const initialState = [
    { id: '1', title: 'Learning Essentials', content: 'Its great to use' },
    { id: '2', title: 'Slice Life', content: 'Bigger slices for bigger lifage' }
]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer