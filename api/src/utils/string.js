// **** STRINGS MANAGE ***** //

// HTTP STATUS CODE STRINGS

const httpStrings = {
  default: {
    504: "Gateway timeout",
    503: "Invalid token",
    502: "Bad gateway",
    500: "Internal server error",
    429: "Too many request",
    423: "Locked",
    422: "Unprocessable Entity",
    420: "Enhance your calm",
    412: "Precondition Failed",
    410: "Gone",
    409: "Conflict",
    408: "Reques Timeout",
    406: "Not Acceptable",
    404: "Not found",
    403: "Forbiden",
    401: "Unauthorized",
    400: "Bad request",
    304: "Not Modified",
    204: "No Content",
    202: "Accepted",
    201: "Created",
    200: "ok",
    999: "Generic message",
  },
};
function getMessageFromStatusCode(code, lang) {
  if (!lang) {
    lang = "default";
  }
  return this[lang][code];
}
const getStatusCodeMsj = getMessageFromStatusCode.bind(httpStrings);

module.exports = {
  getStatusCodeMsj,
};
