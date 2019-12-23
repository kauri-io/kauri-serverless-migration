import { init as initApm } from '@elastic/apm-rum'
import config from '../config'

const apm = initApm({
    active: config.enableAPM,
    // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
    serviceName: 'kauri-serverless',

    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: `https://${config.gateway}/monitoring/apm-server/`, // https://api.dev.kauri.io/monitoring/apm-server/

    // Set service version (required for sourcemap feature)
    serviceVersion: '1',
    distributedTracingOrigins: [`https://${config.gateway}`],
})

export default apm
