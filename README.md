# Birthday Countdown App

## Overview

The Birthday Countdown App is a web application that allows users to count down the days, hours, minutes, and seconds until their next birthday. It also provides a feature to send birthday wishes via email. This README file provides an overview of the project, its features, how to set it up and use it, customization options, dependencies, contributions, and the license.

## Table of Contents

-   [Features](#features)
-   [Setup](#setup)
-   [Usage](#usage)
-   [Customization](#customization)
-   [Dependencies](#dependencies)
-   [Contributions](#contributions)
-   [License](#license)

## Features

The Birthday Countdown App offers the following features:

-   **Countdown Timer**: It calculates and displays the time remaining until the user's next birthday, updating in real-time.
-   **Progress Indicator**: A circular progress indicator visually represents the time passed since the beginning of the countdown.
-   **Birthday Wishes**: Users can send birthday wishes via email using the integrated emailjs API.
-   **Dynamic Quotes**: The app displays random quotes, with a special set of birthday messages on the user's birthday.
-   **User-Friendly Interface**: The app is designed with a user-friendly interface, making it easy to navigate and use.

## Setup

To run the Birthday Countdown App on your local machine, follow these steps:

1. Clone the repository to your local machine:

    ```bash
         git clone https://github.com/wisac/birthday-countdown
    ```

2. Navigate to the project directory:

    ```bash
    cd birthday-countdown
    ```

3. Open the `index.html` file in your web browser to view the app.

## Usage

1. **Countdown Timer**: When you open the app, it will automatically calculate and display the time remaining until your next birthday.

2. **Birthday Wishes**:

    - Click on the "Wish Me" button to send birthday wishes.
    - Fill in your name in the sender's name input field.
    - Optionally, add a personalized message in the wish message field.
    - Click the "Send Wishes" button to send your wishes via email.

3. **Dynamic Quotes**: The app will display random quotes or birthday messages depending on whether it's your birthday.

4. **Progress Indicator**: The circular progress indicator visually represents the time passed since the countdown began.

## Customization

You can customize the Birthday Countdown App in the following ways:

-   **Change Background**: You can customize the background and colors by modifying the CSS styles in the `styles.css` file.

-   **Modify Quotes**: Edit the `quotes` and `birthdayMessages` arrays in the JavaScript code to change or add new quotes and messages.

-   **Change Birthday Date**: To set your custom birthday date, locate the `myBirthDay` variable in the JavaScript code and update it with your desired day and month (e.g., `[day, month]`). Save the changes, and the countdown will be based on your new birthday date.

-   **Profile Picture**: To change the profile picture displayed in the app, replace the existing image file (`profile-picture.jpg`) in the project directory with your own image. Ensure that your image has the same filename and format (e.g., JPG or PNG).

-   **Email Service**: To send birthday wishes via email, you will need to set up your own email service with [emailjs](https://www.emailjs.com/). Configure the `emailServiceID` and `emailTemplateID` variables in the `send-wish.js` file with your own email service and template IDs.

-   **Styling**: Customize the app's styling, fonts, and layout to suit your preferences.

## Dependencies

The Birthday Countdown App relies on the following dependencies:

-   **emailjs**: Used to send birthday wishes via email.
-   **emailjs-com**: A library for interacting with the emailjs API.

These dependencies are already included in the project, and you don't need to install them separately.

## Contributions

Contributions to the Birthday Countdown App are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository to your GitHub account.

2. Clone your forked repository to your local machine.

    ```bash
    git clone https://github.com/wisac/birthday-countdown
    ```

3. Create a new branch for your feature or bug fix.

    ```bash
    git checkout -b feature-name
    ```

4. Make your changes and commit them with clear and concise commit messages.

5. Push your changes to your forked repository.

    ```bash
    git push origin feature-name
    ```

6. Create a pull request to the original repository, explaining your changes and their purpose.

7. Your pull request will

be reviewed, and upon approval, your changes will be merged into the main branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
