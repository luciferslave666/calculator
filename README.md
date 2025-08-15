# Calculator Web Application

A modern, responsive calculator built with HTML, CSS, and JavaScript featuring a sleek dark theme and intuitive user interface.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Advanced Functions**: 
  - Clear (AC) - Reset calculator
  - Delete (DEL) - Remove last entered character
  - Percentage (%) - Calculate percentages
  - Decimal support with dot (.) button
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Dark theme with gradient background and smooth interactions
- **Error Handling**: Displays appropriate error messages for invalid calculations

## Design

- **Color Scheme**: Dark theme with orange accent buttons
- **Layout**: Grid-based button layout for optimal spacing
- **Typography**: Clean Helvetica Neue font for excellent readability
- **Interactive Elements**: Buttons brighten on click/focus for visual feedback

## File Structure

```
calculator/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Calculator functionality and logic
└── README.md           # Project documentation
```

## Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Grid layout and custom properties
- **Vanilla JavaScript**: Interactive functionality without external dependencies

## Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Start calculating** immediately - no installation required!

## Usage

### Basic Operations
- Click number buttons (0-9) to input numbers
- Click operation buttons (+, -, *, /) to perform calculations
- Press = to execute the calculation
- Use . for decimal numbers

### Special Functions
- **AC**: Clear all input and reset to 0
- **DEL**: Delete the last entered character
- **%**: Calculate percentage values

### Examples
```
Basic Addition: 5 + 3 = 8
Decimal Calculation: 12.5 * 2 = 25
Percentage: 50 % = 0.5
```

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Customization

### Changing Colors
Edit the CSS custom properties in `style.css`:
```css
:root {
  --primary-bg: #000000;      /* Calculator background */
  --accent-color: #ff9501;    /* Orange operation buttons */
  --secondary-color: #a6a6a6; /* Gray utility buttons */
}
```

### Adding New Functions
1. Add button in `index.html`
2. Style in `style.css`
3. Implement logic in `script.js`

## Known Issues

- Very long numbers may overflow the display area
- Complex mathematical expressions are not supported (use parentheses carefully)

## Future Enhancements

- [ ] Scientific calculator functions
- [ ] History of calculations
- [ ] Keyboard input support
- [ ] Theme customization options
- [ ] Memory functions (M+, M-, MR, MC)

## Contributing

Feel free to submit issues and enhancement requests! Contributions are welcome.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Created with modern web technologies and inspired by iOS calculator design.

---

**Enjoy calculating!** 🧮
