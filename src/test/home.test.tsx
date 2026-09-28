import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders the approved chapter heading', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: 'Every business begins with potential.' })).toBeInTheDocument();
  });
});
