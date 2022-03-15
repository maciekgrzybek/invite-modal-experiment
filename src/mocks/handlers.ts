// src/mocks/handlers.js
import { rest } from 'msw';
import { searchUser } from './fakeApi';

export const handlers = [
  // Handles a GET /user request
  rest.get('/search-users', async (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get('q') ?? '';
    const data = await searchUser(searchQuery);
    return res(ctx.status(200), ctx.json(data));
  }),
];
