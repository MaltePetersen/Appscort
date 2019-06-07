package de.appscort.backend.security;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        argumentResolvers.add(createUserDetailsResolver());
    }

    @Bean
    public UserDetailsArgumentResolver createUserDetailsResolver() {
        return new UserDetailsArgumentResolver();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("HEAD","OPTIONS")
                .allowedHeaders("Origin", "X-Requested-With", "Content-Type", "Accept","Accept-Encoding", "Accept-Language","Access-Control-Request-Headers","Access-Control-Request-Method","Connection","Origin", "Host", "User-Agent" );

    }

}
