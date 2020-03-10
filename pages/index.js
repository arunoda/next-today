import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <h1>Hello World 234</h1>
            <ul>
                <li>
                    <Link href="/about">
                        <a>About Page</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/[id]" as="/post/one">
                        <a>Blog Post One</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/[id]" as="/post/two">
                        <a>Blog Post Two</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}