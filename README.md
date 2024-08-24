# CloudViewer
## Overview

This project allows you to upload files to AWS S3 and view them through a web interface. It also integrates with MongoDB for managing file metadata.

## Getting Started

### Prerequisites

- **Node.js** and **npm**
- **AWS Account** with S3 access
- **MongoDB Atlas** account

### Setup Instructions

#### 1. Obtain AWS S3 Credentials

To configure AWS S3 access, you need the following credentials:

1. **Sign in to AWS Management Console**:
   - Go to [AWS Management Console](https://aws.amazon.com/console/).

2. **Navigate to IAM**:
   - Search for **IAM** (Identity and Access Management) and select it.

3. **Create a New User**:
   - Click on **Users** and then **Add user**.
   - Enter a user name (e.g., `s3-user`).
   - Select **Programmatic access** as the access type.

4. **Attach Permissions**:
   - Choose **Attach policies directly**.
   - Attach the **AmazonS3FullAccess** policy to the user.

5. **Download Credentials**:
   - Save the **Access key ID** and **Secret access key** for future use.

6. **Set Up Environment Variables**:
   - Add the following environment variables to your `.env` file:
     ```
     AWS_ACCESS_KEY_ID=your-access-key-id
     AWS_SECRET_ACCESS_KEY=your-secret-access-key
     AWS_REGION=your-region
     ```

#### 2. Obtain MongoDB URL

To configure MongoDB access, follow these steps:

1. **Sign in to MongoDB Atlas**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

2. **Create a Cluster**:
   - Follow the instructions to create a new cluster if you haven't already.

3. **Get Connection String**:
   - In your MongoDB Atlas dashboard, navigate to **Connect**.
   - Select **Connect your application**.
   - Copy the **Connection String**.

4. **Set Up Environment Variables**:
   - Add the following environment variable to your `.env` file:
     ```
     MONGODB_URI=your-mongodb-connection-string
     ```

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   
2. **Navigate to the Project Directory:**:
   ```bash
   cd ./my-app

3. **Install Dependencies:y**:
   ```bash
   npm install 

4. **Navigate to the backend Directory:**:
   ```bash
   cd ./backend

5. **Install Dependencies:y**:
   ```bash
   npm install 


## Contact
### Email : asmore7.sonu7@gmail.com
