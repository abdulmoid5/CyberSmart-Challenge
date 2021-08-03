# CyberSmart-Challenge

We’d like to answer the question:
<br>
'Does the weather influence my computer’s core temperature?’<br>
Hence we’d like you to create an application that:
(1) reads the CPU temperature from the machine
(2) reads the ambient temperature from a weather API (feel free to choose one but https://openweathermap.org/api looks suitable)
(3) displays these two temperatures
(4) Run 1 and 2 above every 30 minutes, collect and store the last 100 results locally. Please note that the task should run regardless of
the fact that the mobile screen is off (eg, the user is not using the mobile phone) or if the application is suspended or sleeping.

## To start node backend in order to fetch CPU temperature 
    cd cpuTemp
    node server.js
    
 Do make sure the URL in 
      <br> 
   tempApp/api/client.js 
is either set to lcoal host http://localhost:3000/ or to your local IP in order for the API to work. (AVD manager does not support localhost but a specific IP.
    
## To run mobile app 
    
    cd tempApp
    npm install
    cd ios 
    pod install
    react-native run-ios
    react-native run-android
 
 make sure you chage directory from parent folder.
 

    


