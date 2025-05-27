# Unit Converter

A modern Angular application for unit conversions including weight, temperature, and distance measurements.

## Features

- **Weight**: Convert between kilograms and pounds
- **Temperature**: Convert between Celsius and Fahrenheit
- **Distance**: Convert between meters and miles
- Responsive design with Material UI components

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
npm start
```

Visit `http://localhost:4200`

### Docker Deployment

```bash
docker build -t unit-converter .
docker run -p 8080:8080 unit-converter
```

Visit `http://localhost:8080`

## Tech Stack

- Angular 18
- Angular Material
- TypeScript
- Docker & Nginx
