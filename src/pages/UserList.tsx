import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { UserTable } from '../components/UserTable';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { getUsers } from '../services/api';
import { User } from '../types/user';
import { Users } from 'lucide-react';

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to load users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <Users size={24} />
        <Typography variant="h4" component="h1">
          User Management
        </Typography>
      </div>
      <UserTable users={users} />
    </Container>
  );
};