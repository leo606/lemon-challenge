import Client from '../../interfaces/Client';
import { EligibleReport, IneligibleReport } from '../../interfaces/Reports';
import { eligibilityValidation } from './validations/eligibilityValidation';
import { eligibleReport, ineligibleReport } from './reportsGenerators/genReports';

function clientReport(client: Client): EligibleReport | IneligibleReport {
  const clientEligibility = eligibilityValidation(client);

  if (clientEligibility.every((validation: boolean) => validation)) {
    return eligibleReport(client);
  }

  return ineligibleReport(clientEligibility);
}

export default clientReport;
