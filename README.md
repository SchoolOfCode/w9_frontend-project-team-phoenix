![Logo](https://russellventura.co.uk/wp-content/uploads/2022/06/TeamPhoenix.png)
TEAM PHOENIX
# Frontend Brief
Create a frontend app that will improve the lives of boot campers.

# What problem does our app solve?

We asked ourselves the following 3 questions:

- What can help them with the vast amount of learning there is to do as a new developer?
- What do they need?
- What problem might they have that your application could solve for them?

Create a minimum viable product (MVP) showcasing an innovative full stack application which meets the user need you’ve identified

# Features 

Our project application included the following:


- User experience created in React
- Built and managed in an agile way
- Utilised testing for ensuring robust code
- Pulldown button to select week
- Feedback form
- FAQ page


# Component Tree

### SelectForm Component -
- Props - onchange function which comes from HelpCamper component

### Feedback compontent -
- useState to rerender after submit

### HelpCamper -
- info State contains all data from fetch request
- Weeknumber State stores week number that the user selects from SelectForm component
- useEffect rerenders every time the week changes
- SelectForm is passed the handleChange function as a prop
- ResourceSelector is passed the info state after it takes API data

### ResourceSelector component -
- Props - info which is passed down from HelpCamper component
- DisplayResource is passed the data prop 

### DisplayResource - 
- Props - data (payload from fetch request) and comes from Resource selector


# Environment Variables
To run this project, you will need to add the following environment variables to your .env file
`PORT=3002`

The reason for this being we manually separated the port numbers our front and backend's were running on.

# Libraries
- React
- CSS
- React Routes Library
- React Router
- React Social icons 


# Roadmap
- Complete feedback form so it pushes to backend database

# Authors
- [@AbdullahiMohamoud](https://github.com/Abdu11ahi)
- [@KhulvimdaMall](https://github.com/KhullyMall)
- [@Min-Chih Yang](https://github.com/Min-Chih)


# Here's a link to our backend repo

- [@Backend Repo](https://github.com/SchoolOfCode/w9_backend-project-team-phoenix)

