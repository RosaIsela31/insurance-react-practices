import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Formulario from './Formulario';

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
        <Formulario /> 

      </ContenedorFormulario>
    </Contenedor>
   );
}
  
export default AppContainer;