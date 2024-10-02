# Notes on Design Decisions

## Technology used

I have the most experience in C# and javascript.  Javascript was selected in part for the following reasons:

- A running copy of the app must be provided.  Url link to hosted app is most convenient way to satisfy need.
- No database/server calls needed.
- Simple to host in github pages, same place repo is so no external resources (azure, vercel, etc) to be spun up and forgotten

React was selected as framework to help avoid context switching beteween my normal work in React and plain javascript.  I accept that React is overkill for a simple application in exchange for the benefits of quicker development and easier theoretical maintainability.

I preferred the zero-configuration setup of Create-React-App over the customization and speed/performance of a tool like Vite.  

No css framework used to avoid further bloat of app.

## App
- need service/function to convert string to an output
    - No simple regex generated the correct output, so function is recursive.  I accept the decrease in readability of recursive functions in favor of ability to reuse the function outside of the single provided string.
    - Map used instead of object for Key Order, Security and Accidental Keys reasons listed here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

- need component(s) to call function and render output
    - Header placeholder component
    - "Wrapper" component for orchestrating the display
    - Recursive component for displaying output
        - Having recursive component do the sorting avoided need for another recursive function to handle sorting.

