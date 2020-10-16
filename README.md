# Products Frontend

This project offers a simple CRUD frontend that invokes a CRUD API to work on products 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Have minikube and Docker installed locally as well as Angular CLI

### Running in local environment

```ng serve --open```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment

This involves creating a Docker image and deploying it to Kubernetes

### Creating Docker image

```docker build .```

### Pushing image to Docker Hub

```docker tag <image_id> pablofelitti/products-front:<next_version>```

```docker push pablofelitti/products-front:<next_version>```

### Deploying to Kubernetes

Run these commands in the root of the project

```kubectl apply -f deployment.yml```

```kubectl apply -f service.yml```

To check if the app is running open in your browser ```<minikube_ip>:30006```

## Built With

* [Angular CLI](https://github.com/angular/angular-cli) - The web framework used
* [Docker](https://www.docker.com/) - Containers to deploy the app
* [Kubernetes](https://kubernetes.io/) - Platform to host containers




# ProductsFront

This project was generated with [Angular CLI]() version 10.1.4.

## Development server

Run `ng serve --open` for a dev server.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

### For development purposes

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### To build image for deployment

```docker build .```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
