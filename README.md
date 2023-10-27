# Consultancy Breakable Toy

## Start the App
1. Clone this repo
2. From the `/server` directory, create and seed the database, and start the server
   ```
   $ createdb consultancy-breakable-toy_development
   $ yarn run migrate:latest
   $ yarn run db:seed
   $ yarn install
   $ yarn run start
   ```
5. In another terminal, from the `/client` directory, run
   ```
   $ yarn install
   $ yarn run dev
   ```
6. The app should be available at [`http://localhost:3000`](http://localhost:3000)

## Breakable Toy Goals

1. Become familiar with key technologies used in the consultancy as part of onboarding
2. Assemble a resource for yourself to refer back to -- don't be afraid to add comments that will help you catch back up to speed later! You will not be penalized for comments or intentionally commented-out code during PR review.
3. Provide a sandbox in the future for experimenting with other, more advanced tools (see, e.g., the Advanced user stories)
