const slugify = require('slugify');

const slugifyOptions = {
    replacement: '-',
    lower: true
}

exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
        type StripeProduct implements Node{
            slug: String!
            quantityAtCart: [Int]
        }
    `);
}


/*
 * source is the product
 */

exports.createResolvers = ({ createResolvers }) => {
    createResolvers({
        StripeProduct: {
            slug: {
                resolve: (source) => slugify(source.name, slugifyOptions)
            },
            quantityAtCart: {
                resolve: 0
            }
        }
    })
}

exports.createPages = async ({ actions, graphql }) => {
    const products = (await graphql(`
    {
        allStripeProduct {
          nodes {
            id
            slug
            images
            quantityAtCart
          }
        }
      }      
    `)).data.allStripeProduct.nodes;

    products.forEach( (product) => {
        actions.createPage({
            path: `productos/${product.slug}`,
            component: require.resolve("./src/templates/product.jsx"),
            context: {
                id: product.id
            }
        })
    })
}