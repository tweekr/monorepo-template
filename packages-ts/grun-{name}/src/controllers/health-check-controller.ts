import { Controller, Get, Route, SuccessResponse } from 'tsoa'

@Route('health')
export class HealthCheckController extends Controller {
  /** @summary CreateOne */
  @SuccessResponse('200', 'Ok')
  @Get()
  public async GetHealthCheck(): Promise<{ ok: true }> {
    return { ok: true }
  }
}
