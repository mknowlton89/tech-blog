# 14 Model-View-Controller (MVC): Tech Blog

## Your Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
G̶I̶V̶E̶N̶ a̶ C̶M̶S̶-̶s̶t̶y̶l̶e̶ b̶l̶o̶g̶ s̶i̶t̶e̶
W̶H̶E̶N̶ I̶ v̶i̶s̶i̶t̶ t̶h̶e̶ s̶i̶t̶e̶ f̶o̶r̶ t̶h̶e̶ f̶i̶r̶s̶t̶ t̶i̶m̶e̶
T̶H̶E̶N̶ I̶ a̶m̶ p̶r̶e̶s̶e̶n̶t̶e̶d̶ w̶i̶t̶h̶ t̶h̶e̶ h̶o̶m̶e̶p̶a̶g̶e̶,̶ w̶h̶i̶c̶h̶ i̶n̶c̶l̶u̶d̶e̶s̶ e̶x̶i̶s̶t̶i̶n̶g̶ b̶l̶o̶g̶ p̶o̶s̶t̶s̶ i̶f̶ a̶n̶y̶ h̶a̶v̶e̶ b̶e̶e̶n̶ p̶o̶s̶t̶e̶d̶;̶ n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶ l̶i̶n̶k̶s̶ f̶o̶r̶ t̶h̶e̶ h̶o̶m̶e̶p̶a̶g̶e̶ a̶n̶d̶ t̶h̶e̶ d̶a̶s̶h̶b̶o̶a̶r̶d̶;̶ a̶n̶d̶ t̶h̶e̶ o̶p̶t̶i̶o̶n̶ t̶o̶ l̶o̶g̶ i̶n̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ o̶n̶ t̶h̶e̶ h̶o̶m̶e̶p̶a̶g̶e̶ o̶p̶t̶i̶o̶n̶
T̶H̶E̶N̶ I̶ a̶m̶ t̶a̶k̶e̶n̶ t̶o̶ t̶h̶e̶ h̶o̶m̶e̶p̶a̶g̶e̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ o̶n̶ a̶n̶y̶ o̶t̶h̶e̶r̶ l̶i̶n̶k̶s̶ i̶n̶ t̶h̶e̶ n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶
T̶H̶E̶N̶ I̶ a̶m̶ p̶r̶o̶m̶p̶t̶e̶d̶ t̶o̶ e̶i̶t̶h̶e̶r̶ s̶i̶g̶n̶ u̶p̶ o̶r̶ s̶i̶g̶n̶ i̶n̶
W̶H̶E̶N̶ I̶ c̶h̶o̶o̶s̶e̶ t̶o̶ s̶i̶g̶n̶ u̶p̶
T̶H̶E̶N̶ I̶ a̶m̶ p̶r̶o̶m̶p̶t̶e̶d̶ t̶o̶ c̶r̶e̶a̶t̶e̶ a̶ u̶s̶e̶r̶n̶a̶m̶e̶ a̶n̶d̶ p̶a̶s̶s̶w̶o̶r̶d̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ o̶n̶ t̶h̶e̶ s̶i̶g̶n̶-̶u̶p̶ b̶u̶t̶t̶o̶n̶
T̶H̶E̶N̶ m̶y̶ u̶s̶e̶r̶ c̶r̶e̶d̶e̶n̶t̶i̶a̶l̶s̶ a̶r̶e̶ s̶a̶v̶e̶d̶ a̶n̶d̶ I̶ a̶m̶ l̶o̶g̶g̶e̶d̶ i̶n̶t̶o̶ t̶h̶e̶ s̶i̶t̶e̶
W̶H̶E̶N̶ I̶ r̶e̶v̶i̶s̶i̶t̶ t̶h̶e̶ s̶i̶t̶e̶ a̶t̶ a̶ l̶a̶t̶e̶r̶ t̶i̶m̶e̶ a̶n̶d̶ c̶h̶o̶o̶s̶e̶ t̶o̶ s̶i̶g̶n̶ i̶n̶
T̶H̶E̶N̶ I̶ a̶m̶ p̶r̶o̶m̶p̶t̶e̶d̶ t̶o̶ e̶n̶t̶e̶r̶ m̶y̶ u̶s̶e̶r̶n̶a̶m̶e̶ a̶n̶d̶ p̶a̶s̶s̶w̶o̶r̶d̶
W̶H̶E̶N̶ I̶ a̶m̶ s̶i̶g̶n̶e̶d̶ i̶n̶ t̶o̶ t̶h̶e̶ s̶i̶t̶e̶
T̶H̶E̶N̶ I̶ s̶e̶e̶ n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶ l̶i̶n̶k̶s̶ f̶o̶r̶ t̶h̶e̶ h̶o̶m̶e̶p̶a̶g̶e̶,̶ t̶h̶e̶ d̶a̶s̶h̶b̶o̶a̶r̶d̶,̶ a̶n̶d̶ t̶h̶e̶ o̶p̶t̶i̶o̶n̶ t̶o̶ l̶o̶g̶ o̶u̶t̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ o̶n̶ t̶h̶e̶ h̶o̶m̶e̶p̶a̶g̶e̶ o̶p̶t̶i̶o̶n̶ i̶n̶ t̶h̶e̶ n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶
T̶H̶E̶N̶ I̶ a̶m̶ t̶a̶k̶e̶n̶ t̶o̶ t̶h̶e̶ h̶o̶m̶e̶p̶a̶g̶e̶ a̶n̶d̶ p̶r̶e̶s̶e̶n̶t̶e̶d̶ w̶i̶t̶h̶ e̶x̶i̶s̶t̶i̶n̶g̶ b̶l̶o̶g̶ p̶o̶s̶t̶s̶ t̶h̶a̶t̶ i̶n̶c̶l̶u̶d̶e̶ t̶h̶e̶ p̶o̶s̶t̶ t̶i̶t̶l̶e̶ a̶n̶d̶ t̶h̶e̶ d̶a̶t̶e̶ c̶r̶e̶a̶t̶e̶d̶
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ o̶n̶ t̶h̶e̶ d̶a̶s̶h̶b̶o̶a̶r̶d̶ o̶p̶t̶i̶o̶n̶ i̶n̶ t̶h̶e̶ n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶
T̶H̶E̶N̶ I̶ a̶m̶ t̶a̶k̶e̶n̶ t̶o̶ t̶h̶e̶ d̶a̶s̶h̶b̶o̶a̶r̶d̶ a̶n̶d̶ p̶r̶e̶s̶e̶n̶t̶e̶d̶ w̶i̶t̶h̶ a̶n̶y̶ b̶l̶o̶g̶ p̶o̶s̶t̶s̶ I̶ h̶a̶v̶e̶ a̶l̶r̶e̶a̶d̶y̶ c̶r̶e̶a̶t̶e̶d̶ a̶n̶d̶ t̶h̶e̶ o̶p̶t̶i̶o̶n̶ t̶o̶ a̶d̶d̶ a̶ n̶e̶w̶ b̶l̶o̶g̶ p̶o̶s̶t̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ o̶n̶ t̶h̶e̶ b̶u̶t̶t̶o̶n̶ t̶o̶ a̶d̶d̶ a̶ n̶e̶w̶ b̶l̶o̶g̶ p̶o̶s̶t̶
T̶H̶E̶N̶ I̶ a̶m̶ p̶r̶o̶m̶p̶t̶e̶d̶ t̶o̶ e̶n̶t̶e̶r̶ b̶o̶t̶h̶ a̶ t̶i̶t̶l̶e̶ a̶n̶d̶ c̶o̶n̶t̶e̶n̶t̶s̶ f̶o̶r̶ m̶y̶ b̶l̶o̶g̶ p̶o̶s̶t̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ o̶n̶ t̶h̶e̶ b̶u̶t̶t̶o̶n̶ t̶o̶ c̶r̶e̶a̶t̶e̶ a̶ n̶e̶w̶ b̶l̶o̶g̶ p̶o̶s̶t̶
T̶H̶E̶N̶ t̶h̶e̶ t̶i̶t̶l̶e̶ a̶n̶d̶ c̶o̶n̶t̶e̶n̶t̶s̶ o̶f̶ m̶y̶ p̶o̶s̶t̶ a̶r̶e̶ s̶a̶v̶e̶d̶ a̶n̶d̶ I̶ a̶m̶ t̶a̶k̶e̶n̶ b̶a̶c̶k̶ t̶o̶ a̶n̶ u̶p̶d̶a̶t̶e̶d̶ d̶a̶s̶h̶b̶o̶a̶r̶d̶ w̶i̶t̶h̶ m̶y̶ n̶e̶w̶ b̶l̶o̶g̶ p̶o̶s̶t̶
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ o̶n̶ t̶h̶e̶ l̶o̶g̶o̶u̶t̶ o̶p̶t̶i̶o̶n̶ i̶n̶ t̶h̶e̶ n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶
T̶H̶E̶N̶ I̶ a̶m̶ s̶i̶g̶n̶e̶d̶ o̶u̶t̶ o̶f̶ t̶h̶e̶ s̶i̶t̶e̶
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site 
```

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Getting Started

Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

## Grading Requirements

This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Application’s folder structure follows the Model-View-Controller paradigm.

    * Uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views.

    * Application must be deployed to Heroku.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.