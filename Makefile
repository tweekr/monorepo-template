.PHONY: build-image

service ?=
branch_hash := $(shell git rev-parse --short HEAD)

build-image:
	@TAG=${branch_hash} docker compose build ${service}
	@TAG=${branch_hash} docker compose push ${service}
