# A MERN TODO APP
## A todo list app made using Reactjs

This Reactjs project includes : 
1. Use of packages like react-router-dom, reoil and tailwindcss -> Frontend
2. Use of nodeJs, express, jsonwebtoken, bcryptJs -> Backend
3. It uses mongoDb as database
4. It is responsive
5. It also contains a custom made calendar with momentJs

Function :
1. This web app helps to create and manage tasks.
2. It has a authentication system (powered by Jsonwebtoken), password hashing (powered by bcrypt.js)

![Screenshot 2022-06-13 004906](https://user-images.githubusercontent.com/85030597/173250306-c008dd09-7ca9-4367-836e-9a2e21d7fd77.png)

![Screenshot 2022-06-13 004947](https://user-images.githubusercontent.com/85030597/173250316-4d7a35ed-17c7-46d6-93d7-187e3414b21b.png)

![Screenshot 2022-06-13 010847](https://user-images.githubusercontent.com/85030597/173250361-152d5698-e1b3-4878-a781-5cd596ec3c1c.png)


Hosting:
1. The backend is hosted on heroku
2. The fronted is hosted on vercel
3. DB is hosted by mongoDB atlas

### This app is depolyed to : http://merntodoapp.vercel.app


## How to run this app locally:
1. Clone the whole repo.
2. Open 'react' and 'backend' folders in terminal separately.
3. Run 'npm i' on both. (This will install all the required packages)

  ```bash
  npm i
  ```

4. In 'backend' terminal -> run -> 
  ```bash
  nodemon index
  ```
5. Record the localhost url at which server is running.
By default app runs on : **http://localhost:5500**
 

![Screenshot 2022-06-13 002208](https://user-images.githubusercontent.com/85030597/173248816-eaa2a04f-35f3-401d-bce5-92eb180a5855.png)

6. Create a .env file and enter "REACT_APP_URL" as key and localhost url as its key.

![Screenshot 2022-06-13 002702](https://user-images.githubusercontent.com/85030597/173249211-9e6e7582-55d6-455a-a088-751c10714a4e.png)


7. Open 'react' folder in the terminal -> run -> npm run start 
8. This will spin up the react dev Server.

## Components :
1. Sidebar: Acts as a menu bar
2. Center : Displays the current , in review and done tasks
3. RightSide: Displays user's information and analysis
4. Calendar : Uses MomentJs and displays a calendar. Upon clicking modal opens to add task.
5. Login : Provides interface for logging in
6. Create New User : provides interface for creating new user 






