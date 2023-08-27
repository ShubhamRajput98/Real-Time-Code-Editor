
export const PostApiCall = async (URL, content, token) => {
  var responseData = '';
  var body = JSON.stringify(content);

  var header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  if (token) {
    header['Authorization'] = `${token}`;
  }

  await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    headers: header,
    body: body,
  })
    .then(response => {
      return response.json();
    })
    .then(responseJSON => {
      responseData = responseJSON;
      return responseJSON;
    })
    .catch(err => {
      console.log('err ', err);
    });
  return responseData;
};

export default PostApiCall;