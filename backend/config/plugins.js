module.exports = ({ env }) => ({
  // Configuração do Admin em Português
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },
  // Configurações de autenticação e segurança
  'admin-auth': {
    secret: env('ADMIN_JWT_SECRET'),
  },
  'api-token': {
    salt: env('API_TOKEN_SALT'),
  },
  'transfer-token': {
    salt: env('TRANSFER_TOKEN_SALT'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
