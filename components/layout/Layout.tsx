import { FC } from 'react';

import Navbar from '@components/navbar';
import Footer from '@components/footer';

import { Container } from '@lib/ui';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
