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
  /*"sitemap": {
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
  },*/
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
  /*search: {
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
  },*/
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
  upload: {
    config: {
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("CF_ACCESS_KEY_ID"),
        secretAccessKey: env("CF_ACCESS_SECRET"),
        /**
         * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
         */
        endpoint: env("CF_ENDPOINT"),
        params: {
          Bucket: env("CF_BUCKET"),
        },
        /**
         * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
         * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
         * This option is required to upload files larger than 5MB, and is highly recommended to be set.
         * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
         */
        cloudflarePublicAccessUrl: env("CF_PUBLIC_ACCESS_URL_WITH_BUCKET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true,
    },
  },
  /*upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER", ""),
        },
        delete: {},
      },
    },
  },*/
});
