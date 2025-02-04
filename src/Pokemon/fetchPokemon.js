export default ({ id }) =>
  fetch(`https://d1s1rehmg7ei44.cloudfront.net/api/v2/pokemon/${id}/`).then(
    res => res.json()
  );
