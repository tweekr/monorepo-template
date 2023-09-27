# {service-name}

{intro: the purpose of this service}

## Infrastructure

{infra dependencies: dbs, queues, caching, etc}

## Setup

{setup instructions}

{hotreload instructions}

## Tests

{testing instructions}

## Build

{build instructions}

### Pushing Dev images to Artifact Registry

- Authenticate with Google Cloud
```
$ gcloud auth login
```
- If required by your organization, set the project
```
$ gcloud config set project {project-id}
```
- Configure docker to use gcloud credentials
```
$ gcloud auth configure-docker europe-west2-docker.pkg.dev
```
- Build and push the image
```
$ yarn build:image
```

## Deployment

{deployment instructions}
