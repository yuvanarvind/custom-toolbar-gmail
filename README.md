# Gmail Custom Toolbar to Create Tickets

<video src="https://www.loom.com/share/0c58d2b7bc1348d0bcd9c22993284b98?sid=e2b9ef4f-8289-4d7c-b124-a1b1e7db43bc"></video>

## Instructions

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the development server.
3. In Chrome, go to chrome://extensions, turn on Developer mode, click "Load unpacked", and pick the "dist" directory within this project.
4. Open https://mail.google.com/ and click "Compose an email" at the top left.
5. There's a button added to the Compose view!
6. Open `content.js` to see the code responsible for this.

You can make changes to content.js and the extension will automatically be rebuilt as long as the `npm start` command is still running. If you make any changes, then to apply them you will have to press the ⟳ Reload extension button and then refresh Gmail.

You can run `npm run build` to create an optimized production build of your extension in the "dist" directory.
