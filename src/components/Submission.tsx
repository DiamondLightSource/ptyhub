import SubmissionForm from "./SubmissionForm";
import { Visit } from 'workflows-lib';
import { SubmissionQuery as SubmissionQueryType } from "./__generated__/SubmissionQuery.graphql"
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from 'react-relay';

const SubmissionQuery = graphql`
    query SubmissionQuery($name: String!) {
        workflowTemplate(name: $name) {
          ... SubmissionFormFragment
        }
}
`;

export default function Submission() {
    function submitWorkflow(visit: Visit, parameters: object) {
        alert(JSON.stringify({parameters}) + JSON.stringify({visit}));
    }

    const data = useLazyLoadQuery<SubmissionQueryType>(SubmissionQuery, {
        name: "numpy-benchmark"
    });

    return (
        <SubmissionForm template={ data.workflowTemplate } onSubmit={submitWorkflow}/>
    );
}