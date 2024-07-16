// Java Program Illustrating Utility class for Connecting
// and Querying the Database

package com.example.demo.controller;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.sql.DataSource;
import com.example.demo.model.User;
import com.example.demo.config.ConfigDataSource;
 
// Annotation to provide logging feature
 
// Class
public class JDBC {
 
    public int insert(User user)
    {
        DataSource dataSource = null;
        Connection connection = null;
        PreparedStatement prepStatement = null;
 
        int result = 0;
        try {
 
            // Get the configured datasource
            dataSource = ConfigDataSource.source();
            // Attempt for connection to MySQL
            connection = dataSource.getConnection();
            prepStatement = connection.prepareStatement(
                    "insert into user (user,username,password) values (?,?,?)");
            prepStatement.setString(1, user.getFirstName());
            prepStatement.setString(2, user.getEmail());
            prepStatement.setString(3, user.getPassword());
 
            result = prepStatement.executeUpdate();
        }
        catch (SQLException e) {
            //log.getName();
            System.out.println("FAILED");
        }
 
        return result;
    }
}