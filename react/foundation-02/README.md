# React Foundation Learning

## Adding JavaScript in Return Statements

In React components, you can embed JavaScript expressions directly in the JSX return statement using curly braces `{}`. This allows you to dynamically render data from variables, arrays, and objects.

### Examples from App.jsx:

- **Accessing object properties:** `{shows[0].title}` - Displays the title of the first show.
- **Rendering variables:** `{hello}` - Shows the value of the `hello` variable.
- **Displaying arrays:** `{name}` - Renders the entire array (though typically you'd map over it for lists).
- **Mapping over arrays:** `{shows.map((show) => (...))}` - Creates multiple JSX elements from an array of objects, useful for rendering lists.

This technique enables dynamic content rendering based on JavaScript logic within the component.