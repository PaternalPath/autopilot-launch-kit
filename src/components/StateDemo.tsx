"use client";

import { useState } from "react";
import { Loader2, AlertCircle, Inbox, RefreshCw } from "lucide-react";
import type { AsyncState } from "@/types";

/**
 * State Demo Component
 *
 * Demonstrates the four UI states that every data-fetching component should handle:
 * - idle: Initial state before any action
 * - loading: Fetching data
 * - success: Data loaded successfully
 * - error: Something went wrong
 * - empty: No data available (success but empty)
 *
 * Use this as a reference when building your own components.
 */

// Example data type
interface DemoItem {
  id: number;
  title: string;
}

// Simulated API responses
type DemoScenario = "success" | "empty" | "error";

function simulateFetch(scenario: DemoScenario): Promise<DemoItem[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (scenario) {
        case "success":
          resolve([
            { id: 1, title: "First item" },
            { id: 2, title: "Second item" },
            { id: 3, title: "Third item" },
          ]);
          break;
        case "empty":
          resolve([]);
          break;
        case "error":
          reject(new Error("Network request failed"));
          break;
      }
    }, 1500);
  });
}

export function StateDemo() {
  const [state, setState] = useState<AsyncState<DemoItem[]>>({ status: "idle" });

  const handleFetch = async (scenario: DemoScenario) => {
    setState({ status: "loading" });
    try {
      const data = await simulateFetch(scenario);
      setState({ status: "success", data });
    } catch (error) {
      setState({
        status: "error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  const handleReset = () => {
    setState({ status: "idle" });
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-gray-900">UI State Patterns</h3>
      <p className="mt-2 text-sm text-gray-600">
        Click a button to see how each state renders. Use these patterns in your own components.
      </p>

      {/* Control buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => handleFetch("success")}
          disabled={state.status === "loading"}
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Load Success
        </button>
        <button
          onClick={() => handleFetch("empty")}
          disabled={state.status === "loading"}
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Load Empty
        </button>
        <button
          onClick={() => handleFetch("error")}
          disabled={state.status === "loading"}
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Load Error
        </button>
        <button
          onClick={handleReset}
          disabled={state.status === "loading"}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Reset
        </button>
      </div>

      {/* State display */}
      <div className="mt-6 min-h-[160px] rounded-lg border border-gray-200 bg-gray-50 p-4">
        {/* Idle State */}
        {state.status === "idle" && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-gray-100 p-3">
              <Inbox className="h-6 w-6 text-gray-400" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-900">Ready to load</p>
            <p className="mt-1 text-sm text-gray-500">
              Click a button above to fetch data
            </p>
          </div>
        )}

        {/* Loading State */}
        {state.status === "loading" && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Loader2
              className="h-8 w-8 animate-spin text-blue-600"
              aria-hidden="true"
            />
            <p className="mt-3 text-sm font-medium text-gray-900">Loading...</p>
            <p className="mt-1 text-sm text-gray-500">
              Fetching data from the server
            </p>
          </div>
        )}

        {/* Success State with Data */}
        {state.status === "success" && state.data.length > 0 && (
          <div>
            <p className="text-sm font-medium text-gray-900">
              Loaded {state.data.length} items
            </p>
            <ul className="mt-3 divide-y divide-gray-200">
              {state.data.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-sm text-gray-700">{item.title}</span>
                  <span className="text-xs text-gray-400">ID: {item.id}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Empty State */}
        {state.status === "success" && state.data.length === 0 && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-yellow-100 p-3">
              <Inbox className="h-6 w-6 text-yellow-600" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-900">No items found</p>
            <p className="mt-1 text-sm text-gray-500">
              Try a different search or create a new item
            </p>
          </div>
        )}

        {/* Error State */}
        {state.status === "error" && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-red-100 p-3">
              <AlertCircle className="h-6 w-6 text-red-600" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-900">
              Something went wrong
            </p>
            <p className="mt-1 text-sm text-red-600">{state.error}</p>
            <button
              onClick={() => handleFetch("success")}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Try again
            </button>
          </div>
        )}
      </div>

      {/* Current state indicator */}
      <div className="mt-4 rounded-md bg-gray-100 px-3 py-2">
        <code className="text-sm text-gray-700">
          Current state:{" "}
          <span className="font-medium text-blue-600">{state.status}</span>
        </code>
      </div>
    </div>
  );
}
