const users = [
    { id: 1, name: 'Mark' },
    { id: 2, name: 'Paul' },
  ];
  
  const findUserById = (id) => new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);
  
    if (result) {
      return resolve(result);
    }
  
    return reject(new Error(`User with ${id} not found.`));
  });
  
  const getUserName = (userId) => findUserById(userId).then((user) => user.name);
  describe('ao colocar id retornara o nome', () => { 
      it('ao colocar a id de numero 1 retornara o nome do usuario de numero 1 que é Mark' , () => {
            getUserName(1).then((response) => {
              expect(response).toEqual('Mark')
            })
      })
  }) 

  describe('ao colocar id retornara o nome ou só que await e async', () => { 
    it('ao colocar a id de numero 1 retornara o nome do usuario de numero 1 que é Mark' , async () => {
         await getUserName(1).then((response) => {
            expect(response).toEqual('Mark')
          })
    })
})