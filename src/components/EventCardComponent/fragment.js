import gql from "graphql-tag"

const EVENT_CARD_FRAGMENT = gql`
    fragment eventCard on EventProfile {
        id
        title {
            text
        }
        teaser {
            text
        }
        author
        images: featuredMedia {
            ... on Image {
                imageSrc(width:400, height:300)
            }
        }
        startDate {
            dateTimeUTC
        }
        endDate {
            dateTimeUTC
        }
    }
`

export default EVENT_CARD_FRAGMENT