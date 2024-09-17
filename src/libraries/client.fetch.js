/**
 * @typedef {Object} FetchObject
 * @property {string} url - The URL to which the fetch request is sent.
 * @property {"GET" | "POST" | "PUT" | "DELETE"} method - The HTTP method used for the request (e.g., 'GET', 'POST').
 * @property {"NORMAL" | "AUTH"} [header] - Optional headers to include in the request.
 * @property {unknown} [body] - Optional body data to send with the request, typically for POST or PUT methods.
 * @property {"FILE" | "JSON"} [type] - Optional content type for the request (e.g., 'json', 'text').
 * @property {string} [token] - Optional token for authentication or authorization purposes.
 */

/**
 * @param {FetchObject} obj
 */
export const fetcher = ({ url, method, header = "AUTH", body, type = "JSON", token }) => {
  return fetch(createUrl(url, method, body), {
    method,
    headers: createHeader(header, type, token),
    ...(method !== "GET" && { body: createBody(body, type) }),
  });
};

/**
 * @param {FetchObject["url"]} url
 * @param {FetchObject["method"]} method
 * @param {*} body
 */
const createUrl = (url, method, body) => {
  if (method === "GET" && body) {
    const queryParams = new URLSearchParams(body).toString();
    return `${url}${queryParams ? `?${queryParams}` : ""}`;
  }
  return url;
};

/**
 * @param {FetchObject["body"]} body
 * @param {FetchObject["type"]} type
 */
const createBody = (body, type) => {
  if (type === "FILE") {
    const formData = new FormData();
    if (typeof body === "object" && body !== null) {
      Object.entries(body).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (Array.isArray(value)) {
          value.forEach((item) => formData.append(key, item));
        } else {
          formData.append(key, value);
        }
      });
    }
    return formData;
  }
  return typeof body === "object" ? JSON.stringify(body) : null;
};

/**
 * @param {FetchObject["header"]} header
 * @param {FetchObject["type"]} type
 * @param {FetchObject["token"]} token
 */
const createHeader = (header, type, token) => {
  const authHeader = header === "AUTH" && token ? { ...{}, Authorization: `Bearer ${token}` } : {};
  return {
    ...authHeader,
    Accept: "application/json",
    ...(type === "JSON" && { "Content-Type": "application/json" }),
  };
};

/**
 * @param {Response} res
 */
export const errorMessage = async (res) => {
  if (!res.ok) {
    let message = `${res.status} - ${res.statusText ? res.statusText : "Unknown Server Error"}`;

    try {
      const body = await res.json();
      message = `${res.status} - ${body.message}`;
      if (body.errors && body.errors.length > 0) {
        message = `${body.errors[0].message}`;
      }
    } catch (error) {
      message = `${res.status} - ${res.statusText ? res.statusText : "Unknown Server Error"}`;
    }

    return message;
  }
};
