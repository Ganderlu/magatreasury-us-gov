# Project Fixes and Audit Log

This document lists the issues identified in the original codebase and the corresponding fixes applied during the refactoring process.

| ID | Issue Description | Fix Applied | Rationale |
|---|---|---|---|
| 1 | **Insecure CORS Config** | Restricted CORS to `ALLOWED_ORIGIN` env var. | Prevents unauthorized cross-origin requests in production. |
| 2 | **Insecure Static Serving** | Moved static files to `public/` and restricted `express.static` to that folder. | Prevents exposure of server-side code (e.g., `server.js`, `package.json`). |
| 3 | **Deprecated Middleware** | Replaced `body-parser` with `express.json()`. | `body-parser` is redundant in modern Express versions. |
| 4 | **Missing Security Headers** | Integrated `helmet()`. | Provides protection against common web vulnerabilities (XSS, Clickjacking, etc.). |
| 5 | **Missing Input Validation** | Implemented `express-validator` for all API endpoints. | Ensures data integrity and prevents injection attacks. |
| 6 | **No Body Size Limit** | Set JSON body limit to `10kb`. | Prevents Denial of Service (DoS) attacks via large payloads. |
| 7 | **Hardcoded Credentials** | Moved to `process.env` and `applicationDefault()` for Firebase. | Follows security best practices for secret management. |
| 8 | **Missing Logging** | Implemented structured JSON logging. | Facilitates easier monitoring and debugging in production environments. |
| 9 | **Missing Signal Handling** | Added `SIGTERM` and `SIGINT` graceful shutdown handlers. | Ensures the server closes connections properly before exiting. |
| 10 | **Missing Error Handling** | Standardized API error responses with `success: false`. | Provides consistent feedback to the client. |
| 11 | **Timestamps in Responses** | Converted Firestore timestamps to ISO strings. | Ensures compatibility with client-side JavaScript `Date` objects. |
