import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice'


const Store = configureStore({

  reducer : {
    user : UserSlice
  }
})

export default Store