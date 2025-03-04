import { Router } from 'express';
import { addFriend, removeFriend } from '../../controllers/userController';

const router = Router();

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export default router;
