const { default: AdminBro } = require('admin-bro')
const { buildAuthenticatedRouter } = require('@admin-bro/express')
const express = require('express')

const ADMIN = {
  email: 'admin',
  password: '9hWdmV%mr@1P',
}

/**
 *
 * @param {AdminBro} admin
 * @return {express.Router} router
 */
const buildAdminRouter = (admin) => {
  const router = buildAuthenticatedRouter(admin, {
    cookieName: 'admin-bro',
    cookiePassword: 'superlongandcomplicatedname',
    authenticate: async (email, password) => {
      if (ADMIN.password === password && ADMIN.email === email) {
        return ADMIN
      }
      return null
    }
  });
  return router;
}

module.exports = buildAdminRouter
