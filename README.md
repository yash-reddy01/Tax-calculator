# Income Tax Calculator

This is a simple web application that calculates the income tax amount based on the user's gross annual income, extra income, age group, and deductions.

## Features

- User-friendly form to input the required information
- Validation for input fields (gross income, extra income, age group, and deductions)
- Error icons with tooltip messages to guide users in case of invalid inputs
- Tax calculation based on the following rules:
  - Overall income (after deductions) under 8 lakhs is not taxed
  - Income over 8 lakhs, the amount over 8 lakhs is taxed at:
    - 30% for people with age < 40
    - 40% for people with age ≥ 40 but < 60
    - 10% for people with age ≥ 60
- Display of the calculated tax amount in a modal

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.

## Usage

1. Enter your gross annual income in the respective input field.
2. Enter any extra income from other sources (if applicable).
3. Select your age group from the dropdown.
4. Enter the total applicable deductions (if any).
5. Click the "Submit" button.
6. The application will validate the input fields and display error icons with tooltip messages if any input is invalid.
7. If all inputs are valid, the calculated tax amount will be displayed in a modal.

Note: If the overall income (after deductions) is less than or equal to 8 lakhs, the modal will display "No tax applicable".

## File Structure

- `index.html`: The main HTML file that contains the structure of the web application.
- `styles.css`: The CSS file that styles the application components.
- `script.js`: The JavaScript file that handles form validation, tax calculation, and modal display.

## Dependencies

This application uses the following external dependencies:

- Font Awesome (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css) for icons.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
