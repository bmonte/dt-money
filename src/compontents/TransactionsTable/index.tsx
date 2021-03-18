import { Container } from "./styles";

import { useTransactions } from '../../hooks/useTransactions';

export function TransactionsTable() {
  const { transactions }  = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length !== 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.name}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Nenhuma transação foi cadastrada ainda.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}
