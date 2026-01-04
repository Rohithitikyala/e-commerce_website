const API = "http://localhost:5000";
export const api = async (url, method, data) => {
  const res = await fetch(API + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    },
    body: data ? JSON.stringify(data) : null
  });
  return res.json();
};