# Hall Booking System

The Hall Booking System is a web application that allows users to book halls or event spaces for various purposes. It provides a user-friendly interface for both administrators and users to manage and reserve halls efficiently.

This readme provides an overview of the project, instructions for setting up and running the application, as well as additional information about its features and implementation.

## Features

1. **User Registration and Authentication:** Users can create an account, log in, and manage book halls. Authentication ensures that only authorized users can book halls and access specific features.

2. **Hall Listings:** The application provides a list of available halls along with their descriptions, amenities and capacity.
3. **Booking Management:** Users can view the availability of halls on a calendar and make reservations for a specific date and time. The system prevents double booking and notifies users of conflicting bookings.

4. **Administrative Features:** Administrators have access to an admin dashboard to manage halls, bookings, and user accounts. They can add or remove halls, view and modify bookings, and monitor the system's overall activity.

## Installation and Setup

To set up the Hall Booking System locally, follow these steps:

1. **Clone the repository:** Start by cloning this repository to your local machine using the following command:

```bash
git clone https://github.com/Umesh2202/hall-booking-system.git
```

2. **Install dependencies:** Navigate to the project directory and install the required dependencies by running the following command:

```bash
cd hall-booking-system
yarn install
```

3. **Database setup:** Set up the firebase database. You need to add your firebase config details in the two firebase config files. One is located in ```src/routes/api/halls/``` and other in ```src/routes/api/users```
4. **Start the application:** Launch the application by running the following command:

```bash
yarn run dev
```

5. **Access the application:** Open your web browser and visit `http://localhost/5174` to access the Hall Booking System.

## Technologies Used

The Hall Booking System is built using the following technologies:

- **Frontend:** HTML, CSS, JavaScript, Sveltejs
- **Backend:** Sveltekit
- **Database:** Firebase

## Contribution Guidelines

Contributions to the Hall Booking System are welcome! If you wish to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure they adhere to the project's coding style and guidelines.
3. Write tests for your code, ensuring that existing tests pass and new functionality is properly covered.
4. Submit a pull request, describing your changes in detail and explaining their purpose.

Please note that all contributions are subject to review, and maintainers will provide feedback and suggestions if necessary.
