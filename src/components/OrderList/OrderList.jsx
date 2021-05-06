import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
  const orderItems = orders.map(ord =>
    <OrderListItem
      order={ord}
     isSelected={ord === activeOrder}
     handleSelectOrder={handleSelectOrder}
     key={ord._id}
    />
  );
  return (
    <main className="OrderList">
      {orderItems.length ? orderItems : <span className="noOrders"> No Order History</span>}
    </main>
  );
}