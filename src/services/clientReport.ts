import Client from '../interfaces/Client';
import { EligibleReport, IneligibleReport } from '../interfaces/Reports';
import { clientEligibility } from './clientEligibility';
import { eligibleReport, ineligibleReport } from './genReports';

function clientReport(client:Client): EligibleReport|IneligibleReport {
  const clientEligible = clientEligibility(client);
  let report:EligibleReport|IneligibleReport;

  if (clientEligible.every((validation:boolean) => validation)) {
    // gen positive report
    report = eligibleReport(client);
    console.log(report);
  } else {
    // gen negative report
    report = ineligibleReport(clientEligible);
    console.log(report);
  }

  return report;
}

export default clientReport;
