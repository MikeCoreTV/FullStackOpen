```mermaid

sequenceDiagram

   browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
   activate server
   server-->>browser: HTML document (spa)
   deactivate server

   browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
   activate server
   server-->>browser: css file (main.css)
   deactivate server

   browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
   activate server
   server-->>browser: JavaScript file (spa.js)
   deactivate server

   browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
   activate server
   server-->>browser: json file (data.json) <br/> [{content: "Antonio MS was here", date: "2024-08-26T16:11:15.279Z"},…]
   deactivate server
