import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledException,
  ValidationError,
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};
export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as ValidationError;
};
export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "سرویس یافت نشد",
  } as NotFoundError;
};

export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "دستر سی به سرویس امکانش نیست دادا",
  } as UnauthorizedError;
};
export const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "خطای سرور",
  } as UnhandledException;
};
export const networkErrorStrategy = () => {
  throw {
    detail: "خطای شبکه",
  } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: (errorData) =>
    (errorData.errors ? validationErrorStrategy : badRequestErrorStrategy)(
      errorData
    ),
  403: unauthorizedErrorStrategy,
  404: notFoundErrorStrategy,
  500: unhandledExceptionStrategy,
};
