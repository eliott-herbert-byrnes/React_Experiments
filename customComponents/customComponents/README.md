# Custom Components

A collection of custom compound componenets created using React.

## Badges

# Badje.jsx
- Props:
```JavaScript
export default function Badge({ children, color = 'default', className = '' }) {
```
- 'children': the content inside the badge e.g 'Click me', 'Open'...
- 'color': Optional; if not passed, defaults to 'default'.
- 'ClassName': Optional extra styles (e.g., margins, layout adjustments)

- Color Mapping:
```JavaScript
const colorClasses = {
    default: 'badge-default',
    red: 'badge-red',
    yellow: 'badge-yellow',
    ...
}

```
