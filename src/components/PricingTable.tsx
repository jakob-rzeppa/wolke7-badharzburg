import { Table } from "flowbite-react";

interface PricingTableProps {
  totalPrice: number;
  pricePerSeason: {
    start_date: Date;
    end_date: Date;
    season: string;
    days: number;
    price: number;
  }[];
}

const PricingTable: React.FC<PricingTableProps> = ({
  pricePerSeason,
  totalPrice,
}) => {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Night</Table.HeadCell>
          <Table.HeadCell>Season</Table.HeadCell>
          <Table.HeadCell>Days</Table.HeadCell>
          <Table.HeadCell>Price per day</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {pricePerSeason.map((season, index) => (
            <Table.Row key={index}>
              <Table.Cell>{`${season.start_date.toDateString()} to ${season.end_date.toDateString()}`}</Table.Cell>
              <Table.Cell>{season.season}</Table.Cell>
              <Table.Cell>{season.days}</Table.Cell>
              <Table.Cell>{season.price}</Table.Cell>
              <Table.Cell>{season.price * season.days}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <p>Total: {totalPrice}</p>
    </>
  );
};

export default PricingTable;
