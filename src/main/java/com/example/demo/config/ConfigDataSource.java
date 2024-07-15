// Java Program Illustrating Configuration of
// DataSourceConfiguration of DataSource
 
package gfg;
 
import javax.sql.DataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
 
// Annotation
@Configuration
 
// Class
public class ConfigDataSource {
 
    @Bean public static DataSource source()
    {
 
        DataSourceBuilder<?> dSB
            = DataSourceBuilder.create();
        dSB.driverClassName("com.mysql.jdbc.Driver");
 
        // MySQL specific url with database name
        dSB.url("jdbc:mysql://localhost:3306/db");
 
        // MySQL username credential
        dSB.username("user");
 
        // MySQL password credential
        dSB.password("password");
 
        return dSB.build();
    }
}