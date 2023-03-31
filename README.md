# ctflow-demo

# How to run

## Run demo project on Github Codespaces
- Login to github, init a new space
<img width="736" alt="image" src="https://user-images.githubusercontent.com/2922275/228818832-06a7f824-02d0-4af0-8d2b-938f42511a1d.png">

<img width="905" alt="image" src="https://user-images.githubusercontent.com/2922275/228818749-a9ed410b-2519-437f-80c9-65540a14d0fd.png">
<img width="1392" alt="image" src="https://user-images.githubusercontent.com/2922275/228819337-81ba6f45-133d-4eb0-b3ae-43d80720ddb2.png">

- Run the portforward for 6080 if needed
<img width="742" alt="image" src="https://user-images.githubusercontent.com/2922275/228819510-2d8e6536-270f-44e4-9dd7-1e6b7c2eecd4.png">
- Visit the website your_url:6080 then put the password `ctflow-demo` to access the UI
<img width="1055" alt="image" src="https://user-images.githubusercontent.com/2922275/228819969-ffbe0b6b-d9da-4cd9-b425-c6299cbd6a3e.png">

- On the terminal `Ctrl + J` or `CMD + J`, run 
  - `npx cypress install`
  - `npx cypress open` 
  - then you will see the cypress app is open on the GUI.

<img width="1414" alt="image" src="https://user-images.githubusercontent.com/2922275/228820391-fe718333-2f60-4ac2-9640-3f4998b34dd2.png">

- Start testing with your favorite browser (default is electron).
- Change one of the ctflow file, click save & run to see the update.
