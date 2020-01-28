import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

const AppContainer = () => {
  
  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marcar: '',
      year: '',
      plan: ''
    }
  });

  // Extraer datos 
   
  const { cotizacion, datos } = resumen;

  return ( 
    <Contenedor>
      <Header 
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario 
          guardarResumen={guardarResumen}
        /> 
        <Resumen
          datos={datos} 
        />
        <Resultado 
          cotizacion={cotizacion}
        />

      </ContenedorFormulario>
    </Contenedor>
   );
}
  
export default AppContainer;