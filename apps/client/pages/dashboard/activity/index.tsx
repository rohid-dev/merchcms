import React, { ReactElement } from "react";
import AppLayout from "../../../layouts/app-layout";
import DashboardLayout from "../../../layouts/dashbaord-layout";

const ActivityPage = () => {
  return <p>ActivityPage</p>;
};

export default ActivityPage;

ActivityPage.getLayout = (page: ReactElement) => {
  return (
    <AppLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </AppLayout>)
};
