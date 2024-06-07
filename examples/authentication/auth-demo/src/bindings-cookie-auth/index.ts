import type { Query } from "@qubit-rs/client";
export type QubitServer = { echo_cookie: Query<() => Promise<string>>, secret_endpoint: Query<() => Promise<string>> };