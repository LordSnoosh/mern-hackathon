// import './OrderList.css';
import OrderListItem from '../OrderLIstItem/OrderListItem';

export default function OrderList({ activeOrder, setActiveOrder, orders }) {
  const orderItems = orders.map(ord =>
    <OrderListItem
      order={ord}
      isSelected={ord === activeOrder}
      // handleSelectOrder={handleSelectOrder}
      key={ord._id}
    />
  );
  return (
    <main className="OrderList">
      {orderItems.length ? orderItems : <span className="noOrders"> No Order History</span>}
    </main>
  );
}