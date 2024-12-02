# How to Use Prettier in this Project

Prettier has been set up with the following configurations:

1. Installation:

   - Added `prettier` as a dev dependency
   - Added ESLint integration packages (`eslint-config-prettier` and `eslint-plugin-prettier`)

2. Configuration Files:

   - `.prettierrc` - Contains Prettier configuration settings
   - `.prettierignore` - Lists files/directories to be ignored by Prettier
   - Updated `eslint.config.js` to integrate with Prettier

3. Available Commands:

   - `npm run format` - Format all files using Prettier
   - You can also format on save by enabling it in your editor's settings

4. VS Code Setup (recommended):
   1. Install the "Prettier - Code formatter" extension
   2. Open VS Code Settings (Cmd/Ctrl + ,)
   3. Search for "Format On Save"
   4. Enable "Editor: Format On Save"
   5. Set "Default Formatter" to "Prettier - Code formatter"

Now your code will be automatically formatted according to the Prettier rules defined in `.prettierrc`.
