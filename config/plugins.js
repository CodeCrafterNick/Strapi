module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        item: {
          field: "slug",
          references: "title"
        },
        brand: {
          field: "slug",
          references: "title"
        },
        tag: {
          field: "slug",
          references: "title"
        },
        category: {
          field: "slug",
          references: "title"
        },
        color: {
          field: "slug",
          references: "title"
        },
        person: {
          field: "slug",
          references: "name"
        },
        outfit: {
          field: "slug",
          references: "title"
        },
        page: {
          field: "slug",
          references: "title"
        }
      }
    }
  },
  "sitemap": {
    enabled: true,
    config: {
      cron: "0 0 0 * * *",
      limit: 45000,
      xsl: true,
      autoGenerate: false,
      caching: true,
      allowedFields: ["id", "uid", "slug", "categories", "category", "brand", "person", "outfit", "page", "item", "color", "tag"],
      excludedTypes: []
    }
  },
  rest: {
    defaultLimit: 140, //change this
    maxLimit: 1000,
    withCount: true
  },
  seo: {
    enabled: true
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 20,
      amountLimit: 200,
      apolloServer: {
        tracing: true
      }
    },
    "strapi-blurhash": {
      enabled: true,
      config: {
        regenerateOnUpdate: true
      }
    }
  },
  menus: {
    config: {
      layouts: {
        menuItem: { // This is the menu item edit panel.
          link: [ // This is the "link" tab in the menu item edit panel.
            {
              input: {
                label: "Example Field Label",
                name: "example_field",
                type: "text",
                description: "Example field description",
                placeholder: "Type something..."
              },
              grid: {
                col: 6
              }
            }
          ]
        }
      }
    }
  },
  treblle: {
    config: {
      routesToMonitor: ["api"]
    }
  },
  "import-export-entries": {
    enabled: true,
    config: {
      /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
      serverPublicHostname: "http://127.0.01:1337" // default: "".
    }
  },
  search: {
    enabled: true,
    config: {
      provider: "algolia",
      providerOptions: {
        apiKey: env("ALGOLIA_PROVIDER_ADMIN_API_KEY"),
        applicationId: env("ALGOLIA_PROVIDER_APPLICATION_ID")
      },
      contentTypes: [
        {
          name: "api::person.person"
        },
        {
          name: "api::item.item"
        },
        {
          name: "api::outfit.outfit"
        },
        {
          name: "api::brand.brand"
        },
        {
          name: "api::category.category"
        }
        ]
    }
  },
  ezforms:{
    config:{
      captchaProvider: {
        name: 'none',
      },
      enableFormName:  true,
      notificationProviders: [{
        name: 'email',
        enabled: true,
        config: {
          subject: "New Submission from Shop the Outfit!", // Optional
          from: 'info@shoptheoutfit.com' // Required
        }
      },
      ]
    }
  },
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'), // Required
      },
      settings: {
        defaultFrom: 'info@shoptheoutfit.com',
        defaultReplyTo: 'info@shoptheoutfit.com',
        testAddress: 'nick@craftingcode.com',
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: env('NETLIFY_ACCESS_TOKEN'),
      sites: [
        {
          name: 'STO',
          id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
          branch: 'master' // optional
        }
      ]
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
