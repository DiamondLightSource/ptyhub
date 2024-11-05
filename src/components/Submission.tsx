import SubmissionForm from "./SubmissionForm";
import { Visit } from 'workflows-lib';
import { SubmissionQuery as SubmissionQueryType } from "./__generated__/SubmissionQuery.graphql"
import { SubmissionMutation as SubmissionMutationType } from "./__generated__/SubmissionMutation.graphql"
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, useMutation } from 'react-relay';

const SubmissionQuery = graphql`
    query SubmissionQuery($name: String!) {
        workflowTemplate(name: $name) {
          ... SubmissionFormFragment
        }
}
`;

const SubmissionMutation = graphql`
    mutation SubmissionMutation($name: String!, $visit: VisitInput!, $parameters: JSON!) {
        submitWorkflowTemplate(name: $name, visit: $visit, parameters: $parameters) {
            name
        }
}
`

export default function Submission() {

    const data = useLazyLoadQuery<SubmissionQueryType>(SubmissionQuery, {
        name: "numpy-benchmark"
    });

    const [commitMutation, isMutationInFlight] = useMutation<SubmissionMutationType>(SubmissionMutation);

    function submitWorkflow(visit: Visit, parameters: object) {
        commitMutation({
            variables: {   
                name: "numpy-benchmark",
                visit: visit,
                parameters: parameters
            }
        });
    }

    return (
        <SubmissionForm template={ data.workflowTemplate } onSubmit={submitWorkflow}/>
    );
}