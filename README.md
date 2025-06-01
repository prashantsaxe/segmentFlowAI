# Mini CRM Platform

## Overview
The Mini CRM Platform is designed to enable customer segmentation, personalized campaign delivery, and intelligent insights. It leverages modern technologies and approaches to provide a seamless experience for managing customer relationships and marketing campaigns.

## Features
- **Data Ingestion APIs**: Secure REST APIs for ingesting customer and order data with asynchronous processing using Kafka.
- **Campaign Creation UI**: A user-friendly web application for defining audience segments and creating campaigns.
- **Campaign Delivery & Logging**: Initiates campaigns and logs delivery statuses, simulating real-world delivery success and failure.
- **Authentication**: Google OAuth 2.0-based authentication to ensure secure access.
- **AI Integration**: Incorporates AI features for natural language processing, message suggestions, and performance summarization.

## Tech Stack
- **Frontend**: React.js with Vite and Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Message Broker**: Kafka for pub-sub architecture
- **AI Tools**: Integration with public AI APIs for enhanced functionality

## Project Structure
```
mini-crm-platform
├── frontend
│   ├── src
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
├── backend
│   ├── src
│   ├── package.json
│   └── server.js
├── kafka-consumers
│   ├── src
│   ├── package.json
│   └── index.js
├── vendor-api-simulator
│   ├── src
│   ├── package.json
│   └── server.js
├── docker-compose.yml
├── .env.example
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Kafka

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm start
   ```

### Kafka Consumers Setup
1. Navigate to the `kafka-consumers` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the Kafka consumers:
   ```
   node index.js
   ```

### Vendor API Simulator Setup
1. Navigate to the `vendor-api-simulator` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the vendor API simulator:
   ```
   node server.js
   ```

## Architecture Diagram
![Architecture Diagram](link-to-architecture-diagram)

## AI Tools and Technologies Used
- OpenAI API for natural language processing and message suggestions.
- Custom AI models for audience segmentation and campaign performance analysis.

## Known Limitations
- The AI features are dependent on the availability of external APIs.
- The system is designed for demonstration purposes and may require optimizations for production use.

## Conclusion
This Mini CRM Platform serves as a comprehensive solution for managing customer relationships and marketing campaigns, integrating modern technologies and AI capabilities to enhance user experience and operational efficiency.# segmentFlowAI
