import { Router } from 'express';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/clients/useCases/authenticateClient/AuthenticateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post('/authenticate', authenticateClientController.handle);

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman/', createDeliverymanController.handle);

export { routes };
