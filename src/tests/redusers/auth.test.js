import authReducer from '../../reducers/auth'

test('should set state correctly on login', () => {
  const uid = 'qw4253rwt4tg'
  const action = {
    type: 'LOGIN',
    uid
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe(uid)
})

test('should set state correctly on login', () => {
  const uid = 'qw4253rwt4tg'
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({uid}, action)
  expect(state).toEqual({})
})