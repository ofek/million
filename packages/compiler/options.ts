import type { FilterPattern } from '@rollup/pluginutils';

interface PluginOptions {
  filter?: {
    include?: FilterPattern;
    exclude?: FilterPattern;
  };
  /**
   * @default 'react'
   */
  mode?: 'react' | 'vdom';
  auto?:
    | boolean
    | { threshold?: number; skip?: (string | RegExp)[]; rsc?: boolean };
  /**
   * @default false
   */
  optimize?: boolean;
  /**
   * @default false
   */
  server?: boolean;
  /**
   * @default false
   */
  hmr?: boolean;
  /**
   * @default true
   */
  log?: boolean | 'info';
  /**
   * @default false
   */
  rsc?: boolean;
  /**
   * @deprecated Use `log` instead
   */
  mute?: boolean | 'info';
}

export type Options =
  | PluginOptions
  | (Omit<PluginOptions, 'mode'> & {
      /**
       * @deprecated Use `react` instead
       */
      mode: 'react-server' | 'preact' | 'preact-server';
    });