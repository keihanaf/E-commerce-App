# React E-commerce Application

<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">

This project is a modern, feature-rich e-commerce application built with React and Vite. It demonstrates advanced React concepts, state management, routing, and integration with external APIs.

<h3><a href="https://e-commerce-app-red-nine.vercel.app">View E-commerce Application</a></h3>

## Features

- Product listing with search and category filtering
- Detailed product views
- Shopping cart functionality with persistent state
- Checkout process
- Responsive design for various screen sizes

## Technology Stack

- **React**: A JavaScript library for building user interfaces
- **Vite**: Next generation frontend tooling
- **React Router**: For handling routing in the application
- **Axios**: Promise-based HTTP client for making API requests
- **React Icons**: For including popular icon packs
- **CSS Modules**: For component-scoped styling

## Project Structure

- `src/`
  - `components/`: Reusable React components
  - `context/`: React Context for global state management
  - `helpers/`: Utility functions
  - `Layout/`: Layout components
  - `pages/`: Individual page components
  - `services/`: API configuration
  - `App.jsx`: Main application component
  - `main.jsx`: Entry point of the application

## Key Components

- **ProductsProvider**: Manages the global product state
- **CartProvider**: Handles shopping cart state and operations
- **Layout**: Provides a consistent layout across pages
- **ProductsPage**: Displays product listings with search and filter capabilities
- **DetailsPage**: Shows detailed information about a specific product
- **CheckoutPage**: Manages the checkout process

## State Management

The application uses React Context API for state management:
- `ProductContext`: Manages product data
- `CartContext`: Handles shopping cart state

## Routing

React Router is used for navigation, with the following main routes:
- `/products`: Product listing page
- `/products/:id`: Product details page
- `/checkout`: Checkout page

## API Integration

The application integrates with the Fake Store API (`https://fakestoreapi.com`) to fetch product data.

## Local Storage

Shopping cart data is persisted in the browser's local storage, allowing users to retain their cart items between sessions.

## Styling

The project uses CSS Modules for component-specific styling, ensuring style encapsulation and preventing global style conflicts.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open `http://localhost:5173` in your browser

## Build

To build the project for production:
This will generate a `dist` folder with the production-ready assets.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

## License

This project is open source and available under the [MIT License](LICENSE).

## Languages and Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,javascript,vite,css,vscode" />
  </a>
</p>

## Acknowledgements

- [Fake Store API](https://fakestoreapi.com) for providing product data
- [React Icons](https://react-icons.github.io/react-icons/) for the icon set
- [React Router](https://reactrouter.com) for routing capabilities

---

Developed with ❤️ by Keihan
