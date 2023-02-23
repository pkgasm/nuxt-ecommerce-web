import cookies from "js-cookie";

export const getHeaders = () => {
  const token = cookies.get("auth.token");
  return {
    Authorization: token,
  };
};
