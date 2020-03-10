import { useRouter } from 'next/router'

const Post = (props) => {
    const router = useRouter()

    if (router.isFallback) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            title: `Amazing Blog Post: ${context.params.id}`
        }
    }
};

export async function getStaticPaths() {
    return {
        paths: [
            {params: {id: 'one'}}
        ],
        fallback: true
    }
}

export default Post