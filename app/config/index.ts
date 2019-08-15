import production from './production'
import development from './development'
export default process.env.config === 'config' ? production : development
