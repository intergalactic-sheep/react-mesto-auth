// export const BASE_URL = "https://auth.nomoreparties.co";

// function handleResponse(res) {
//   if (!res.ok) {
//     return Promise.reject(`Error: ${res.status}`);
//   }
//   return res.json();
// }

// export function register({ email, password }) {
//   return fetch(`${BASE_URL}/signup`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   })
//     .then(handleResponse)
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// }

// export function authorize({ email, password }) {
//   return fetch(`${BASE_URL}/signin`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   })
//     .then(handleResponse)
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// }

// export function checkToken(token) {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then(handleResponse)
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// }
