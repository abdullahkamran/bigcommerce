# E2E test harness for Solid.js

"Yarn workspaces" uses its understanding of the build graph in a limited way, so
to recompile and run just this set of E2E tests, you can run these commands at
the project root:

```bash
yarn workspace @builder.io/e2e-app run build
yarn workspace @builder.io/e2e-solidjs run build
yarn workspace @builder.io/e2e-solidjs run e2e
```
