import { useEffect, useState } from "react";

const useMyQuery = (req) => {
  const [data, setData] = useState({ error: "", loading: false, data: null });

  useEffect(() => {
    console.log(req.id);
    fetch(`https://d1s1rehmg7ei44.cloudfront.net/api/v2/pokemon/${req.id}/`)
      .then((res) => res.json())
      .then((data) => {
        setData({ loading: false, data: data, error: "" });
      })
      .catch((error) => {
        setData({ loading: false, data: null, error });
      });
    return () => setData({ loading: true, data: null, error: "" });
  }, [req.id]);
  return { ...data };
};

export default useMyQuery;
