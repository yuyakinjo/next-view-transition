import { CustomError } from "@/error/custom-error";
import { RequestError } from "@/error/request-error";
import { pathOr } from "ramda";
import { z } from "zod";

export class ErrorHandler {
  private errorName = "UnknownError";
  private errorMessage = "Unknown";

  static getName = pathOr("UnknownError", ["data", "name"]);
  static getMessage = pathOr("Unknown", ["data", "message"]);

  static fromUnknownError(unknownError: unknown) {
    const instance = new ErrorHandler();
    const error = z.instanceof(Error).safeParse(unknownError);
    const customError = z.instanceof(CustomError).safeParse(unknownError);
    const requestError = z.instanceof(RequestError).safeParse(unknownError);

    instance.errorName =
      ErrorHandler.getName(error) || ErrorHandler.getName(customError) || ErrorHandler.getName(requestError);
    instance.errorMessage =
      ErrorHandler.getMessage(error) || ErrorHandler.getMessage(customError) || ErrorHandler.getMessage(requestError);

    return instance;
  }

  toFailure() {
    return {
      success: false,
      data: null,
      rawError: null,
      errorFrom: this.errorName,
      message: this.errorMessage,
    } as const;
  }
}
