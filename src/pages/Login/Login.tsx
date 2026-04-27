import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Container, FormContainer, Title, InputGroup, Label, Input, Button, ErrorText } from './styles';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, usersList } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Find matching user in our mock database (usersList)
    const validUser = usersList.find(
      (u) => u.username === username && u.password === password
    );

    if (validUser) {
      login(validUser.username, validUser.role);
      const origin = location.state?.from?.pathname || '/';
      navigate(origin);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container>
      <FormContainer as="form" onSubmit={handleLogin}>
        <Title>
          Login <span>Access</span>
        </Title>

        <InputGroup>
          <Label htmlFor="username">Username</Label>
          <Input 
            id="username" 
            type="text" 
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit">Login</Button>
      </FormContainer>
    </Container>
  );
}
