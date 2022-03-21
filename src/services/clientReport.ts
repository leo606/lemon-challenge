import Client from '../interfaces/Client';
import clientEligibility from './clientEligibility';

function clientReport(client:Client): boolean {
  const clientEligible = clientEligibility(client);

  if (clientEligible) {
    // gen positive report
  } else {
    // gen negative report
  }

  return true;
}

export default clientReport;
