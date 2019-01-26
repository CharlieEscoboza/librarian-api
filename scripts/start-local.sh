#!/usr/bin/env bash

# Build the container
docker build -f ./docker/development.Dockerfile -t librarian-api .

# Run the container
docker run -p 8080:8080 -v $(pwd)://usr/src/app/ librarian-api
