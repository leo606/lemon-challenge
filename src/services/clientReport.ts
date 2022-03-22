import Client from '../interfaces/Client';
import { EligibleReport, IneligibleReport } from '../interfaces/Reports';
import { eligibilityValidation } from './eligibilityValidation';
import { eligibleReport, ineligibleReport } from './genReports';

function clientReport(client:Client): EligibleReport|IneligibleReport {
  const clientEligibility = eligibilityValidation(client);
  let report: EligibleReport | IneligibleReport;

  if (clientEligibility.every((validation:boolean) => validation)) {
    // gen positive report
    report = eligibleReport(client);
  } else {
    // gen negative report
    report = ineligibleReport(clientEligibility);
  }

  return report;
}

export default clientReport;
