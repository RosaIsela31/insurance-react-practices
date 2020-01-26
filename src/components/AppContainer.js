import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

const AppContainer = () => {
  return ( 
    <Contenedor>
      <Header 
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>

      </ContenedorFormulario>
    </Contenedor>
   );
}
  
export default AppContainer;