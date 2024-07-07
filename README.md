# Test Case
This project is a test case featuring a book list, a search input, and a shopping cart functionality. You can list the books returned from the [API](https://dev-test.360y.co/books), search for any book by its name or author, and add it to the cart. Additionally, you can increase or decrease the quantity of items in the cart.

We used [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) with the [Vue Composition API](https://vuejs.org/guide/introduction.html) and [Pinia](https://pinia.vuejs.org/introduction.html) for state management, as well as [TypeScript](https://www.typescriptlang.org/docs/). Unit tests are written with [vitest](https://vitest.dev/guide/) and [Vue Test Utils](https://test-utils.vuejs.org/guide/).

## Setup

Install the dependencies:

```bash
# npm
npm install
```

Make sure you use node v20^.

## Commands

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

Run the tests
```bash
# npm
npm run test
```

Build the project
```bash
# npm
npm run build
```

## File Structure
.
├── assets                    # Stylesheets and SVG files used in the project
├── components                # Vue component files along with their corresponding test files.
├── pages                     # Defines the routes for the application
├── public                    # Images that are statically served by the application
├── server                    # Code that runs on the server
├── service                   # Endpoints from which the application fetches data
├── store                     # State management for the entire application
└── types                     # TypeScript definitions used throughout the application

## Production
 You can check the deployed project on [link](https://yl360-test-case.vercel.app/)
