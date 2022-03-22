import Client from '../../interfaces/Client';
import { EligibleReport, IneligibleReport } from '../../interfaces/Reports';
import Validation from './validations/Validation';

function clientReport(client: Client): EligibleReport | IneligibleReport {
  const clientValidation = new Validation(client);
  return clientValidation.report();
}

export default clientReport;
