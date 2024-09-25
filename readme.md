# Context
The inbuilt css sticky property ```position:sticky;``` does not work in all situations.
I tried many jquery plugins abd css, to apply the same effect for my project, but none of them worked in a very simple layout.
- All of the project solves by pusing header to fixed position.
- It breaks the content flow,
- Any changes to parent container must be applied/handled to this fixed header (like horizontal scrolling, which is very common)

Therefore I decided to write a custom plugin
- It use ```position:realative``` property on header 
- When window is scrolled, we observe the parent container, and  update the top property, as desired for sticky header.
- Its a short and simple.

# Relative Sticky Header (jQuery Plugin)

A jQuery plugin that makes elements sticky relative to their parent container. This is particularly useful for creating sticky table headers that remain within their parent table's boundaries.

## Features

- Makes elements sticky within their parent container
- Customizable styles for sticky elements
- Lightweight and easy to use
- Works well with table headers, but can be used with any element

## Installation

You can install this plugin using npm:
```bash
npm install jquery-sticky-header-relative
```

Alternatively, you can include it directly in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="path/to/jquery.stickyheadersrelative.min.js"></script>
```
## Usage

1. Include jQuery and the plugin in your HTML file.
2. Call the `stickyHeadersRelative` method on the parent container, passing the selector for the element you want to make sticky.

Basic usage:
```javascript
$(document).ready(function () {
$('table.sticky-header-table').stickyHeadersRelative('thead');
});
```
With custom options:
```javascript
$(document).ready(function () {
$('table.sticky-header-table').stickyHeadersRelative('thead', {
backgroundColor: '#f0f0f0',
zIndex: 100,
additionalStyles: {
boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
}
});
});
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `stickyClass` | string | 'sticky-element' | CSS class added to the sticky element |
| `backgroundColor` | string | 'white' | Background color of the sticky element |
| `zIndex` | number | 1000 | z-index of the sticky element |
| `additionalStyles` | object | {} | Additional CSS styles to apply to the sticky element |

## Browser Support

This plugin should work in all modern browsers that support jQuery.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

Shyam Verma - [GitHub](https://github.com/ssv445)

## Issues

If you encounter any issues or have feature requests, please [file an issue](https://github.com/ssv445/jquery-sticky-header-relative/issues) on GitHub.