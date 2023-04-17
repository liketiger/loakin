import { RequestData, CharacterDetail } from "../types/fetch-types";

const requestHttp = async (req: RequestData, getData: (list: CharacterDetail[]) => void) => {
  const res = await fetch(req.url, {
    method: req.method,
    headers: req.headers,
    body: req.body
  });

  const data = await res.json();
  getData(data);
};

export default requestHttp;