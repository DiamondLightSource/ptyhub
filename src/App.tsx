import { Suspense, useEffect, useState } from 'react';
import './App.css'
import Submission from './components/Submission';
import Workflows from './components/Workflows';
import { Visit } from 'workflows-lib';
// import { WorkflowRelayFragment$key } from "./components/__generated__/WorkflowRelayFragment.graphql"
// import { AppWorkflowsQuery as AppWorkflowsQueryType } from "./__generated__/AppWorkflowsQuery.graphql"
// import { fetchQuery, graphql } from "relay-runtime";
// import { useClientQuery, useLazyLoadQuery, useRelayEnvironment } from "react-relay";


// const AppWorkflowsQuery = graphql`
//     query AppWorkflowsQuery($visit: VisitInput!) {
//         workflows(visit: $visit) {
//           nodes {
//             ... WorkflowRelayFragment
//           }
//         }
// }
// `;


function App() {

  const [workflowTemplateName, setWorkflowTemplateName] = useState("numpy-benchmark");
  const [userVisit, setUserVisit] = useState<Visit>();
  // const [workflowList, setWorkflowList] = useState<WorkflowRelayFragment$key[]>([]);

  // const workflows = typeof userVisit != undefined ? <Workflows visit={userVisit}/> : <></>;

  // const environment = useRelayEnvironment();

  // useEffect(() => {
  //   if (userVisit !== undefined) {
  //     const data = fetchQuery<AppWorkflowsQueryType>(environment, AppWorkflowsQuery, {
  //       visit: userVisit
  //     }).subscribe({
  //       start: () => {},
  //       complete: () => {},
  //       error: (error) => {console.log(error)},
  //       next: (data) => {
  //         const list = workflowList.concat( { ...data.workflows.nodes  } )
  //         setWorkflowList(list);
  //       }
  //     });
  //   } else {

  //   };
  //   return () => {
      
  //   };
  // }, [userVisit, setWorkflowList]);
  

  return (
    <>
      {/* <h1>Submit a Workflow</h1> */}
      {/* <Templates/> */}
      <Submission workflowName={workflowTemplateName} setVisit={setUserVisit}/>
      <h2>List of workflows for {workflowTemplateName} in {JSON.stringify(userVisit)} </h2>
      { userVisit !== undefined ? (
        <Suspense>
          <Workflows visit={userVisit}/>
        </Suspense>
          ) : ( <></> )}
    </>
  )
}

export default App
