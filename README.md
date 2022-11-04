# Object Recognition with Angular GCP

This project is created for GDG Palermo Community Showcase - 22 Nov 2022.

## Description

Object recognition usually means a lot of work, commitment and teams' headache: ML, training image set, cost of infrastructure, etc.
Google Cloud Platform offers a seamless product to easily perform Object detection, reducing any extra cost and providing only the joy to develop it. In this talk we will see together how to implement an object recognition system with Angular and GCP. 

## Description server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Steps

- Add [AngularFire](https://github.com/angular/angularfire), use interactive cli to setup project `ng add @angular/fire`
- Setup AppModule as [AngularFire Functions](https://github.com/angular/angularfire/blob/master/docs/functions/functions.md)
- Setup local emulator for Firebase
- Create local service to communicate with remote function
- Clean base64 image