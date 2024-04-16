# Fyle Frontend Challenge

This is a single-page application (SPA) built with Angular that allows users to search for GitHub users and view their public repositories.

## Deployment Link
You can access the deployed version: https://fyle-internship-challenge-23-dun.vercel.app/

## Features

- **Search by Username**: Users can enter a GitHub username to search for and view the public repositories of that user.
- **Zero State Handling**: If a user is not found, an empty state is displayed while still allowing users to search for other usernames.
- **Pagination**: Server-side pagination is implemented, allowing users to view repositories in chunks. Users can select the page size and navigate through pages.
- **Loading Indicators**: Skeleton loaders are displayed to indicate when API calls are in progress.
- **Caching**: API calls to GitHub's REST API are cached to avoid duplicate calls.

## Challenge outline

This challenge involves implementing an application using the GitHub API.

## Installation

1. Fork this repository to your GitHub account.
2. Clone the forked repository and proceed with the steps mentioned below.

### Install Requirements

* Install Angular CLI [Ref](https://angular.io/cli)
* Run `npm install` in this repository 

## Development Server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


### Running Tests and Checking Coverage

To run the unit tests for this Angular application, execute the following commands in your terminal:

```bash
ng test --include='src/app/main-geist/main-geist.component.spec.ts'
ng test --include='src/app/app.component.spec.ts'
```

## Viewing Code Coverage Report

After running the unit tests, you can view the code coverage report to ensure that all components and services are adequately tested.

To view the coverage report, open the following file in your browser:

```bash
ng test --code-coverage
```



