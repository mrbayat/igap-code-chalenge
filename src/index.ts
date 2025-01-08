import { Bootstrapper } from '@infra/bootstrap/Bootstrapper';

(async () => {
  const bootstrapper = new Bootstrapper();
  await bootstrapper.initialize();
})();
