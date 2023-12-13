interface Problem {
  title: string;
  status: number;
  detail?: string;
  errors?: Record<string, string[]>;
}
interface BadRequestError extends Problem {} //400 codes
interface UnauthorizedError extends Problem {} //403
interface ValidationError extends Problem {} //400 errors prop has value
interface NotFoundError extends Problem {} //404
interface UnhandledException extends Problem {} //500 codes
interface NetworkError extends Problem {} //500 codes

export type {
  Problem,
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  NotFoundError,
  UnhandledException,
  NetworkError,
};
