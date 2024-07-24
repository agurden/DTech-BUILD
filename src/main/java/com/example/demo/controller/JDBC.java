package com.example.demo.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.sql.DataSource;
import com.example.demo.model.User;
import com.example.demo.config.ConfigDataSource;
// import lombok.extern.slf4j.Slf4j; // Uncomment if using Lombok for logging

// Class
public class JDBC {

    public int insertUser(User user) {
        DataSource dataSource = null;
        Connection connection = null;
        PreparedStatement prepStatement = null;
        System.out.println("inserting user");
        int result = 0;
        try {
            // Get the configured datasource
            dataSource = ConfigDataSource.source();
            System.out.println("got datasource");
            // Attempt for connection to MySQL
            connection = dataSource.getConnection();
            System.out.println("got connection");
            prepStatement = connection.prepareStatement(
                    "insert into users (name, email) values (?, ?)");
            prepStatement.setString(1, user.getFirstName());
            prepStatement.setString(2, user.getEmail());

            result = prepStatement.executeUpdate();
        } catch (SQLException e) {
            // log.getName(); // Uncomment and use if you have logging configured
            System.out.println(e.getMessage());
        } finally {
            // Close resources
            try {
                if (prepStatement != null) prepStatement.close();
                if (connection != null) connection.close();
            } catch (SQLException ex) {
                System.out.println(ex.getMessage());
            }
        }

        return result;
    }
}
