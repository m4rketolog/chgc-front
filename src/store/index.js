import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './slices/storageItem.js'

export default configureStore({
    reducer: {
        items: itemSlice,
    },
})