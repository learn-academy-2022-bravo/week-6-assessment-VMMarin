# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Been there!  First, let's address what a foreign key is. A foreign key is a column in a relational database table that provides a link between data in two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them. In this case, table Cohort has_many, students belong to Cohort. Every table has primary key - id:number.
   The foreign key is reference to another table's primary key

  Researched answer: Been there!  First, let's address what a foreign key is. A foreign key is a column in a relational database table that provides a link between data in two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them. In this case, table Cohort has_many, students belong to Cohort.Every table has primary key - id:number. The foreign key is reference to another table's primary key
  Example of how to fix the issue
        - rails g model Student name:string cohort_id:integer    
        - rails db:migrate
        - in rails app models
            in cohort.rb --- has_many :students
            in student.rb --- belongs_to :cohort



2. Which RESTful routes must always be passed params? Why?

  Your answer: 
    - Create -creates a new instance of the model therefore we must set a paramter of which model we are assigning the new thing to.
      EXAMPLE:
            - def create
              @instancevariable = Model.create(word_params)  

    -  Edit - a form for the user to fill out, in order for a (as an example) to be edited we must pass in the parameters (id) assigned to it.
    -  Update - takes the parameters from the form and updates the existing database instance
    EXAMPLE: 
    def update
            student = Student.find(params[:id])
            student.update(student_params)
    -  Destroy - in order for a blog post (as an example) to be deleted we must pass in the parameters (id) assigned to it.

  Researched answer:
     - Create -creates a new instance of the model therefore we must set a paramter of which model we are assigning the new thing to.
      EXAMPLE:
              @student = Student.create(student_params)  

    -  Edit - a form for the user to fill out, in order for a (as an example) to be edited we must pass in the parameters (id) assigned to it.
      EXAMPLE:
       @student = Student.find_by(params[:id])
      render “edit.html.erb”
      end

    -  Update - takes the parameters from the form and updates the existing database instance
    EXAMPLE: 
    def update
            student = Student.find(parmas[:id])
            student.update(student_params)

    -  Destroy - in order for a blog post (as an example) to be deleted we must pass in the parameters (id) assigned to it.



3. Name three rails generator commands. What is created by each?

  Your answer:
  1. rails generate resource - does everything generating a model does, but it also creates a resource in the routes.rb file and an empty folder in the views. Example: resource name along with the table column names and types. Everything is set.  NO SETTING ROUTES. Thank the Rails overlords. 
    - rails g resource Student name:string cohort:string
  2. rails generate controller - creates a new controller
    - rails generate controller NAME [action action] [options]
  3. rails generate migration - Migrations are used to modify the shape of an existing database - this cn include adding or deleting columns, changing the name of the column, or changing the data type of a column.

  Researched answer:

    1. rails generate resource - does everything generating a model does, but it also creates a resource in the routes.rb file and an empty folder in the views. Example: resource name along with the table column names and types. Everything is set.  NO SETTING ROUTES. Thank the Rails overlords. 
    - rails g resource Student name:string cohort:string
   2. rails generate controller - creates a new controller
    - rails generate controller Cohort [action action] [options]
    - For example, to generate a controller for a Cohort model, with #index and #show actions you would run rails generate controller cohorts index show. Also creates folder inside app/views/, containing the two templates for the controller's actions. 
   3. rails generate migration - Migrations are used to modify the shape of an existing database - adding or deleting columns, changing the name or changing the data type of a column. Migration names start with an action that describes the purpose of the migration (i.e. create, add, remove, etc). The migration name ends with the name of the table (add_item_to_list)



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students   - index method

action: "POST"   location: /students  -  create method    

action: "GET"    location: /students/new - new method - form

action: "GET"    location: /students/2  - show (show one piece - show student id: 2

action: "GET"    location: /students/2/edit   - edit student id: 2 (form)

action: "PATCH"  location: /students/2   - update - modifying student id: 2

action: "DELETE" location: /students/2      destroy - remove student id: 2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a developer, I can create a class called Task.

- As a developer, upon initialization, I can give my Task a status of incomplete, which will be set to true.

- As a developer, I can give my Task a completion time of 0 upon creation.

 - As a developer, I can initialize each instance of class Task with a title.

 - As a developer, I can create five instances of class Task.

- As a developer, I can see the title of each instance of class Task.

- As a developer, I can return my Task's title, as well as if it's complete

-  As a developer, I can update the status of each instance of class Task when the task has been completed.

- As a developer I can create Daily Tasks that inhereit from Tasks

- As a developer, I can initialize all of my Daily Tasks to have an assigned week_day