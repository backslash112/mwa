# CounterApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Question 1:
Create a new Angular application from CLI.
From the CLI, create a flat component class `Counter` that has one property counterValue=9, with inline template and style.
The component template should have two buttons and variable bound to the counterValue property, when the user clicks on or + buttons the counterValue should decrease/increase and the user must see the change.
Use this component in AppComponent and test if everything is working properly.

### Question 2:
Update the Counter Component:
1. Create an Input for a property `counter`, so if the parent component sets its value we will change `counterValue`.
2. Create an Output `counterChange`, that emits the current value at all times so the parent component can read the value of counterVaLue.
3. Update your - and + methods to reflect the change of `counterValue` to `counter`.

### Question 3:
Update the AppComponent:
1. Create a property `ComponentCounterValue` and bind/pass this to your Counter component Input.
2. Listen to any change of `counterChange` and reflect the change to `ComponentCounterValue`.
3. Bind `ComponentCounterValue` in the Template and verify it works


### Do it with Docker
```
// create a new Angular project named counter-app
docker run -it --rm -w /app -v $(pwd):/app alexsuch/angular-cli:6.0.3 ng new counter-app

// run the project
cd counter-app
docker run -it --rm -w /app -v $(pwd):/app -p 4200:4200 alexsuch/angular-cli:6.0.3  ng serve --host 0.0.0.0

// generate a new component named counter
docker run -it --rm -w /app -v $(pwd):/app alexsuch/angular-cli:6.0.3 ng generate component counter
```
