# Products Frontend

This project offers a simple CRUD frontend that invokes a CRUD API to work on products 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run the project locally you need to have NPM and Angular CLI

To test deployments have Minikube and Docker installed

### Running in local environment

```npm install```

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

## Running unit tests

Run `ng test` to execute the unit tests

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests

## Built With

* [Angular CLI](https://github.com/angular/angular-cli) - The web framework used
* [NPM](https://www.npmjs.com/get-npm) - The depedency management tool
* [Karma](https://karma-runner.github.io) - Framework used for unit testing
* [Protractor](http://www.protractortest.org/) - Framework used for e2e testing
* [Docker](https://www.docker.com/) - Containers to deploy the app
* [Kubernetes](https://kubernetes.io/) - Platform to host containers
