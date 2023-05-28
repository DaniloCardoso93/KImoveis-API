declare global {
  namespace Express {
    interface Request {
      users: object;
      validateBody: object;
      user: { id?: string };
    }
  }
}

export {};
