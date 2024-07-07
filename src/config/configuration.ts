export default () => ({
    port: parseInt(process.env.PORT),
    secret: process.env.SECRET_KEY,
    jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    
    
    // Database configurations
    mongoUrl: process.env.MONGO_URL,
    

  
  });
  