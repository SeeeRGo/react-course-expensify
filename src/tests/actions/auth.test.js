import { login, logout } from "../../actions/auth";

test('should return correct action object for login', () => {
  const uid = 'a4q432r23tgs'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should return correct action object for logout', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})