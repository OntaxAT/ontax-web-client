/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/log-in'
            },
            {
                source: '/signin',
                destination: '/sign-in'
            }
        ]
    }
}

module.exports = nextConfig
