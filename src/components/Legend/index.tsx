import Image from 'next/image';
import { Container, LegendItem } from './styles';

export function Legend() {
  return (
    <Container>
      <LegendItem>
        <strong>Máscara</strong>
        <div>
          <figure>
            <Image
              src='/images/required-mask.png'
              alt='Uso de máscara obrigatório'
              width='60%'
              height='60%'
            />
            <figcaption>Obrigatório</figcaption>
          </figure>
          <figure>
            <Image
              src='/images/recommended-mask.png'
              alt='Uso de máscara recomendado'
              width='60%'
              height='60%'
            />
            <figcaption>Recomendado</figcaption>
          </figure>
        </div>
      </LegendItem>

      <LegendItem>
        <strong>Toalha</strong>
        <div>
          <figure>
            <Image
              src='/images/required-towel.png'
              alt='Uso de toalha obrigatório'
              width='60%'
              height='60%'
            />
            <figcaption>Obrigatório</figcaption>
          </figure>
          <figure>
            <Image
              src='/images/recommended-towel.png'
              alt='Uso de toalha recomendado'
              width='60%'
              height='60%'
            />
            <figcaption>Recomendado</figcaption>
          </figure>
        </div>
      </LegendItem>

      <LegendItem>
        <strong>Bebedouro</strong>
        <div>
          <figure>
            <Image
              src='/images/partial-fountain.png'
              alt='Bebedouro parcialmente liberado'
              width='60%'
              height='60%'
            />
            <figcaption>Parcial</figcaption>
          </figure>
          <figure>
            <Image
              src='/images/not_allowed-fountain.png'
              alt='Bebedouro estritamente proibido'
              width='60%'
              height='60%'
            />
            <figcaption>Proibido</figcaption>
          </figure>
        </div>
      </LegendItem>

      <LegendItem>
        <strong>Vestiários</strong>
        <div>
          <figure>
            <Image
              src='/images/allowed-lockerroom.png'
              alt='Vestiários liberados'
              width='60%'
              height='60%'
            />
            <figcaption>Liberado</figcaption>
          </figure>
          <figure>
            <Image
              src='/images/partial-lockerroom.png'
              alt='Vestiários parcialmente liberados'
              width='60%'
              height='60%'
            />
            <figcaption>Parcial</figcaption>
          </figure>
          <figure>
            <Image
              src='/images/closed-lockerroom.png'
              alt='Vestiários fechados'
              width='60%'
              height='60%'
            />
            <figcaption>Fechado</figcaption>
          </figure>
        </div>
      </LegendItem>
    </Container>
  );
}
