# Drakon Band (back/admin)

1. Clone repo
2. install deps:
### `yarn install` / `npm install`
3. Define needed `NODE_ENV`/`MONGO_DB_ADDRESS`/`MONGO_DB_ADDRESS_DEV` in .env
4. Migrate:
### `yarn migrate-ENV` / `npm run migrate-ENV`(replace ENV with dev/prod)
5. Set login/password for admin panel in:
   ### `src/server/routers/admin.router.js`
5. Run: \
   For dev with nodemon: `yarn dev` / `npm run dev`\
   For prod serve: `yarn start` / `npm run start`

### Admin panel available at `base_url/admin` route

