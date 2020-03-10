import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/">
                <a>Go Back</a>
            </Link>
        </div>
    )
}