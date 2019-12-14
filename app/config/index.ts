import production from './production'
import development from './development'
import qa from './qa'

export default process.env.config === 'production'
    ? production
    : process.env.config === 'qa'
    ? qa
    : development
