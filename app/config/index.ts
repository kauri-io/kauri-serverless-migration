import production from './production'
import development from './development'
export default process.env.config === 'production' ? production : development