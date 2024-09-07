import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
  },
  reducers: {
    ChangeId: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.id = action.payload
      },
    // decrement: (state) => {
    //   state.value -= 1
    // },
  },
})
// Action creators are generated for each case reducer function
export const { ChangeId } = userSlice.actions

export const selectId = (state) => state.user.id

export default userSlice.reducer