# freeCodeCampOS

## How To Create A Course

1. Install `freecodecamp-os` in your project root:

```bash
npm install freecodecamp-os
```

2. Add a `freecodecamp.conf.json` file to your project root:

```json
{
  "path": ".",
  "prepare": "echo 'prep'",
  "scripts": {
    "develop-course": "npm run develop",
    "run-course": "npm run start",
    "test": {
      "functionName": "handleMessage",
      "arguments": [
        {
          "message": "Hello World!",
          "type": "info"
        }
      ]
    }
  },
  "workspace": {
    "previews": [
      {
        "open": true,
        "url": "http://localhost:8080",
        "showLoader": true,
        "timeout": 20000
      }
    ]
  },
  "bash": {
    ".bashrc": "./bash/.bashrc",
    "sourcerer.sh": "./bash/sourcerer.sh"
  },
  "client": {
    "assets": {
      "header": "./client/assets/fcc_primary_large.svg",
      "favicon": "./client/assets/fcc_primary_small.svg"
    },
    "landing": {
      "description": "Placeholder description",
      "faq-link": "#",
      "faq-text": "Link to FAQ related to course"
    }
  },
  "config": {
    "projects.json": "./config/projects.json",
    "state.json": "./config/state.json"
  },
  "curriculum": {
    "locales": {
      "english": "./curriculum/locales/english"
    }
  },
  "tooling": {
    "helpers": "./tooling/helpers.js"
  }
}
```

3. Add all the necessary files to your project (_use this repo as a reference_)
