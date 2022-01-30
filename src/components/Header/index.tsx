import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link href='/' passHref>
        <a>
          <Image src='/logo.svg' alt='Smart Fit' width={200} height={100} />
        </a>
      </Link>
    </Container>
  );
}
