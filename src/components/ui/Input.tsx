import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";

/**
 * Input props
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/**
 * Input Component
 *
 * An accessible input component with label, error, and hint support.
 *
 * Features:
 * - Associated label for accessibility
 * - Error state with message
 * - Hint text for additional context
 * - Left and right icon slots
 * - Proper focus states
 * - Required field indicator
 *
 * Usage:
 *   <Input label="Email" type="email" required />
 *   <Input label="Password" type="password" error="Password is required" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      id,
      className = "",
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if not provided
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    const hasError = Boolean(error);

    const inputBaseStyles =
      "block w-full rounded-md border px-3 py-2 text-sm transition-colors duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500";

    const inputStateStyles = hasError
      ? "border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500"
      : "border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500";

    const inputPaddingStyles = [
      leftIcon ? "pl-10" : "",
      rightIcon ? "pr-10" : "",
    ].join(" ");

    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            {label}
            {required && (
              <span className="ml-1 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-400">{leftIcon}</span>
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`${inputBaseStyles} ${inputStateStyles} ${inputPaddingStyles}`}
            aria-invalid={hasError}
            aria-describedby={
              [error ? errorId : "", hint ? hintId : ""].filter(Boolean).join(" ") ||
              undefined
            }
            required={required}
            disabled={disabled}
            {...props}
          />

          {rightIcon && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-400">{rightIcon}</span>
            </div>
          )}
        </div>

        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-sm text-gray-500">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
