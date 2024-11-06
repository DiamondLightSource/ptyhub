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

interface SubmissionProps {
  /** The name of the workflow template, i.e. numpy-benchmark */
  workflowName: string;
  /** The set function for a user visit */
  setVisit: (value: undefined | Visit | ((prevState: undefined | Visit) => undefined | Visit)) => void;
}

export default function Submission({ workflowName, setVisit }: SubmissionProps) {

    const data = useLazyLoadQuery<SubmissionQueryType>(SubmissionQuery, {
        name: workflowName
    });

    const [commitMutation, isMutationInFlight] = useMutation<SubmissionMutationType>(SubmissionMutation);

    function submitWorkflow(visit: Visit, parameters: object) {
        commitMutation({
            variables: {   
                name: workflowName,
                visit: visit,
                parameters: parameters
            }
        });
        setVisit(visit);
    }

    return (
        <SubmissionForm template={ data.workflowTemplate } onSubmit={submitWorkflow}/>
    );
}