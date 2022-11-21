const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const adress = 'address';
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const telefone = order.phoneNumber;
  const rua = order[adress].street;
  const numero = order[adress].number;
  const apartamento = order[adress].apartment;
  console.log(`Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, ${rua}, Nº: ${numero}, AP: ${apartamento}`)
};

customerInfo(order);

const orderModifier = (order) => {
  const newBuyer = order.name = 'Luiz Silva'
  const newPayment = order.payment.total = '50';
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizza} e ${drink} é R$ ${newPayment},00`)
};

orderModifier(order);