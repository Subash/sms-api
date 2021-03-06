import { Router } from 'itty-router';
import authenticate from '../auth/authenticate-middleware.js';
import * as smsHandlers from './sms-handlers.js';

const router = Router({ base: '/api/v1/sms' });

// prettier-ignore
router.post(
  '/send',
  authenticate(),
  smsHandlers.sendMessage
);

export default router;
