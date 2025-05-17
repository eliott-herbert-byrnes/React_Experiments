# Custom Components

A collection of custom compound componenets created using React.

## Badges

Badge.jsx
- **Props:**
```JavaScript
export default function Badge({ children, color = 'default', className = '' }) {
```
    'children' - the content inside the badge e.g 'Click me', 'Open'...
    'color' - Optional; if not passed, defaults to 'default'.
    'ClassName' - Optional extra styles (e.g., margins, layout adjustments)

- Color Mapping:
```JavaScript
const colorClasses = {
    default: 'badge-default',
    red: 'badge-red',
    yellow: 'badge-yellow',
    ...
}

```
    object created to map each color prop value to a CSS class name

- Rendering the badge:
```JavaScript
<div className={clsx('badge-base', colorClasses[color], className)}>
  {children}
</div>
```
    clsx(...) joins multiple class names intelligently.
    'badge-base' - Common base style for all badges.
    'colorClasses[color] - Color-specific style (like 'badge-green').
    className - any extra class passed by the user (optional).