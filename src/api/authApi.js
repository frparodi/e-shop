export const postLogin = (email, password) => {
  console.log(email, password);
  if (email === 'frparodi@gmail.com' && password === '123123123') {
    return Promise.resolve({ status: 'ok', token: 'OIJF12124!$@142' });
  }
  return Promise.reject({ status: 'error', error: 'Usuario inválido' });
};
