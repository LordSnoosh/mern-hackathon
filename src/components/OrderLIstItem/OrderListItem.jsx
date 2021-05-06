import './OrderListItem.css';

export default function OrderListItem({ order, handleSelectOrder, isSelected }) {
  return (
    <div className={`OrderListItem${isSelected ? ' selected' : ''}`} onClick={handleSelectOrder}>
      <div className="OrderId">
        <span className="ordId">{order.orderId}</span>
      </div>
    </div>
  );
}