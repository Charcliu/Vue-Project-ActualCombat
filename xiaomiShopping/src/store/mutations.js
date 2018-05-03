export const addUser = (state, payload) => {
    state.userInfo.push({
        userName : payload.userName,
        passWord : payload.passWord
    })
}