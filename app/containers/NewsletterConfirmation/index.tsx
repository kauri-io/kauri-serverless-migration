import React from 'react'
import analytics from '../../lib/analytics'

class NewsletterConfirmation extends React.Component<{}, {}> {
    componentDidMount() {
        analytics.track('Newsletter Signup', {
            category: 'generic',
        })
    }
    render() {
        return <div>Thank you!</div>
    }
}

export default NewsletterConfirmation
