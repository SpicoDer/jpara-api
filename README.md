# Jeepney Passenger Real-time Alert API

**Jeepney Passenger Real-time Alert API** is a backend API designed to support the Passenger Real-time Alert application. This system includes a Para Device, a hardware device that sends its current location to the Node.js server. The server stores the location information in a MongoDB database and makes it available for consumption by the frontend application located at [jpara.vercel.app](https://jpara.vercel.app/).

## API Overview

- **Endpoint:** `localhost:3000/coordinates`
- **Response:** JSON object containing status and coordinates information.

Sample response:

```json
{
  "status": "Success",
  "coordinates": {
    "_id": "64ddcaed5726e472c192fdce",
    "lat": 123,
    "lon": 435
  }
}
```

## Update Data

To update the data, use the HTTP POST method with a JSON request body containing the latitude and longitude information.

Sample POST request:

```json
POST localhost:3000/coordinates

Request Body:
{
  "lat": 123,
  "lon": 123
}
```

## Installation and Usage

1. Clone this repository to your local machine or download the source code.

2. Install the necessary dependencies by running the following command:

   ```bash
   npm install
   ```

3. You can use the following npm scripts to build and run your project:

   - `npm run build`: This script installs production dependencies and builds the project using esbuild. The built output will be in the `dist` directory.
   - `npm run dev`: Use this script to run your application in development mode using `nodemon`, which automatically restarts your server when changes are detected.
   - `npm run serve`: This script runs your compiled application from the `dist` directory using Node.js.

## Project Structure

The structure of the project is designed to keep your code organized and maintainable:

- `src/`: This directory contains your source code files.
  - `server.js`: The entry point of your application.

- `dist/`: This directory is generated when you build your project and contains the compiled JavaScript files.

## Dependencies

The following dependencies are included in this API:

- `dotenv`: Loads environment variables from a `.env` file.
- `esbuild`: Bundler for JavaScript and TypeScript.
- `express`: Web framework for building APIs.
- `mongoose`: MongoDB object modeling tool.
- `rimraf`: A cross-platform tool for removing files and directories.
- `nodemon`: A development utility that monitors for changes and restarts your server.

## Author

This API is created and maintained by SpicoDer.

## License

This project is licensed under the ISC License.

Feel free to customize and extend this API to suit your project's needs. Happy coding!
