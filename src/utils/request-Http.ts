import { RequestData, CharacterDetail } from "../types/fetch-types";

const requestHttp = async (req: RequestData) => {
  const res = await fetch(req.url, {
    method: req.method,
    headers: req.headers,
    body: req.body
  });

  const data = await res.json();
  console.log(data, 'http');
  return data;
};

export default requestHttp;