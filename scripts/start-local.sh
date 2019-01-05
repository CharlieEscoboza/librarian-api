#!/usr/bin/env bash

# Build the container
docker build -t librarian-api .

# Run the container
docker run -p 8080:8080 -v $(pwd)://usr/src/app/ librarian-api
