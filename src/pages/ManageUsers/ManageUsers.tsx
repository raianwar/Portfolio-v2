import React, { useState } from 'react';
import { useAuth, Role, User } from '../../contexts/AuthContext';
import { 
  Container, Title, Table, ActionButton, AddButton, 
  ModalOverlay, ModalContent, FormGroup, ModalActions 
} from './styles';
import { Navigate } from 'react-router-dom';

export function ManageUsers() {
  const { user, usersList, addUser, updateUser, deleteUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'User' as Role
  });

  if (user?.role !== 'Super Admin') {
    return <Navigate to="/portfolio" replace />;
  }

  const openModal = (u?: User) => {
    if (u) {
      setEditingId(u.id);
      setFormData({ username: u.username, password: u.password || '', role: u.role });
    } else {
      setEditingId(null);
      setFormData({ username: '', password: '', role: 'User' });
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingId) {
      updateUser(editingId, formData);
    } else {
      addUser(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(id);
    }
  };

  return (
    <Container>
      <Title>Manage <span>Users</span></Title>
      
      <AddButton onClick={() => openModal()}>+ Add New User</AddButton>
      
      <Table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((u) => (
            <tr key={u.id}>
              <td>{u.username}</td>
              <td>{u.role}</td>
              <td>{u.password}</td>
              <td>
                <ActionButton onClick={() => openModal(u)}>Edit</ActionButton>
                <ActionButton $danger onClick={() => handleDelete(u.id)}>Delete</ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3>{editingId ? 'Edit User' : 'Add User'}</h3>
            <FormGroup>
              <label>Username</label>
              <input 
                type="text" 
                value={formData.username} 
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <label>Password</label>
              <input 
                type="text" 
                value={formData.password} 
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <label>Role</label>
              <select 
                value={formData.role} 
                onChange={(e) => setFormData({ ...formData, role: e.target.value as Role })}
              >
                <option value="Super Admin">Super Admin</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </FormGroup>
            <ModalActions>
              <ActionButton $danger onClick={() => setIsModalOpen(false)}>Cancel</ActionButton>
              <ActionButton onClick={handleSave}>Save</ActionButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}
