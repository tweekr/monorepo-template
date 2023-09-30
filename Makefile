.PHONY: build-image

service ?=
tag ?= $(shell git rev-parse --short HEAD)

docker-compose-build:
	@TAG=${tag} docker compose build ${service}
	@TAG=${tag} docker compose push ${service}

docker-compose-up:
	@TAG=${tag} docker compose up -d ${service}
