import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Paper, 
  Button, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { getUser } from '../services/api';
import { User } from '../types/user';
import { UserCircle, Mail, Phone, Globe, Building2, MapPin, Trash2, ArrowLeft } from 'lucide-react';

export const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;
      try {
        const data = await getUser(parseInt(id));
        setUser(data);
      } catch (err) {
        setError('Failed to load user details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleDelete = () => {
    // Simulate deletion
    setDeleteDialogOpen(false);
    navigate('/users', { state: { message: 'User deleted successfully' } });
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!user) return <Typography>User not found</Typography>;

  return (
    <Container className="py-8">
      <Button
        startIcon={<ArrowLeft size={16} />}
        onClick={() => navigate('/users')}
        className="mb-6"
      >
        Back to Users
      </Button>

      <Paper className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <UserCircle size={40} />
            <div>
              <Typography variant="h4" component="h1">
                {user.name}
              </Typography>
              <Typography color="text.secondary" className="flex items-center gap-1">
                <Mail size={16} /> {user.email}
              </Typography>
            </div>
          </div>
          <Button
            variant="contained"
            color="error"
            startIcon={<Trash2 size={16} />}
            onClick={() => setDeleteDialogOpen(true)}
          >
            Delete User
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Typography variant="h6" className="flex items-center gap-2 mb-3">
              <MapPin size={20} /> Address
            </Typography>
            <Typography>
              {user.address.street}, {user.address.suite}
              <br />
              {user.address.city}, {user.address.zipcode}
            </Typography>
          </div>

          <div>
            <Typography variant="h6" className="flex items-center gap-2 mb-3">
              <Building2 size={20} /> Company
            </Typography>
            <Typography>
              {user.company.name}
              <br />
              <span className="text-gray-600 italic">"{user.company.catchPhrase}"</span>
            </Typography>
          </div>

          <div>
            <Typography variant="h6" className="flex items-center gap-2 mb-3">
              <Phone size={20} /> Contact
            </Typography>
            <Typography>{user.phone}</Typography>
          </div>

          <div>
            <Typography variant="h6" className="flex items-center gap-2 mb-3">
              <Globe size={20} /> Website
            </Typography>
            <Typography>{user.website}</Typography>
          </div>
        </div>
      </Paper>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this user? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};