import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { supabase } from '../lib/supabase';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const signUp = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      // const { error } = await supabase.auth.signUp({
      //   email,
      //   password,
      // });

      if (error) throw error;
      
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      // const { error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // });

      if (error) throw error;
      
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    signUp,
    signIn,
    loading,
    error,
  };
}