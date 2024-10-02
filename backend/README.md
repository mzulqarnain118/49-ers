# Project Setup

This guide will walk you through the process of setting up the project, including installing dependencies, configuring the database, and running the Python worker with Redis for background data processing.

## Prerequisites

Make sure you have the following software installed on your machine:

- PHP (8.3)
- Composer (for PHP dependencies)
- MySQL or any other SQL database
- Redis
- Python (>=3.6)
- `pip` (Python package manager)

## Installation Steps

### 1. Install PHP Dependencies with Composer

Run the following command to install PHP dependencies using Composer:

composer install

### 2. Database Configuration

Change database configuration in the file app/Config/Database.php to match your local setup.

Import the database schema from app/schema.sql into your database.

### 3. Run PHP Built-in Server

php -S localhost:8000 -t public


### 4. Queue Worker

pip install redis pymysql

python queue_worker.py


