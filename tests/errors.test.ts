import { describe, it, expect } from "vitest";
import { AppError, isAppError, Errors, getErrorMessage, tryCatch } from "@/lib/errors";

describe("errors module", () => {
  describe("AppError", () => {
    it("should create an error with code and message", () => {
      const error = new AppError("NOT_FOUND", "User not found");

      expect(error.code).toBe("NOT_FOUND");
      expect(error.message).toBe("User not found");
      expect(error.statusCode).toBe(404);
      expect(error.isOperational).toBe(true);
    });

    it("should set correct status codes for different error types", () => {
      expect(new AppError("BAD_REQUEST", "").statusCode).toBe(400);
      expect(new AppError("UNAUTHORIZED", "").statusCode).toBe(401);
      expect(new AppError("FORBIDDEN", "").statusCode).toBe(403);
      expect(new AppError("NOT_FOUND", "").statusCode).toBe(404);
      expect(new AppError("INTERNAL_ERROR", "").statusCode).toBe(500);
    });

    it("should serialize to JSON correctly", () => {
      const error = new AppError("NOT_FOUND", "User not found");
      const json = error.toJSON();

      expect(json).toEqual({
        error: {
          code: "NOT_FOUND",
          message: "User not found",
          statusCode: 404,
        },
      });
    });
  });

  describe("isAppError", () => {
    it("should return true for AppError instances", () => {
      const error = new AppError("NOT_FOUND", "Not found");
      expect(isAppError(error)).toBe(true);
    });

    it("should return false for regular Error instances", () => {
      const error = new Error("Regular error");
      expect(isAppError(error)).toBe(false);
    });

    it("should return false for non-error values", () => {
      expect(isAppError(null)).toBe(false);
      expect(isAppError(undefined)).toBe(false);
      expect(isAppError("error")).toBe(false);
    });
  });

  describe("Errors helpers", () => {
    it("should create correct error types", () => {
      expect(Errors.badRequest().code).toBe("BAD_REQUEST");
      expect(Errors.unauthorized().code).toBe("UNAUTHORIZED");
      expect(Errors.forbidden().code).toBe("FORBIDDEN");
      expect(Errors.notFound().code).toBe("NOT_FOUND");
      expect(Errors.validation("Invalid").code).toBe("VALIDATION_ERROR");
      expect(Errors.internal().code).toBe("INTERNAL_ERROR");
      expect(Errors.unavailable().code).toBe("SERVICE_UNAVAILABLE");
      expect(Errors.rateLimited().code).toBe("RATE_LIMITED");
      expect(Errors.network().code).toBe("NETWORK_ERROR");
    });
  });

  describe("getErrorMessage", () => {
    it("should return message from AppError", () => {
      const error = new AppError("NOT_FOUND", "User not found");
      expect(getErrorMessage(error)).toBe("User not found");
    });

    it("should return message from regular Error", () => {
      const error = new Error("Something went wrong");
      expect(getErrorMessage(error)).toBe("Something went wrong");
    });

    it("should return default message for unknown values", () => {
      expect(getErrorMessage(null)).toBe("An unexpected error occurred");
      expect(getErrorMessage("error")).toBe("An unexpected error occurred");
    });
  });

  describe("tryCatch", () => {
    it("should return ok: true with data on success", async () => {
      const result = await tryCatch(Promise.resolve({ id: 1 }));

      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.data).toEqual({ id: 1 });
      }
    });

    it("should return ok: false with error on rejection", async () => {
      const result = await tryCatch(Promise.reject(new Error("Failed")));

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.message).toBe("Failed");
        expect(result.error.code).toBe("INTERNAL_ERROR");
      }
    });

    it("should preserve AppError on rejection", async () => {
      const appError = Errors.notFound("User not found");
      const result = await tryCatch(Promise.reject(appError));

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("NOT_FOUND");
        expect(result.error.message).toBe("User not found");
      }
    });
  });
});
