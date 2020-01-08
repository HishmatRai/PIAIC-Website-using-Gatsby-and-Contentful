/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templetes/courses.js")
  const res = await graphql(`
    query {
      allContentfulCourses {
        edges {
          node {
            id
            slug
            programInfo
            title
            detail
          }
        }
      }
    }
  `)

  res.data.allContentfulCourses.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        id: edge.node.id,
      },
    })
  })
}
