# PtyHub

A web-based user interface for submitting and monitoring ptychography workflows, developed as a single page web application on top of Diamond's [graph](https://github.com/DiamondLightSource/graph-federation) and [cloud-native workflows](https://github.com/DiamondLightSource/workflows).

>[!NOTE]
> Under active development, based on an early [prototype](https://github.com/DiamondLightSource/ptyhub-prototype). 

## Instructions to create app from scratch

### Installing react+vite+relay

Make sure node.js is install, then use `yarn` to create a vite react app by running

```bash
yarn create vite
```

and selecting framework **React** with variant **TypeScript**. Next follow the [instructions](https://relay.dev/docs/getting-started/installation-and-setup/) for installing a react relay app:

```bash
yarn create @tobiastengler/relay-app
```

We also need to add a few more dependencies

``` bash
yarn add @dagrejs/dagre @emotion/react @emotion/styled @jsonforms/material-renderers @jsonforms/react @mui/icons-material @mui/material @mui/system @mui/x-date-pickers @xyflow/react @avj keycloak-js
```

dev dependencies

```bash
yarn add -D @jsonforms/core
```

and finally, we also need to add the workflows-lib dependency by 
adding the following to our `package.json`:

```json
{
  "dependencies": {
    "workflows-lib": "https://gitpkg.vercel.app/DiamondLightSource/workflows/frontend/workflows-lib?main"
  },
  "resolutions": {
    "workflows-lib": "https://gitpkg.vercel.app/DiamondLightSourc/workflows/frontend/workflows-lib?main"

  }

}
```

As a last step, we need to install all dependencies

```bash
yarn install
```

### Configure Relay

Download GraphQL schema, modify the `schema` value in `relay.config.json` accordingly and run the relay compiler

```bash
yarn run relay
```

### Run application in dev mode

To run the application in developer mode, simply use

```bash
yarn dev
```




