Prerequisites
Node.js installed.
Environment variables set for USERNAME and PASSWORD containing WordPress credentials.
Usage
Create a Page
Send a POST request to /create-page with the JSON body:

{
    "title": "Page Title",
    "content": "Page Content",
    "url": "WordPress site URL"
}
Replace WordPress REST API URL with your WordPress site's REST API URL.

Response
200 OK: Page created successfully.
400 Bad Request: Missing fields (title, content, or url).
500 Internal Server Error: Error creating the page.
