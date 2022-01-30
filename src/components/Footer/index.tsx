import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <Link href='/' passHref>
        <a>
          <Image src='/logo.svg' alt='Smart Fit' width={100} height={50} />
        </a>
      </Link>
      <p>Todos os direitos reservados - 2022</p>
    </Container>
  );
}
