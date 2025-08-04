# Node.js CI/CD Pipeline with GitHub Actions & Docker

This project demonstrates how to automate the build and deployment of a Node.js web application using GitHub Actions and Docker.

---

## Project Overview

The goal is to set up a Continuous Integration/Continuous Deployment (CI/CD) pipeline using GitHub Actions that:

1. Installs dependencies
2. Runs tests (optional)
3. Builds a Docker image
4. Pushes the image to DockerHub

---

## Tech Stack

- **Node.js**
- **Express.js**
- **Docker**
- **GitHub Actions**
- **DockerHub**

---

## 📁 Project Structure

      nodejs-demo-app/
      ├── app.js
      ├── package.json
      ├── Dockerfile
      └── .github/
      └── workflows/
      └── main.yml
