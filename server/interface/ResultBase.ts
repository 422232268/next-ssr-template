export default class ResultBase {
  success: boolean
  value?: any
  code?: string
  msg?: string
  constructor(code: ResultCode, rest: any) {
    this.success = code === ResultCode.SUCCESS
    this.value = rest.value
    this.code = rest.code
    this.msg = rest.msg
  }
}

export enum ResultCode {
  SUCCESS = 1,
  NETWORK_ERROR = 2,
  VALIDATION_ERROR = 3,
  BIZ_ERROR = 4,
  PERMISSION_ERROR = 5,
  UNKNOW_ERROR = 111,
}
