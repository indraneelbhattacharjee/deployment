# Technogaze

## Background

Team Technogaze was formed by the students of California State University - Sacramento to develop infrastructure solutions for Bay Develops and to complete their Senior Project requirements. This team is led by Indraneel Bhattacharjee and consists of 7 more team members who are engineers, developers, and UI/UX Designers.

## Team information

1. Indraneel Bhattacharjee
2. Dip Patel
3. Sanjot Chandi
4. Saniya Patel
5. Cathy Khong
6. Tanner Colbert
7. Kevinpreet Singh
8. Julian Martinez

Repository for CSC 190 - Infrastructure Development for Bay Develops

## Install
To rebuild the project, run the following commands in order:
* Make sure `node` is in your path.
* `git clone https://github.com/RUKRAZ/Technogaze.git` - latest version on GitHub
* `npm install --global yarn` - installing the package manager
* `yarn add --save react react-dom @types/react @types/react-dom` -install dependencies
* `npm update react-icons` - install icons for social media platforms

## Configuration
To run using yarn, input the following commands in order:
*`yarn`
*`yarn start `

## Usage

Once the webpage is running, point your browser to http://localhost:3000 to access the web interface.

## API

StripeAPI: For payment.

Auth0: For user authentication.

OpenAI: For custom chatbot. 

## Testing

## Deployment

## Developer Instructions

Here is a tutorial on how to get the repo onto your local machine as well as pushing and pulling.

Step 1: Go to our main repo on github here is the link. https://github.com/RUKRAZ/Technogaze
Step 2: Click on code and drop down menu will apear. Leave it on the HTTPS tab and copy that url.
Step 3: Now that you have the link open up your command prompt and change the directiory to where you would like the project to be.
Step 4: type in this command git clone https://github.com/RUKRAZ/Technogaze.git
Step 5: Now you have the project on your local machine.
Step 6: Download and Install GitHub Desktop this will allow for updating your branch and push to the main without having to use the command prompt
Step 7: Sign into GituHub Desktop and then open your repo. Choose the branch you would like to work on and then open it in your IDE make changes come back to the Github Desktop and it will say would you like to push. You click that then you will make a pull request to the main branch now you are all done
## Key Milestones

## UI/UX
Logo: 

<img width="304" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/471480cb-e549-48bf-bc63-19b808e70125">
Logo with transparent background (what we use):

![Bay Develops Logo](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/baydevelopslogo-1-1%402x.png)

### Web Pages

<img width="505" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/49dd99a4-730c-422c-84bd-6c747e6aa908">

<img width="544" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/117cbc56-f6fa-4166-83a5-a5f88c2fa070">

![Dashboard](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Mockups/User%20Dashboard.jpg)

![Contact Us](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Mockups/Contact%20Us.png)

![Services](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Mockups/ServicesPage.jpg)

## ERD 

![ERD](https://github.com/RUKRAZ/Technogaze/blob/main/src/Database/erd.png)

## Flow Diagram

![Flow Diagram](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Bay%20Develops%20Flow.jpg)

## Database

The database was developed using Postgre SQL and was connected to the server via node.js endpoints that can be found in the “server.js” file in the “backend” folder. 

Tables:
1. User
2. Employee
3. Dashboard
4. Project
5. Transaction

Interactions:
1. When the employee makes an update to the “To-Do List” or the “Project” section of the employee dashboard the employee dashboard and user dashboard are updated. Which requires the Dashboard table to be updated with this new information.
2. When the employee creates a project it gets saved to the Project table.
3. When a user purchases a product the “Recommended Products” section of the user dashboard and the “Clients” section of the employee dashboard must be updated. The transaction information gets saved in the Transaction table. The corresponding product icon will be removed from the “Recommended Products” tab and the client information along with what product they bought will be displayed in the “Clients” tab.

