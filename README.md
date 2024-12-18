# Simple Cart Application

This is a simple cart application built with **Vite**, **React**, and **MobX** for state management. The application demonstrates the basic functionality of an e-commerce shopping cart, including adding and removing items, and calculating the total price.

---

## Features

- Add items to the cart.
- Remove items from the cart.
- Display cart items with their quantities.
- Calculate and display the total price of the items in the cart.
- Built with modern React features and MobX for efficient state management.

---

## Tech Stack

- **Vite**: Fast and efficient build tool.
- **React**: Library for building the user interface.
- **MobX**: Intuitive and powerful state management solution.

---

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed on your system:
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ofirpar/ecom-cart-react-mobx
   cd ecom-cart-react-mobx
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install

### Running the Application

Start the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```

Open your browser and navigate to http://localhost:5173 to view the app.

### Project Structure
```csharp
├── src
│   ├── components          # React components
│   │   ├── CartSummary.tsx # Cart component
│   │   ├── ProductList.tsx # Product listing component
│   ├── store               # Zustand store
│   │   └── CartStore.ts    # Cart store logic
│   ├── App.tsx             # Main app entry
│   ├── main.tsx            # ReactDOM rendering
├── public                  # Static assets
├── index.html              # HTML template
├── package.json            # Project configuration
└── README.md               # Project documentation
```