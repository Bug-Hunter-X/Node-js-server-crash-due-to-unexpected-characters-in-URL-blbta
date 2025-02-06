# Node.js Server Crash Due to Unexpected Characters in URL

This repository demonstrates a bug in a Node.js HTTP server where it crashes when handling requests with unexpected characters in the URL.  The issue stems from attempting to directly send the raw URL as the response without proper encoding or error handling.

## Bug Description
The server crashes when requests with certain URL characters are made. This is because the `res.end()` method isn't designed to handle arbitrary data, potentially including characters that are not valid in a HTTP response body.  This leads to an unhandled exception and server termination.

## Bug Solution
The solution involves proper error handling and encoding the URL before sending it as a response. This prevents the server from crashing and provides a more graceful handling of potentially problematic requests.

## How to Reproduce
1. Clone the repository.
2. Run `node bug.js`.
3. Send a request to `http://localhost:3000/%C0%80` (or other invalid characters).
   Observe the server crashing.
4. Run `node bugSolution.js` to see the corrected version.