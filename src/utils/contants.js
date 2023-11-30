export const logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://occ-0-7344-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXiSx5gTw7PLPpjMyot50EzOt1tMNrDExYdWiAyiYjij4eDPnXAgs18yobZMrcQCf59msLjMmNya_vTc3qkJNDgyP0XnJ6M.png?r=b38";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const LOGIN_BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];
