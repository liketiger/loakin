import { RequestData } from "../types/fetch-types";

const requestHttp = async (req: RequestData) => {
  try {
    const res = await fetch(req.url, {
      method: req.method,
      headers: req.headers,
      body: req.body
    });

    const data = await res.json();

    if (data.status === 'fail') throw Error(data.message);

    return data;
  } catch (e) {
    alert(e);
    return false;
  }
};

export default requestHttp;