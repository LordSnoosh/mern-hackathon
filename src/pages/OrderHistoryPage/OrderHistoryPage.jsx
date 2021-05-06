import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import * as usersService from '../../utilities/users-service';
import * as ordersAPI from '../../utilities/orders-api';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';
import { useState } from 'react';

export default function OrderHistoryPage({ user, setUser }) {
  const [activeOrder, setActiveOrder] = useState('');
  const [orderItems, setOrderItems] = useState([]);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllOrders();
      setOrderItems(orders);
      setActiveOrder(orders[0]);
    }
  }, []);

  // useEffect(function() {
  //   async function getItems() {
  //     const items = await itemsAPI.getAll();

  //     setMenuItems(items);
      // setActiveCat(items[0].category.name);
  //   }
  //   getItems();

  //   // Load cart (a cart is the unpaid order for the logged in user)
  //   async function getCart() {
  //     const cart = await ordersAPI.getCart();
  //     setCart(cart);
  //   }
  //   getCart();
  // }, []);

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />
      <OrderDetail />

    </main>
  );
}