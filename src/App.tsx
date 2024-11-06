import { Suspense, useState } from 'react';
import './App.css'
import Submission from './components/Submission';
import Workflows from './components/Workflows';
import { Visit } from 'workflows-lib';
import { WorkflowRelayFragment$data } from "./components/__generated__/WorkflowRelayFragment.graphql"


function App() {

  const [workflowTemplateName, setWorkflowTemplateName] = useState("numpy-benchmark");
  const [userVisit, setUserVisit] = useState<Visit>();
  const [workflowList, setWorkflowList] = useState<WorkflowRelayFragment$data[]>();

  // const workflows = typeof userVisit != undefined ? <Workflows visit={userVisit}/> : <></>;

  return (
    <>
      {/* <h1>Submit a Workflow</h1> */}
      {/* <Templates/> */}
      <Submission workflowName={workflowTemplateName} setVisit={setUserVisit}/>
      <h2>List of workflows for {workflowTemplateName} in </h2>
      { userVisit !== undefined ? (
        <Suspense>
          <Workflows visit={userVisit}/>
        </Suspense>
          ) : ( <></> )}
    </>
  )
}

export default App
