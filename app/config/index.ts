import production from './production'
import development from './development'
import qa from './qa'
import dev2 from './dev2'

export default process.env.config === 'production'
    ? production
    : process.env.config === 'qa'
    ? qa
    : process.env.config === 'dev2'
    ? dev2
    : development
