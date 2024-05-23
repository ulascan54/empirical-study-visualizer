# Empirical Study Visualizer

Empirical Study Visualizer is a React application for visualizing various sorting algorithms. This project is inspired by the [Sorting Visualizer GitHub Page](https://clementmihailescu.github.io/Sorting-Visualizer/) and is based on the repository found [here](https://github.com/clementmihailescu/Sorting-Visualizer).

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installing

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/empirical-study-visualizer.git
cd empirical-study-visualizer
```

Install the dependencies:

```bash
npm install
```

### Running the Application

To start the application in development mode, run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

### Running Tests

To run tests, use the following command:

```bash
npm test
```

### Ejecting

If you need to customize the configuration, you can "eject" from Create React App by running:

```bash
npm run eject
```

**Note: This is a one-way operation. Once you eject, you can’t go back!**

## Project Structure

- `public/` - Contains the static assets and the HTML file.
- `src/` - Contains the React components and other source files.

## Dependencies

The project uses the following dependencies:

```json
{
  "name": "sorting-visualizer",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.10.2",
    "react-dom": "^16.10.2",
    "react-scripts": "^5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

## Acknowledgments

This project was inspired by and based on the work of [Clement Mihailescu](https://github.com/clementmihailescu) and his [Sorting Visualizer](https://github.com/clementmihailescu/Sorting-Visualizer) project. The live demo can be found [here](https://clementmihailescu.github.io/Sorting-Visualizer/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

- This README file provides all the necessary information to set up, run, and understand the project while giving proper credit to the original work by Clement Mihailescu.
