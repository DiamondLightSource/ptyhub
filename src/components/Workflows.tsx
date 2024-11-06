import WorkflowRelay from "./WorkflowRelay";
import { WorkflowsQuery as WorkflowsQueryType } from "./__generated__/WorkflowsQuery.graphql"
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { Visit } from 'workflows-lib';
// import { useState, useEffect } from "react";

const WorkflowsQuery = graphql`
    query WorkflowsQuery($visit: VisitInput!) {
        workflows(visit: $visit) {
          nodes {
            ... WorkflowRelayFragment
          }
        }
}
`;

interface workflowsProps {
  visit: Visit;
}

export default function Workflows({visit}: workflowsProps) {

    // const [data, setData] = useState<WorkflowsQuery$data>();

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setData(data);
  
    //   }, 2000);
    //   return () => clearInterval(interval);
    // }, []);

    const data = useLazyLoadQuery<WorkflowsQueryType>(WorkflowsQuery, {
      visit: visit
    });

    // const node = data.workflows.nodes[0];

    // const people = ["a", "b"];

    // const list = data.workflows.nodes;

    const workflowList = data.workflows.nodes.map( node => <WorkflowRelay workflow={node}>""</WorkflowRelay>) 

    return (
        workflowList
    )

}