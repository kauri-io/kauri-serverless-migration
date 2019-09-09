import production from './production'
import development from './development'

console.log('***** CONFIG: ', process.env.config)
export default process.env.config === 'production' ? production : development
