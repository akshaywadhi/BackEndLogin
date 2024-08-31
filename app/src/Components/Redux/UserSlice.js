import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
  name : 'user',
  initialState : {
    users : []
  },
  reducers : {
    getUser : (state,action) => {

      state.users.push(action.payload)
    }
  }
})

export const {getUser} = UserSlice.actions
export default UserSlice.reducer