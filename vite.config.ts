import { withPayload } from '@payloadcms/tanstack-start'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import rsc from '@vitejs/plugin-rsc'
import { nitro } from 'nitro/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(
  withPayload(
    ({ env, pluginOptions }) => ({
      plugins: [
        rsc(pluginOptions.rsc),
        tanstackStart(pluginOptions.tanstackStart),
        viteReact(pluginOptions.react),
        // nitro's node-server preset is a build/deploy concern; its dev runtime
        // bypasses Payload's SSR `.css`-stripping transform and crashes on
        // `@payloadcms/ui`'s `dist/**/*.css` imports. Only wire it for `build`.
        ...(env.command === 'build'
          ? [nitro({ preset: 'node-server', traceDeps: ['ajv*'], noExternals: [/^@payloadcms\//] })]
          : []),
      ],
      // `@payloadcms/figma` isn't in Payload's default `noExternalPatterns`, so
      // Vite externalizes it in dev SSR. Node then loads it — and its transitive
      // `@payloadcms/ui/dist/**/*.css` imports — through the raw loader, which
      // has no `.css` handler. Force it through Vite in both server envs so the
      // dist-style-import strip applies. Merged (concatenated) onto Payload's list.
      environments: {
        rsc: { resolve: { noExternal: [/^@payloadcms\/figma/] } },
        ssr: { resolve: { noExternal: [/^@payloadcms\/figma/] } },
      },
      resolve: {
        alias: [
          // Project `@/` → `src/` alias.
          {
            find: /^@\//,
            replacement: path.resolve(__dirname, 'src') + '/',
          },
          // Pin tslib to its ESM build; the UMD one breaks CJS interop at boot.
          {
            find: /^tslib$/,
            replacement: path.resolve(__dirname, 'node_modules', 'tslib', 'tslib.es6.mjs'),
          },
          // Stub the blob client upload handler out of the client bundle.
          {
            find: /^@payloadcms\/storage-vercel-blob\/client$/,
            replacement: path.resolve(__dirname, 'src', 'stubs', 'vercel-blob-client.ts'),
          },
        ],
      },
      server: {
        port: 3000,
        warmup: {
          clientFiles: [
            './src/app/__root.tsx',
            './src/app/_payload.tsx',
            './src/app/_payload/admin.index.tsx',
            './src/app/_payload/admin.$.tsx',
          ],
        },
      },
    }),
    { payloadConfigPath: path.resolve(__dirname, 'src', 'payload.config.ts') },
  ),
)
