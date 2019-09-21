package com.ksh.formdemo;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@SpringBootApplication
@EnableWebSecurity

public class FormApplication extends WebSecurityConfigurerAdapter {
	

	public static void main(String[] args) {
		SpringApplication.run(FormApplication.class, args);
	}
	
	protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/", "/js/**", "/css/**", "/api/**").permitAll()
                .antMatchers("/worklist.html").authenticated()
                .and()
                .formLogin()
                .loginPage("/login.html").defaultSuccessUrl("/index.html")
                .and()
                .logout().clearAuthentication(true).permitAll();
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth, DataSource dataSource, PasswordEncoder passwordEncoder) throws Exception {
        auth.jdbcAuthentication().dataSource(dataSource).passwordEncoder(passwordEncoder)
                .usersByUsernameQuery("select name, password, enabled from users where name=?")
                .authoritiesByUsernameQuery("select name, role from users where name=?");
    }

}
