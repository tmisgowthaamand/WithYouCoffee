#!/usr/bin/env node
import { spawnSync } from 'node:child_process'

const [, , cmd, ...rest] = process.argv

const run = (exe, args) => {
  const result = spawnSync(exe, args, { stdio: 'inherit', shell: process.platform === 'win32' })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

switch (cmd) {
  case 'build':
    run('npx', ['vite', 'build', ...rest])
    break
  case 'start':
  case 'test':
  case 'eject':
  default:
    console.warn(`react-scripts shim: command "${cmd ?? 'undefined'}" is not supported. Falling back to "vite build".`)
    run('npx', ['vite', 'build', ...rest])
    break
}
