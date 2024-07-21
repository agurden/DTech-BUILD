# Run Instructions

<big><strong>

1) Open a terminal window. <br> <br>

2) Navigate to the directory where you want to clone the repository.
   ```sh
   cd path/to/your/directory
    ``` 

3) Clone the repository using "git clone" followed by the repository URL.
   ```sh
   git clone https://github.com/username/repository-name.git
    ```
4) Navigate to the cloned repository.
   ```sh
   cd repository-name
    ```
5) Pull the latest changes from the desired branch.
   ```sh
   git pull origin branch-name
    ```
6) Run the backend.
   ```sh
   mvn spring-boot:run
   ```
7) Switch to frontend folder.
   ```sh
   cd front
   ```
8) Run the frontend.
   ```shell
    npm start
    ```
</strong></big>

## Run Database Locally
Annie worked on adding a database; we were able to sync this morning and get them to a point where there's a user table to be used.

One-time local setup instructions from within DTech-Build repo (top package) in terminal:

```cd database docker compose up ```

To connect and view the DB (please no manual changes:

```mysql -h 127.0.0.1 -P 3306 -u root -p ```
Use password "password" when prompted.

To add to the database for others to create upon startup:

- To include a new column to an existing table, add new columns with their name and variable type
- To include a new table, add a `CREATE TABLE` statement to `initiate.sql`
- After adding to the database or to integrate others' changes, remove your existing local database with `docker compose down -v` before doing `docker compose up` to update your local database schema(s).
