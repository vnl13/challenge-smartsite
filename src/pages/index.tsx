import type { NextPage } from 'next';

import { Container } from '../styles/home';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Legend } from '../components/Legend';
import { List } from '../components/List';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>
          REABERTURA <span>SMART FIT</span>
        </h2>
        <p>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
        <Form />
        <Legend />
        <List />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
