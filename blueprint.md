# Project Blueprint

## Overview

This project is a 3D design studio website. It allows users to view designs, add them to a cart, and checkout. It also has a staff page and a status page. The project uses Firebase for its backend.

## Project Structure

*   `index.html`: The main landing page.
*   `checkout.html`: The checkout page.
*   `custom.html`: A page for custom designs.
*   `staff.html`: The staff page.
*   `status.html`: The status page.
*   `style.css`: The main stylesheet.
*   `main.js`: The main JavaScript file for handling cart functionality.
*   `firebase-config.js`: The Firebase configuration file.

## Current Task: Fix "Export 'getDoc' is not defined in module" Error

The error indicates that a file is trying to import `getDoc` from a module that doesn't export it. I've already confirmed that `firebase-config.js` correctly exports `getDoc`. The error must be in a file that imports from `firebase-config.js`.

My plan is to:

1.  Examine all files that might be using firebase functionality.
2.  Identify the file that is causing the error.
3.  Correct the import statement in the problematic file.
