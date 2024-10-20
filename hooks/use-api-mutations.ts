import { useState } from "react";
import { useMutation } from "convex/react";

// TODO: Could not infer types here, fix it later
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApiMutation(mutationFunction: any) {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);
  const mutate = (payload: unknown) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  };

  return {
    mutate,
    pending,
  };
}
