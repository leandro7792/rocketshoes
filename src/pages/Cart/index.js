import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <th />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th />
        </thead>

        <tbody>
          <td>
            <img
              src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_detalhe2.jpg?ims=326x"
              alt="Tênis"
            />
          </td>
          <td>
            <strong>Tênis muito massa</strong>
            <span>R$ 129,90</span>
          </td>
          <td>
            <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={1} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </div>
          </td>
          <td>
            <strong>R$ 258,80</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1" />
            </button>
          </td>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1.290,80</strong>
        </Total>
      </footer>
    </Container>
  );
}
