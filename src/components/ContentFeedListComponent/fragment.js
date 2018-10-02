import gql from 'graphql-tag'

const RECOMMENDED_CONTENT_FEED_FRAGMENT = gql`
    fragment recommendedContentFeed on ContentResource {
        recommendedContentFeed {
            edges {
                node {
                    id
                    title {
                        text
                    }
                    type
                    featuredMedia {
                        ... on Image {
                            imageSrc(width:128, height:128)
                        }
                    }
                }
            }
        }
    }    
`

export default RECOMMENDED_CONTENT_FEED_FRAGMENT