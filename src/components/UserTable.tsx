import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button 
} from '@mui/material';
import { User } from '../types/user';
import { useNavigate } from 'react-router-dom';
import { Users, Info } from 'lucide-react';

interface UserTableProps {
  users: User[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper} className="shadow-lg">
      <Table>
        <TableHead className="bg-gray-50">
          <TableRow>
            <TableCell><Users className="inline mr-2" size={18} />Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-gray-50">
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.address.city}, {user.address.street}
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<Info size={16} />}
                  onClick={() => navigate(`/user/${user.id}`)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};