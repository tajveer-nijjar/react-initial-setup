import {
  accept,
  body,
  createFetch,
  auth,
  createStack,
  header,
  init,
  method,
  parseJSON,
  debug
} from 'http-client';

const commonStack = (token) => {
  return createStack(
    accept('application/json'),
    // This is pretty important for fetch to pretend it's XMLHttpRequest and the server to understand it as Ajax
    header('X-Requested-With', 'XMLHttpRequest'),
    //Custom header
    header('token', token),
    // add credentials for cors
    init('credentials', 'include'),
    auth('Bearer ' + token),
    parseJSON()
  );
};

const commonStackWithoutJsonParse = (token) =>
  createStack(
    accept('application/json'),
    // This is pretty important for fetch to pretend it's XMLHttpRequest and the server to understand it as Ajax
    header('X-Requested-With', 'XMLHttpRequest'),
    //Custom header
    header('token', token),
    // add credentials for cors
    init('credentials', 'include'),
    auth('Bearer ' + token)
  );

const commonStackReturningImage = (token) => {
  return createStack(
    accept('application/json'),
    // This is pretty important for fetch to pretend it's XMLHttpRequest and the server to understand it as Ajax
    header('X-Requested-With', 'XMLHttpRequest'),
    //Custom header
    header('token', token),
    // add credentials for cors
    init('credentials', 'include'),
    auth('Bearer ' + token)
    // parse('blob')
  );
};
const getStack = createStack(
  // Don't cache ajax request responses
  header(
    'Cache-Control',
    'no-cache,no-store,must-revalidate,max-age=-1,private'
  ),
  header('Expires', '-1'),
  header('Pragma', 'no-cache')
);

const enhancedFetchWithBody = (
  path,
  payload = {},
  token,
  methodType = 'POST'
) => {
  const commonStackWithoutJsonParseWithCustomHeader = commonStack(token);
  return createFetch(
    body(JSON.stringify(payload), 'application/json'),
    commonStackWithoutJsonParseWithCustomHeader,
    method(methodType),
    debug()
  )(path);
};

//This will be used for Put requests.
const enhancedFetchWithBodyNotExpectingReturnValue = (
  path,
  payload = {},
  token,
  methodType = 'POST'
) => {
  const commonStackWithoutJsonParseWithCustomHeader = commonStackWithoutJsonParse(
    token
  );
  return createFetch(
    body(JSON.stringify(payload), 'application/json'),
    commonStackWithoutJsonParseWithCustomHeader,
    method(methodType),
    debug()
  )(path);
};

const enhancedMultipartFetchWithBody = (path, formData) =>
  createFetch(body(formData), commonStack, method('POST'))(path);

export const get = (path, token) =>
  createFetch(commonStack(token), getStack)(path).then(rejectHandler);

export const getImage = (path, token) => {
  return createFetch(
    commonStackReturningImage(token),
    getStack
  )(path).then(rejectHandlerForImage);
};

export const patch = (path, payload) =>
  enhancedFetchWithBody(path, payload, 'PATCH').then(rejectHandler);

export const post = (path, payload, token) => {
  return enhancedFetchWithBody(path, payload, token).then(rejectHandler);
};

export const postWithoutReturn = (path, payload, token) => {
  return enhancedFetchWithBodyNotExpectingReturnValue(
    path,
    payload,
    token
  ).then(rejectHandler);
};

export const put = (path, payload, token) =>
  enhancedFetchWithBody(path, payload, token, 'PUT').then(rejectHandler);

export const putWithoutReturnValue = (path, payload, token) =>
  enhancedFetchWithBodyNotExpectingReturnValue(
    path,
    payload,
    token,
    'PUT'
  ).then(rejectHandler);

export const multipart = (path, formData) =>
  enhancedMultipartFetchWithBody(path, formData).then(rejectHandler);

function _delete(path, _payload, token) {
  return createFetch(
    commonStackWithoutJsonParse(token),
    method('DELETE')
  )(path).then(rejectHandler);
}

function rejectHandler(response) {
  if (response.ok) {
    return response;
  }

  return Promise.reject(response);
}

function rejectHandlerForImage(response) {
  if (!response.ok) {
    return Promise.reject(response);
  }

  return response.blob().then((res) => {
    var imgUrl = URL.createObjectURL(res);
    return imgUrl;
  });
}

export default {
  get,
  patch,
  post,
  postWithoutReturn,
  put,
  multipart,
  delete: _delete
};
