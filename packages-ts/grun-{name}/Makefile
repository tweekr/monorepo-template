.PHONY: build

build:
	@yarn rimraf generated/tsoa
	@yarn rimraf dist
	@yarn tsoa spec-and-routes
	@yarn tsc
	@yarn esbuild dist/tsc/src/main.js --outfile=dist/esbuild/index.js \
		--platform=node --target=node18 \
		--bundle \
		--minify \
		--sourcemap=inline \
		--external:pnpapi