const {
    addBook,
    getAllBook,
    getBookById,
    editBookById,
    deleteBookById,
  } = require('./controllers');
  
  const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBook,
    },
    {
      method: 'GET',
      path: '/books',
      handler: getAllBook,
    },
    {
      method: 'GET',
      path: '/books/{bookId}',
      handler: getBookById,
    },
    {
      method: 'PUT',
      path: '/books/{bookId}',
      handler: editBookById,
    },
    {
      method: 'DELETE',
      path: '/books/{bookId}',
      handler: deleteBookById,
    },
  ];
  
  module.exports = routes;
  