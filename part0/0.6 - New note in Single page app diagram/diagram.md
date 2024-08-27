```mermaid

sequenceDiagram

   user->>browser: Types Note/Hits Save
   browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
   activate server
   server-->>browser: json file (new_note_spa)
   deactivate server
   browser-->>user: User sees their note on the note list
   
   Note right of browser: The status code is: (Green) 201 Created
