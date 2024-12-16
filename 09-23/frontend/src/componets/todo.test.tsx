import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Todos from './todos';
import '@testing-library/jest-dom';


global.fetch = jest.fn();

describe('Todos Component', () => {
  beforeEach(() => {
   
    (fetch as jest.Mock).mockReset();
  });

  it('deletes todo', async () => {
    
    const mockData = [
      { id: '1', title: 'Test Todo', priority: 1, createdAt: 1627910470000, updatedAt: null, deleted: false },
    ];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

   
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: true });

    render(<Todos />);

    
    await waitFor(() => screen.getByText('Test Todo'));

    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();

    
    const deleteButton = screen.getByLabelText('delete'); 
    fireEvent.click(deleteButton);

   
    await waitFor(() => expect(screen.queryByText('Test Todo')).not.toBeInTheDocument());
  });
});
