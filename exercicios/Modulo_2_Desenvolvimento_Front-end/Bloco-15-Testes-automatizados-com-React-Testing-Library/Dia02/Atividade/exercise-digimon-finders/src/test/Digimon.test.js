import React from 'react';
import { render } from '@testing-library/react';
import Digimon from '../components/Digimon';

describe('Teste da tela do Digimon', () => {
  const data = {
    "name": "Hawkmon",
    "img": "https://digimon.shadowsmith.com/img/hawkmon.jpg",
    "level": "Rookie"
  }

  it('Faça renders Digimon', async () => {
    const { getByTestId } = render(<Digimon digimon={ data } />);
    expect(getByTestId('digimon')).toBeInTheDocument();
  });

  it('Mostra o nome do digimon', () => {
    const { getByTestId } = render(<Digimon digimon={ data } />);
    expect.anything(getByTestId('digimonName'));
  })

  it('Mostra o level do digimon', () => {
    const { getByTestId } = render(<Digimon digimon={ data } />);
    expect.anything(getByTestId('digimonLevel'));
  })

  it('Mostra uma imagem do digimon', () => {
    const { getByAltText } = render(<Digimon digimon={ data } />);
    expect.anything(getByAltText(data.name));
  })
});