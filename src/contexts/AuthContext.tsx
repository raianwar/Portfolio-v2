import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Role = 'Super Admin' | 'Admin' | 'User';

export interface User {
  id: string;
  username: string;
  role: Role;
  password?: string; // Storing password here for mock purposes
}

interface AuthContextType {
  user: User | null;
  usersList: User[];
  login: (username: string, role: Role) => void;
  logout: () => void;
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialMockUsers: User[] = [
  { id: '1', username: 'superadmin', role: 'Super Admin', password: 'admin123' },
  { id: '2', username: 'admin', role: 'Admin', password: 'admin123' },
  { id: '3', username: 'user', role: 'User', password: 'user123' },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('portfolio_users_list');
    if (storedUsers) {
      setUsersList(JSON.parse(storedUsers));
    } else {
      setUsersList(initialMockUsers);
      localStorage.setItem('portfolio_users_list', JSON.stringify(initialMockUsers));
    }
  }, []);

  const saveUsers = (newList: User[]) => {
    setUsersList(newList);
    localStorage.setItem('portfolio_users_list', JSON.stringify(newList));
  };

  const login = (username: string, role: Role) => {
    const loggedInUser = { id: Date.now().toString(), username, role }; // For simplicity
    setUser(loggedInUser);
    localStorage.setItem('portfolio_user', JSON.stringify(loggedInUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('portfolio_user');
  };

  const addUser = (newUser: Omit<User, 'id'>) => {
    const userWithId = { ...newUser, id: Date.now().toString() };
    saveUsers([...usersList, userWithId]);
  };

  const updateUser = (id: string, updatedFields: Partial<User>) => {
    const updatedList = usersList.map((u) => (u.id === id ? { ...u, ...updatedFields } : u));
    saveUsers(updatedList);
  };

  const deleteUser = (id: string) => {
    const updatedList = usersList.filter((u) => u.id !== id);
    saveUsers(updatedList);
  };

  useEffect(() => {
    const stored = localStorage.getItem('portfolio_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, usersList, login, logout, addUser, updateUser, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
