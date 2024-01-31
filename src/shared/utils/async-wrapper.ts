import { Request, Response, NextFunction } from 'express'

export const asyncWrapper =
  (callback: Function) => (req: Request, res: Response, next: NextFunction) =>
    callback(req, res).catch(next)
