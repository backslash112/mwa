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



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
