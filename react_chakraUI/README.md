# Chakra UI Portfolio Page

Welcome to my portfolio page! This single-page website showcases my work, provides information about me, and allows you to contact me.

## Libraries

### Chakra UI

Chakra UI is used to style and structure this portfolio page. It comes pre-configured, so you don't need to worry about installation or setup. You can explore all the available components and their props in the [Chakra UI documentation](https://chakra-ui.com/docs/getting-started).

### Formik and Yup

Formik is set up for form handling, and Yup is used for form validation. These libraries are essential for creating the "Contact Me" form on this page. The form UI components are implemented using Chakra UI components.

## Getting Started

To get started with this portfolio page, follow these steps:

1. Clone this repository:

   ```bash
   git clone <repository_url>
2. Navigate to the project directory:

   ```bash
   cd <rep_name>
3. Install dependencies:

   ```bash
   npm install
4. Run the app:
   ```bash
   npm start
This will start the development server, and you can view the portfolio page in your web browser.

# Sections

## Header
The header contains links to my social media accounts and internal links to other sections of the page.

- External social media links are displayed on the left side of the page.
- Internal links "Projects" and "Contact Me" allow smooth scrolling to the respective sections on the page using React Router and the `<Link>` component.

## Landing Section
The landing section features an avatar picture and a short bio.

- It provides a welcoming introduction to the portfolio.

## Projects Section
The projects section showcases my featured projects as cards in a grid fashion.

- Each card displays project information, including an image, heading, and description.
- These cards are implemented using Chakra UI components.

## Contact Me Section
The contact me section allows visitors to get in touch with me.

- It features a form with input fields for name, email address, type of enquiry, and message.
- Form validation is implemented using Yup.
- The form submission is handled, and responses are displayed in an alert.
- Upon successful submission, the alert shows the user's first name from the form.
- The form is reset after a successful submission.

## Bonus (Header Animation with React Router and `<Link>`)
A header show-hide animation is implemented depending on the scroll direction. The header slides up and hides when scrolling down, and it slides down and becomes visible when scrolling up.

- This animation is achieved by changing the transform property of the header based on the scroll direction.

Enjoy exploring my portfolio page.
