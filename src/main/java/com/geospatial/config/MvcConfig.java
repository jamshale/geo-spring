package com.geospatial.config;



import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer{

    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {"classpath:/resources/", "classpath:/static/"};

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
    }


    
    // @Bean
    // public TomcatServletWebServerFactory servletContainer() {
    //     TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory() {
    //       @Override
    //       protected void postProcessContext(Context context) {
    //         SecurityConstraint securityConstraint = new SecurityConstraint();
    //         securityConstraint.setUserConstraint("CONFIDENTIAL");
    //         SecurityCollection collection = new SecurityCollection();
    //         collection.addPattern("/*");
    //         securityConstraint.addCollection(collection);
    //         context.addConstraint(securityConstraint);
    //       }
    //     };
      
    //   //tomcat.addAdditionalTomcatConnectors(initiateHttpConnector());
    //   return tomcat;
    // }
    
    // private Connector initiateHttpConnector() {
    //   Connector connector = new Connector("org.apache.coyote.http11.Http11NioProtocol");
    //   connector.setScheme("http");
    //   connector.setPort(80);
    //   connector.setSecure(false);
    //   connector.setRedirectPort(443);
      
    //   return connector;
    // }

}