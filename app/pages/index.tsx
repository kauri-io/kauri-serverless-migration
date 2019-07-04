import Link from 'next/link'
export default () => {
    console.log('********', process.env.config)
    return <div>test article: <Link
        as="/article?article_id=2cfdfa427d324b57b2afd034f3cfb145"
        href="/slug/2cfdfa427d324b57b2afd034f3cfb145/a"
    ><a>Article</a></Link></div>
}