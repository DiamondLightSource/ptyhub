import WorkflowRelay from "./WorkflowRelay";
import {WorkflowsQuery as WorkflowsQueryType } from "./__generated__/WorkflowsQuery.graphql"
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";

const WorkflowsQuery = graphql`
    query WorkflowsQuery($visit: VisitInput!) {
        workflows(visit: $visit) {
          nodes {
            ... WorkflowRelayFragment
          }
        }
}
`;

export default function Workflows() {

    const data = useLazyLoadQuery<WorkflowsQueryType>(WorkflowsQuery, {
        visit: {proposalCode: "mg", proposalNumber: 36964, number: 1}
    });

    const node = data.workflows.nodes[0];

    return (
        <WorkflowRelay workflow={node}>""</WorkflowRelay>
    )

}