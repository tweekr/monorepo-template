.PHONY: build-image

service ?=
tag ?= $(shell git rev-parse --short HEAD)

build-image:
	@TAG=${tag} docker compose build ${service}
	@TAG=${tag} docker compose push ${service}
