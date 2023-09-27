import { ExtendedRoutesConfig, ExtendedSpecConfig, generateRoutes, generateSpec } from 'tsoa'

const globalOp = {
  entryFile: 'src/main.ts',
  controllerPathGlobs: ['src/controllers/*-controller.ts'],
  basePath: '/v1',
  // "securityDefinitions": {
  //   "bearer_auth": {
  //     "type": "http",
  //     "scheme": "bearer"
  //   }
  // }
}

const specOptions: ExtendedSpecConfig = {
  ...globalOp,
  specVersion: 3,
  outputDirectory: 'generated/tsoa/spec',
  noImplicitAdditionalProperties: 'silently-remove-extras',
}

const routeOptions: ExtendedRoutesConfig = {
  ...globalOp,
  routesDir: 'generated/tsoa',
  noImplicitAdditionalProperties: 'ignore',
}

export const GenerateTsoaRoutesAndSpec = async (): Promise<void> => {
  await generateSpec(specOptions)
  console.info('Generate OpenApi Spec: Done')
  await generateRoutes(routeOptions)
  console.info('Generate Routes: Done')
}
