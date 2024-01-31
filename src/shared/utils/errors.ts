// eslint-disable-next-line max-classes-per-file
export class AppError extends Error {
  public status: number

  constructor(message: string) {
    super(message)
    this.status = 500
  }
}

export class InvalidRequestError extends AppError {
  constructor(message = 'Invalid request', status = 400) {
    super(message)
    this.status = status
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Invalid data') {
    super(message)
    this.status = 400
  }
}

export class InvalidCredentialsError extends AppError {
  constructor(message = 'Invalid credentials') {
    super(message)
    this.status = 401
  }
}
