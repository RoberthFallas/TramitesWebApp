/** constants **/
const config = {
  BASE_PATH: 'http://localhost:9869',
  ACCESS_TOKEN: null

};


export function setToken(token: string) {
  token = !token ? null : token;

  // update token
  config.ACCESS_TOKEN = token;

  // update/remove in local storage
 
}

export async function fetchAsync(
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  url: string,
  body?: any
) {
  // default headers
  const headers = { 'Content-Type': 'application/json' };

  // add authorization header
  if (config.ACCESS_TOKEN) {

    headers['Authorization'] = `Bearer ${config.ACCESS_TOKEN}`;
  }

  

  // execute request
  const response = await window.fetch(`${config.BASE_PATH}${url}`, {
    method,
    headers,
    body: body && JSON.stringify(body),
  });

  // unauthorized status code
  if (response.status === 401) {
    setToken(null);
    throw new Error('401');
  }

  // convert response to json
  const result = await response.json();
 
  // error
  if (!response.ok) {
    throw result;
  }

  return await result;
}

/** GET request **/
export function get<T>(url: string): Promise<T> {
  return fetchAsync('GET', url);
}

/** POST request **/
export function post<T>(url: string, body?: any): Promise<T> {
  return fetchAsync('POST', url, body);
}

/** DELETE request **/
export function del(url: string) {
  return fetchAsync('DELETE', url);
}

/** PUT request **/
export function put(url: string, body?: any) {
  return fetchAsync('PUT', url, body);
}
