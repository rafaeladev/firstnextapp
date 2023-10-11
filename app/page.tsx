import Image from 'next/image';
import Link from 'next/link.js';
import ProductCard from './components/ProductCard.tsx';

export default function Home() {
    return (
        <main>
            <h1>Hello World</h1>
            <Link href='/users'>Users</Link>
            <ProductCard />
        </main>
    );
}
