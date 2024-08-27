```mermaid

sequenceDiagram

   user->>browser: Types Note/Hits Save
   browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
   activate server
   server-->>browser: HTML document (new_note)
   deactivate server
   browser-->>user: User sees their note on the note list

   Note right of browser: The status code is: (Orange) 302 Found