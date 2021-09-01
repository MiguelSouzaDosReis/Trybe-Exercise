const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',},
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    let nome =order.order.delivery.deliveryPerson
    let nome2 = order.name
    let telefone = order.phoneNumber
    let rua = order.address.street
    let numero = order.address.number
    let apartamento = order.address.apartment

     console.log(`Olá ${nome}, entrega para: ${nome2}, Telefone: ${telefone}, R. ${rua}, Nº:${numero}, AP:${apartamento}.`)   
  }
  
  customerInfo(order);

  const orderModifier = (order) => {
    let marguerita = Object.keys(order.order.pizza)
    let coca = order.order.drinks.coke.type
    let preçoAlto = order.order.drinks.coke.price
    let preçoMenor = order.payment.total
    let preço = preçoMenor - preçoAlto

    
     console.log(`Olá Luiz Silva, o total do seu pedido de ${marguerita[0]},${marguerita[1]} e ${coca} é R$ ${preço},00`) 
    
  }
  
  orderModifier(order);
