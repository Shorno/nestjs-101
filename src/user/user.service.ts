import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Liam Smith', email: 'liam.smith@example.com' },
  { id: 2, name: 'Emma Johnson', email: 'emma.johnson@example.com' },
  { id: 3, name: 'Noah Williams', email: 'noah.williams@example.com' },
  { id: 4, name: 'Olivia Brown', email: 'olivia.brown@example.com' },
  { id: 5, name: 'William Jones', email: 'william.jones@example.com' },
  { id: 6, name: 'Ava Garcia', email: 'ava.garcia@example.com' },
  { id: 7, name: 'James Miller', email: 'james.miller@example.com' },
  { id: 8, name: 'Isabella Davis', email: 'isabella.davis@example.com' },
  { id: 9, name: 'Oliver Rodriguez', email: 'oliver.rodriguez@example.com' },
  { id: 10, name: 'Sophia Martinez', email: 'sophia.martinez@example.com' },
  {
    id: 11,
    name: 'Benjamin Hernandez',
    email: 'benjamin.hernandez@example.com',
  },
  { id: 12, name: 'Mia Lopez', email: 'mia.lopez@example.com' },
  { id: 13, name: 'Elijah Gonzalez', email: 'elijah.gonzalez@example.com' },
  { id: 14, name: 'Charlotte Wilson', email: 'charlotte.wilson@example.com' },
  { id: 15, name: 'Lucas Anderson', email: 'lucas.anderson@example.com' },
  { id: 16, name: 'Amelia Thomas', email: 'amelia.thomas@example.com' },
  { id: 17, name: 'Mason Taylor', email: 'mason.taylor@example.com' },
  { id: 18, name: 'Evelyn Moore', email: 'evelyn.moore@example.com' },
  { id: 19, name: 'Logan Jackson', email: 'logan.jackson@example.com' },
  { id: 20, name: 'Abigail Martin', email: 'abigail.martin@example.com' },
];

@Injectable()
export class UserService {
  getUser() {
    return users;
  }
  getUserById(id: number): User {
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }
}
