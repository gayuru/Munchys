# 🍣 **Munchys** 🍭
--
The time spent, searching for a possible recipe you can cook can 'eat up' your motivation to cook, or even 'overcook' your passion for it.  People can spend ridiculous amount of time searching for a recipe with the items they currently have in their pantries.  Yet they will struggle to find a descent recipe which will satisfy their taste buds. A lot of the household ingredients which is in the fridge ends up being thrown away as one couldn't find a suitable recipe to fit in all the 'old' ingredients in the fridge.  

We've come up with a solution to this by thinking of how to address all the above factors.

🍣 Introducing **Munchys !**
--
A solution for those looking for something to cook with their current ingredients. Munchys provides to the users recipes they can make with their ingredients as well as mentioning any missing ingredients to certain recipes. This will make sure that none of the ingredients are being wasted at home with perhaps ensuring giving great satisfaction to your taste buds.

Munchys was being built using Industry Leading Cloud Technologies to ensure that the user receives a high quality product with industry standard usability measures. This web app was being built thoroughly considering the following factors:

- User Experience / Design
- Fast Server Loading Times
- Fast API Processing Times
- Smooth and Usable Interface

# Intro

---

Introducing Munchys , an App which will save you thinking time and get tasty food into you as soon as possible. Ever sat down with a bunch of ingredients and were not sure of what to make?  Or maybe want to learn something new? Or Maybe want to go back and cook a favorite recipe you tried before? Well Munchys is the solution for you and everyone. 

**You may wonder what is Munchys?** 

Munchys is a website which allows you to search for recipes that you can cook with the ingredients you have. Example you have and Nutella and bananas, on search you will be listed with recipes consisting of these ingredients. When the recipes are listed, each recipe will display important information such as cooking time, serving count, missing ingredients, health score (how healthy it is) and if its vegan friendly or not. You can go to each individual recipes pages from there, where you will be displayed with everything you need to know about the recipe this includes, nutritional values, cooking steps, a checkbox for ingredients as well as providing and generated audio which reads the steps etc.

 Munchys also has a login feature which allows users to store their favourite recipes which they can access later saving precious time. Along side this Munchys also generates suggested recipes based on your likings which introduces many new recipes you will like based on your favourited recipes. One last surprise that Munchys gives is a 'taste your luck option' want to try something random and see what in store for you? spin the wheel and we will give you a fresh recipe to try. Maybe have a cook off and use it as a recipe generator? 

Munchy gives you a lot to enjoy and what we want? we want you all to save time, enjoy cooking with ease and most importantly cherish each recipe you cook while you eat it with pride and joy.

# Software Design & Architecture

---

The initial proposal was to follow the design and architecture displayed on the diagram below:

![Munchys%20cea057d1ada64f2faf0f13386cf639f0/Old_Design.png](Munchys%20cea057d1ada64f2faf0f13386cf639f0/Old_Design.png)

However, as development progressed we realized that due to the limitations of the AWS Educate account we were provided as well as some other issues  such as deploying the app onto the cloud and the WOOLWORTHS API not working, we decided to reform the design and architectures to the following:

![Munchys%20cea057d1ada64f2faf0f13386cf639f0/Final_Design.png](Munchys%20cea057d1ada64f2faf0f13386cf639f0/Final_Design.png)

To give a simple run down of the architecture, the Munchys app is deployed on Google's Cloud Platform's App engine. The app engine runs the front end which is stored on cloud storage. The front end is developed using React.JS which displays data coming from the backend. The backend is run on AWS lambda functions where the data is passed through the API gateway using the REST API protocols. The lambda  is the central hub of the back end, where all other services connect, lambda process all the data and sends the required data to the front end through the API gateway. Each function and feature provides had its own separate lambda function and sometimes additional supporting functions, which will be shown and discussed later. Apart from the core services the following supporting services were used:

- **Amazon Polly and S3 Bucket** : These services were used together to generate the text to speech audio. Amazon Polly uses machine learning to generate an audio file, which is than stored in the S3 Bucket, and later accessed through the lambda.
- **Amazon Cognito**:  Provides the core registration and login functionality.
- **Amazon Cognito + AWS SNS:** These services were used together to allow occassional promotional texts to all users, such as 'Come see what's cooking today' etc. Note : AWS Educate account only allows 1$ per month of SNS usage and was used up in just testing. Requiring us to wait a month to reuse the function. Hence, the munchy's app promotion will run monthly rather than weekly.
- **AWS DynamoDB** : Is used to store the list of all ingredients and the list of every individuals saves recipes. Note : separate tables for these functions.
- **S3 Bucket** : Is used to store the images of each individual ingredients, in order to remove any copyright issues and reliance on external source (What if image is no longer available?).

In addition, apart from AWS and GCP services our project was assisted with Spoonacular's Recipe API. This API provided us with the core functionality and idea of the project. The Spoonacular API was accessed using REST protocols through lambda functions. 

Note: Initially the proposal suggested us using Woolworths or Coles API to allow users to buy missing ingredients, however due to technical difficulties. The Coles API was inaccessible and was down during the entire development cycle. On the other hand Woolworth never responded to our request. Hence, scope was reduced due to limited resources. We also proposed that the app should be running and deployed on an EC2 instance , however due to complications with CORS in the API gateway we decided to use Google's App engine, which made the entire process simpler.

# Video Link

---

[https://youtu.be/RnNPU1j9L-Q](https://youtu.be/RnNPU1j9L-Q)

[Munchys Cloud Computing Demo](https://youtu.be/RnNPU1j9L-Q)
