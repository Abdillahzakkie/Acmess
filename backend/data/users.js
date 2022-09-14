import bcrypt from 'bcryptjs';

const users = [
      {
        name: 'Warehouse Manager',
        email: 'manager@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Customer1',
        email: 'customer1@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Customer2',
        email: 'customer2@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

];

export default users;
