## Pages:

https://octopicsus.github.io/react01/app/dist/

### React Instalation:

1. 

`npm create vite@latest`  (app)

2.

`cd` (app)

3.

`npm i`

4.

`npm run build`

5.

JSON -> "dev" change to "start"

`npm start`

6.

vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  
})