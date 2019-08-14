package com.geospatial.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }

    @Bean
    @Override
    public UserDetailsService userDetailsService() {
        UserDetails client =
             User.withDefaultPasswordEncoder()
                .username("masterClient")
                .password("pass123")
                .roles("CLIENT")
                .build();

        return new InMemoryUserDetailsManager(client);
    }
   

    // @Override
    // protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    //     Client masterClient = new Client("masterClient", "pass123");
    //      masterClient.roles(client);

    //     try{
    //         auth.userDetailsService(this.userDetailsService());
    //     } catch (Exception e) {
    //         System.out.println(e);
    //     }
                 
    // }

    @Override
    public void configure(WebSecurity web) throws Exception {
        //Web resources
     
            web.ignoring().antMatchers("/css/**");
            web.ignoring().antMatchers("/js/**");
            web.ignoring().antMatchers("/images/**");
        
       
    }


    

}

