import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { EmployeePage } from "./pages/EmployeePage";
import { EmployeeViewPage } from "./pages/EmployeeViewPage";
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/employee">
          <EmployeePage />
        </Route>
        <Route path="/employeeview">
          <EmployeeViewPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
