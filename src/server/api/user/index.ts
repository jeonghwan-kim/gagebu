import { Router, Request, Response } from "express";

interface User {
  name: string
}

const router = Router()

router.use('/me', (req: Request, res: Response) => {
  const user: User = {
    name: '김정환'
  }
  res.json(user)
})

export default router